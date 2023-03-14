const express = require("express");

const app = express();
const dbConfig = require("./db");
var cors = require("cors");
app.use(cors());

const roomsRoute = require("./routes/roomsRoute");
app.use("/api/rooms", roomsRoute);

const userRoute = require("./routes/userRoute");
app.use("/api/users", userRoute);

const bookingsRoute = require("./routes/bookingsRoute");
app.use("/api/bookings", bookingsRoute);

app.use(express.json());

const port = process.env.port || 4500;
app.listen(port, () => console.log(port));
