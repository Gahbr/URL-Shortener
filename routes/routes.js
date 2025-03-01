const express = require("express");
const router = express.Router();
const urlController = require("../controllers/url-controller");

router.post("/shorturl", urlController.createShortUrl);
router.get("/:input", urlController.redirectUrl);
router.get("/url/all", async (req, res) => {
  // You should move this to controller too
  const result = await Url.findOne({}).sort({ short: "desc" });
  res.json(result);
});

module.exports = router;
