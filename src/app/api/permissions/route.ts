import { oauth2Client } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

const prefix = "https://www.googleapis.com/auth/";

const scope = [
  "youtube.readonly",
  "youtube.upload",
  "drive.file",
  "drive.metadata.readonly",
].map((scp) => prefix + scp);

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scope,
  include_granted_scopes: true,
});

export async function GET(req: NextRequest) {
    return NextResponse.redirect(authorizationUrl);
}
