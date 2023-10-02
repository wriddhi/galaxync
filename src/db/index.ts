import { eq } from "drizzle-orm";
import { db } from "@/db/config";
import { tokens } from "@/db/schema";
import { oauth2Client } from "@/auth";
import { google } from "googleapis";

import type { FolderData } from "@/types";

export const getToken = async (email: string): Promise<string> => {
  const fetched_tokens = await db
    .select()
    .from(tokens)
    .where(eq(tokens.user, email));

  if (fetched_tokens.length === 0) {
    return "";
  }

  const { accessToken, refreshToken, expiryDate } = fetched_tokens[0];

  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
    expiry_date: Number(expiryDate),
  });

  if (Number(expiryDate) < Date.now() + 60000) {
    const new_tokens = await oauth2Client.refreshAccessToken();

    const { access_token, refresh_token, expiry_date } = new_tokens.credentials;

    await db
      .update(tokens)
      .set({
        accessToken: access_token!,
        refreshToken: refresh_token!,
        expiryDate: expiry_date?.toString(),
      })
      .where(eq(tokens.user, email));

    return access_token!;
  }

  return accessToken;
};

export const setToken = async (
  email: string,
  code: string
): Promise<string> => {
  try {
    const { tokens: authTokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(authTokens);

    if (
      !authTokens ||
      !authTokens.access_token ||
      !authTokens.refresh_token ||
      !authTokens.expiry_date
    ) {
      return "";
    }

    await db.insert(tokens).values({
      user: email,
      accessToken: authTokens.access_token,
      refreshToken: authTokens.refresh_token,
      expiryDate: authTokens.expiry_date.toString(),
    });

    return authTokens.access_token;
  } catch (error: unknown) {
    return "";
  }
};

export const createFolder = async (
  folderName: string,
  accessToken: string
): Promise<{data: FolderData | null, error: string | null}> => {

  oauth2Client.setCredentials({ access_token: accessToken });

  try {
    const drive = google.drive({ version: "v3", auth: oauth2Client });

    const res = await drive.files.create({
      requestBody: {
        name: folderName,
        mimeType: "application/vnd.google-apps.folder",
      },
    });
  
    const data: FolderData = res.data as FolderData;
  
    return {data: data, error: null};
    
  } catch (error: any) {

    return {data: null, error: error};
  }
};
