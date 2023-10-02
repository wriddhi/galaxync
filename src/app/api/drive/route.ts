import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export async function GET(req: NextRequest) {
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
  });

  const service = google.drive({
    version: "v3",
    auth: auth,
  });

  const res = await service.files.list({
    pageSize: 10,
    fields: "nextPageToken, files(id, name)",
  });

  return NextResponse.json({ response: JSON.stringify(res.data, null, 2) });
}
