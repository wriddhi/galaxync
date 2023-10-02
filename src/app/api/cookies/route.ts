import { oauth2Client } from "@/auth";
import { getToken } from "@/db";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const access_token = await getToken("wriddhi19032002.jisu.cse@gmail.com");
        
        oauth2Client.setCredentials({access_token});

        const drive = google.drive({ version: "v3", auth: oauth2Client });

        const foldersResponse = await drive.files.list({
          q: "mimeType='application/vnd.google-apps.folder'",
        });
    
        const folders = foldersResponse.data.files;
    
        return NextResponse.json(folders);

      } catch (error : unknown) {
        console.error('Error retrieving Google Drive folders:');

        return NextResponse.json({ error: error });
      }
    };