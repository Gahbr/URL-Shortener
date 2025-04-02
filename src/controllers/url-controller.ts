// src/controllers/urlController.ts
import { Request, Response } from "express";
import * as UrlService from "../services/url-service";

interface CreateShortUrlRequest {
  url: string;
}

// Create a short URL
export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { url } = req.body as CreateShortUrlRequest;

    // Call the service to create a short URL
    const newUrl = await UrlService.createShortUrl(url);

    res.json(newUrl);
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: (error as Error).message });
  }
};

// Redirect to the original URL
export const getOriginalUrl = async (req: Request, res: Response) => {
  try {
    const shortId = req.params.input;

    // Call the service to get the original URL
    const originalUrl = await UrlService.getOriginalUrl(shortId);

    // Redirect to the original URL
    res.json({ originalUrl: originalUrl });
  } catch (error) {
    // Handle errors
    res.status(404).json({ error: (error as Error).message });
  }
};

// Get all URLs
export const getAllUrls = async (req: Request, res: Response) => {
  try {
    // Call the service to get all URLs
    const urls = await UrlService.getAllUrls();

    // Send the response
    res.json(urls);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "Server error" });
  }
};
