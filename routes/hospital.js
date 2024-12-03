// /routes/hospital.js
const express = require("express");
const Hospital = require("../models/hospital");
const router = express.Router();

// Create a new hospital
router.post("/register", async (req, res) => {
  const { name, location } = req.body;

  const hospital = new Hospital({ name, location });
  await hospital.save();

  res.status(201).json(hospital);
});

// Get hospital details
router.get("/:id", async (req, res) => {
  const hospital = await Hospital.findById(req.params.id).populate("ambulances").populate("drivers");
  res.json(hospital);
});

module.exports = router;
