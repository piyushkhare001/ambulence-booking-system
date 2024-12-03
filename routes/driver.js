// /routes/driver.js
const express = require("express");
const Driver = require("../models/driver");
const router = express.Router();

// Register a new driver
router.post("/register", async (req, res) => {
  const { name, contact } = req.body;

  const driver = new Driver({ name, contact });
  await driver.save();

  res.status(201).json(driver);
});

// Get all drivers
router.get("/", async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

module.exports = router;
