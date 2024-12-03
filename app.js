const express = require("express");
const bodyParser = require("body-parser");
const hospitalRoutes = require("./routes/hospital");
const ambulanceRoutes = require("./routes/ambulance");
const driverRoutes = require("./routes/driver");
const userRoutes = require("./routes/user");
require("./database");

const app = express();
require("dotenv").config();
app.use(bodyParser.json());

// Routes
app.use("/hospitals", hospitalRoutes);
app.use("/ambulances", ambulanceRoutes);
app.use("/drivers", driverRoutes);
app.use("/users", userRoutes);

// Dynamically set the port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
