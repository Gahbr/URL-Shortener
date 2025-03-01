const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URI;

const connectDB = async () => {
  console.log("db.connectDB() - connecting to the Database...")
  try {
    await mongoose.connect(mongoUrl, );
    console.log("db.connectDB() - MongoDB connected");
  } catch (err) {
    console.error("db.connectDB() - Database connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
