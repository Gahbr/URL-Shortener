const validUrl = require("valid-url");
const Url = require("../model/url");

exports.createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!validUrl.isWebUri(url)) {
      return res.status(400).json({ error: "invalid url" });
    }

    const existingUrl = await Url.findOne({ original: url });
    if (existingUrl) {
      return res.json({
        original_url: existingUrl.original,
        short_url: existingUrl.short,
      });
    }

    const lastUrl = await Url.findOne().sort({ short: "desc" });
    const short = lastUrl ? lastUrl.short + 1 : 1;

    const newUrl = await Url.create({ original: url, short });
    res.json({
      original_url: newUrl.original,
      short_url: newUrl.short,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ short: req.params.input });
    if (url) {
      return res.redirect(url.original);
    }
    res.status(404).json({ error: "URL not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
