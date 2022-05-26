require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const {validationResult} = require("express-validator");
const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ error: errors.array() });
      }   
    let user = await User.findOne( { email: req.body.email }).lean().exec();
    if (user) {
      return res.status(400).send("User already exists");
    }
    user = await User.create(req.body);
    const token = newToken(user);

    res.send({ user, token });
  } catch (err) {
    return res.status(500).send({ Error: err.message});
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "Please try another email or password" });
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send({ message: "Please try another email or password" });
    }

    const token = newToken(user);
    return res.send({ user, token });
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};

module.exports = { register, login };
