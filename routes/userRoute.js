const express = require("express");
const router = express.Router();

const User = require("../Model/User");
const cors = require("cors");
router.use(cors());

router.use(express.json());
router.use(express.urlencoded());

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const user = await newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    res.status(400).json({ error });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      const temp = {
        name: user.name,
        email: user.email, 
      };
      res.send(temp);
    } else {
      res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});
module.exports = router;
