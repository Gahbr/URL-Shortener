import express from "express";
const router = express.Router();

import { Request, Response } from "express";

// Serve index.html
router.get("/", (req: Request, res: Response) => {
  res.sendFile(process.cwd() + "/src/views/index.html");
});

// Serve result.html
router.get("/shorturl/result", (req: Request, res: Response) => {
  res.sendFile(process.cwd() + "/src/views/result.html");
});

export default router;
