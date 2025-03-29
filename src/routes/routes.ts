import express from "express";
const router = express.Router();
import {
  createShortUrl,
  getAllUrls,
  getOriginalUrl,

} from "../controllers/url-controller";

router.post("/shorturl", createShortUrl);
router.get("/:input", getOriginalUrl);
router.get("/url/all", getAllUrls);

export default router;
