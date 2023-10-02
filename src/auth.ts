import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

export const oauth2Client = new google.auth.OAuth2(
  process.env.AUTH_GOOGLE_ID,
  process.env.AUTH_GOOGLE_SECRET,
  "http://localhost:3000/api/googlecallback"
);

