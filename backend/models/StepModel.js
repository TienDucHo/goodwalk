const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 100,
    default: null,
  },
  stepcounter: {
    type: Number,
    default: 0,
  },
  start: {
    type: Date,
    default: Date.now,
  },
  end: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Step", stepSchema);
