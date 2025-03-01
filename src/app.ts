import { NextFunction, Request, Response } from "express";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
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
app.get("/", (req: Request, res:Response) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
