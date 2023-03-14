const express = require("express");
const router = express.Router();

const room = require("../Model/Room");
const cors = require("cors");
router.use(cors());
const bp = require("body-parser");
router.use(express.json());
router.use(express.urlencoded());

router.get("/getAllRooms", async (req, res) => {
  try {
    const rooms = await room.find({});
    return res.send(rooms);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomId = req.body.room;
  try {
    const rooms = await room.findOne({ _id: roomId });
    return res.send(rooms);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

module.exports = router;
