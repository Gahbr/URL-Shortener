import express from "express";
const router = express.Router();

import { Request, Response } from "express";

// Serve index.html
router.get("/", (req: Request, res: Response) => {
  res.sendFile(process.cwd() + "/src/views/index.html");
});

// Serve result.html
router.get("/shorturl/result", (req: Request, res: Response) => {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3002";
  res.render("result", { baseUrl });
});

export default router;
