// src/services/urlService.ts
import { isUri } from 'valid-url'; // Use the correct import for valid-url
import Url from '../model/url';

// Define the return type for createShortUrl
interface IUrlResponse {
  original: string;
  short: number;
}

// Create a short URL
const createShortUrl = async (originalUrl: string): Promise<IUrlResponse> => {
  if (!isUri(originalUrl)) {
    throw new Error('Invalid URL');
  }

  // Check if the URL already exists
  const existingUrl = await Url.findOne({ original: originalUrl });
  if (existingUrl) {
    return {
      original: existingUrl.original,
      short: existingUrl.short,
    };
  }

  // Get the last URL to determine the next short ID
  const lastUrl = await Url.findOne().sort({ short: 'desc' });
  const short = lastUrl ? lastUrl.short + 1 : 1;

  // Create and save the new URL
  const newUrl = await Url.create({ original: originalUrl, short });
  return {
    original: newUrl.original,
    short: newUrl.short,
  };
};

// Get the original URL by short ID
const getOriginalUrl = async (shortId: number): Promise<string> => {
  const url = await Url.findOne({ short: shortId });
  if (!url) {
    throw new Error('URL not found');
  }
  return url.original;
};

// Get all URLs
const getAllUrls = async (): Promise<IUrlResponse[]> => {
  const urls = await Url.find().sort({ short: 'desc' });
  return urls.map((url) => ({
    original: url.original,
    short: url.short,
  }));
};

export { createShortUrl, getOriginalUrl, getAllUrls };