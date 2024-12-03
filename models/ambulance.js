// /models/ambulance.js
const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema({
  type: { type: String, enum: ['Simple', 'Medical', 'Mortuary'], required: true },
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
  status: { type: String, enum: ['In Use', 'Available'], default: 'Available' },
});

module.exports = mongoose.model("Ambulance", ambulanceSchema);
