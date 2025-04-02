import express from "express";
const router = express.Router();
import {
  createShortUrl,
  getAllUrls,
  getOriginalUrl,

} from "../controllers/url-controller";

router.get("/", (req, res) => {
  res.send("Welcome to URL Shortener API");
})
router.post("/shorturl", createShortUrl);
router.get("/:input", getOriginalUrl);
router.get("/url/all", getAllUrls);

export default router;
