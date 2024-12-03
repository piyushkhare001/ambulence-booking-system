// /routes/ambulance.js
const express = require("express");
const Ambulance = require("../models/ambulance");
const router = express.Router();

// Register a new ambulance
router.post("/register", async (req, res) => {
  const { type, hospitalId, driverId } = req.body;

  const ambulance = new Ambulance({
    type,
    hospital: hospitalId,
    driver: driverId,
  });
  await ambulance.save();

  res.status(201).json(ambulance);
});

// Find available ambulances
router.get("/available", async (req, res) => {
  const availableAmbulances = await Ambulance.find({ status: "Available" }).populate("hospital").populate("driver");
  res.json(availableAmbulances);
});

// Update ambulance status
router.patch("/:id", async (req, res) => {
  const { status } = req.body;
  const ambulance = await Ambulance.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(ambulance);
});

module.exports = router;
