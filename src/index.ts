import serverless from "serverless-http";
import app from "./app"; // Your Express app
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Wrap your Express app with serverless-http
export const handler = serverless(app);