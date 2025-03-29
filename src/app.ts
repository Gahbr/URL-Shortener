import { NextFunction, Request, Response } from "express";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import routes from "./routes/routes";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/", routes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
