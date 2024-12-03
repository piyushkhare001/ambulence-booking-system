// /models/driver.js
const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  assignedAmbulance: { type: mongoose.Schema.Types.ObjectId, ref: "Ambulance" },
});

module.exports = mongoose.model("Driver", driverSchema);
