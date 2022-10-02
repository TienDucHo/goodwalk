const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 100,
    default: null,
  },
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
    default: null,
  },
  password: {
    type: String,
    required: true,
    max: 2048,
    min: 6,
  },
  stepcounter: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
