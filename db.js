const mongoose = require("mongoose");
var mongoURL =
  "mongodb+srv://mithunprakash1522:mynameis15@cluster0.aqvi6ot.mongodb.net/MERN-Rooms";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var connection = mongoose.connection;
connection.on("error", () => {
  console.log("Error in MongoDB connection");
});
connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});
module.exports = mongoose;
