import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { oauth2Client } from "@/auth";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.error();
  }

  const { tokens } = await oauth2Client.getToken(code);

  Object.entries(tokens).forEach(([key, value]) => {
    // update the cookies with the new tokens
    console.log("Checking through new tokens");
    if (cookies().has(key)) {
      if (cookies().get(key)?.value == value) {
        console.log(`cookie ${key} already has the value ${value}, skipping`);
      } else {
        console.log(`cookie ${key} has a different value, deleting`);
      }
    } else {
      ("Cookies does not have the key, setting");
    }
    cookies().delete(key);
    cookies().set(key, value);
  });

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
