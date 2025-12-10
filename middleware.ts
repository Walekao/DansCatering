import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the user has the PIN access cookie
  const pinAccess = request.cookies.get("pin_access");

  // Allow access to API routes (including the PIN auth route)
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // If no PIN access cookie, redirect to home (PIN protection will show)
  if (!pinAccess || pinAccess.value !== "granted") {
    // Allow access to the home page where PIN entry will be shown
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    // Redirect other pages to home if not authenticated
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

