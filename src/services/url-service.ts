import { isUri } from "valid-url";
import Url from "../model/url";

interface IUrlResponse {
  original: string;
  short: string;
}
const generateRandomString = (length: number = 5): string => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

const createShortUrl = async (originalUrl: string): Promise<IUrlResponse> => {
  if (!isUri(originalUrl)) {
    throw new Error("Invalid URL");
  }

  // Normalize the original URL to lowercase for consistency (case-insensitive check)
  const normalizedUrl = originalUrl.toLowerCase();

  // Check if the URL already exists
  const existingUrl = await Url.findOne({
    original: normalizedUrl,
  });
  if (existingUrl) {
    // If the URL already exists, return the existing shortened URL
    return {
      original: existingUrl.original,
      short: existingUrl.short,
    };
  }

  // If the URL doesn't exist, create a new short URL
  const newUrl = await Url.create({
    original: normalizedUrl,  
    short: generateRandomString(),
  });

  return {
    original: newUrl.original,
    short: newUrl.short,
  };
};


// Get the original URL by short ID
const getOriginalUrl = async (shortId: string): Promise<string> => {
  const url = await Url.findOne({ short: shortId.toLowerCase() });
  if (!url) {
    throw new Error("URL not found");
  }
  return url.original;
};

// Get all URLs
const getAllUrls = async (): Promise<IUrlResponse[]> => {
  const urls = await Url.find();
  return urls.map((url) => ({
    original: url.original,
    short: url.short,
  }));
};

export { createShortUrl, getOriginalUrl, getAllUrls };
