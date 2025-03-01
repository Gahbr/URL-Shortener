import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const mongoUrl = process.env.MONGO_URI as string;

export const urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  short: Number,
});

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

export default connectDB;
