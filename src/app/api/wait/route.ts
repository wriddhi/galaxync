import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.url.split("?")[1];

  const time = parseInt(params.split("=")[1]);

  await new Promise((resolve) => setTimeout(resolve, time));

  return NextResponse.json({ message: "Waited for " + time + "ms" });
}
