import express from "express";
const router = express.Router();
import { createShortUrl, redirectUrl } from "../controllers/url-controller";
import Url from "../model/url";
import { NextFunction, Request, Response } from "express";

router.post("/shorturl", createShortUrl);
router.get("/:input", redirectUrl);
router.get("/url/all", async (req: Request, res: Response) => {
  const result = await Url.find({}).sort({ short: "desc" });
  res.json(result);
});

module.exports = router;
