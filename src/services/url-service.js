const Url = require('../model/url');
const validUrl = require('valid-url');

const createShortUrl = async (originalUrl) => {
  if (!validUrl.isWebUri(originalUrl)) {
    throw new Error('Invalid URL');
  }

  const existingUrl = await Url.findOne({ original: originalUrl });
  if (existingUrl) return existingUrl;

  const lastUrl = await Url.findOne().sort({ short: 'desc' });
  const short = lastUrl ? lastUrl.short + 1 : 1;

  const newUrl = await Url.create({ original: originalUrl, short });
  return newUrl;
};

const getOriginalUrl = async (shortId) => {
  const url = await Url.findOne({ short: shortId });
  if (!url) throw new Error('URL not found');
  return url.original;
};

const getAllUrls = async () => {
  return await Url.find().sort({ short: 'desc' });
};

module.exports = {
  createShortUrl,
  getOriginalUrl,
  getAllUrls,
};