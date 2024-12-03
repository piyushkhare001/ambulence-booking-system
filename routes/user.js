const express = require('express');
const router = express.Router();

// Sample POST /users endpoint
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // Add password validation (e.g., length check)
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Simulate user creation logic (e.g., save to database)
    res.status(201).json({ 
        message: 'User created successfully', 
        data: { name, email, password } 
    });
});

module.exports = router;

// User finds available ambulance
// router.get("/find-ambulance", async (req, res) => {
//   const availableAmbulances = await Ambulance.find({ status: "Available" }).populate("hospital").populate("driver");
//   res.json(availableAmbulances);
// });

// module.exports = router;
