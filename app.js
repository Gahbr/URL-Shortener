const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static("public"));

// Routes
app.use("/", require("./routes/routes"));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
