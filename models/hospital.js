// /models/hospital.js
const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  ambulances: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ambulance" }],
  drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Driver" }],
});

module.exports = mongoose.model("Hospital", hospitalSchema);
