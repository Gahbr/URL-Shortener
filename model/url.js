const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  short: Number,
});

module.exports = mongoose.model("Url", urlSchema);
