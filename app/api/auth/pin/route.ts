import { NextRequest, NextResponse } from "next/server";

const CORRECT_PIN = "4497";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin } = body;

    if (!pin || pin !== CORRECT_PIN) {
      return NextResponse.json(
        { error: "Invalid PIN code" },
        { status: 401 }
      );
    }

    // Set a secure cookie that expires in 24 hours
    const response = NextResponse.json(
      { success: true, message: "Access granted" },
      { status: 200 }
    );

    // Set cookie with httpOnly flag for security (24 hours)
    response.cookies.set("pin_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("PIN validation error:", error);
    return NextResponse.json(
      { error: "Failed to validate PIN" },
      { status: 500 }
    );
  }
}

