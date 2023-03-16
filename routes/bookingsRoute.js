const express = require("express");
const router = express.Router();
const moment = require("moment");

const Booking = require("../Model/Booking");
const cors = require("cors");
router.use(cors());

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const Room = require("../Model/Room");

router.post("/bookroom", async (req, res) => {
  const { room, userId, fromdate, todate, totalDays } = req.body;
  try {
    const newBooking = new Booking({
      room: room.name,
      roomId: room._id,
      userId,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      totalDays,
    });
    const booking = await newBooking.save();
    const roomTemp = await Room.findOne({ _id: room._id });
    roomTemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      userId: userId,
      status: booking.status,
    });
    await roomTemp.save();
    res.send("Room Booked Successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/getBookingByUserId", async (req, res) => {
  const userid = req.body.userid;
  try {
    const book = await Booking.find({ userId: userid });
    res.send(book);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
