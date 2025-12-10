import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pinAccess = request.cookies.get("pin_access");

  if (pinAccess && pinAccess.value === "granted") {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

