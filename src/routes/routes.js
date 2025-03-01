const express = require("express");
const router = express.Router();
const urlController = require("../controllers/url-controller");
const Url = require('../model/url');

router.post("/shorturl", urlController.createShortUrl);
router.get("/:input", urlController.redirectUrl);
router.get("/url/all", async (req, res) => {
  const result = await Url.find({}).sort({ short: "desc" });
  res.json(result);
});

module.exports = router;
