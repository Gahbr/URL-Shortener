const UrlService = require('../services/url-service');

exports.createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const newUrl = await UrlService.createShortUrl(url);
    
    res.json({
      original_url: newUrl.original,
      short_url: newUrl.short
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const originalUrl = await UrlService.getOriginalUrl(req.params.input);
    res.redirect(originalUrl);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await UrlService.getAllUrls();
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};