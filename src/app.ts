import { NextFunction, Request, Response } from "express";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import viewsRoutes from "./routes/views-routes";
import routes from "./routes/routes";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views")

// Routes
app.use("/", routes);
app.use("/", viewsRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
