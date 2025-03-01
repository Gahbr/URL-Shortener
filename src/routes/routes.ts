import express from "express";
const router = express.Router();
import { createShortUrl, getAllUrls, redirectUrl } from "../controllers/url-controller";
import Url from "../model/url";
import { NextFunction, Request, Response } from "express";

router.post("/shorturl", createShortUrl);
router.get("/:input", redirectUrl);
router.get("/url/all", getAllUrls);

export default router;
