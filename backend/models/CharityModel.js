const mongoose = require("mongoose");

const charityScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
    default: null,
  },
  campaignName: { type: String, default: null },
  information: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Charity", charityScheme);
