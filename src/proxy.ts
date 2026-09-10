import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, isSessionValid } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  // If pre-launch protection is explicitly disabled, allow all traffic
  if (process.env.SITE_PROTECTED === "false") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Paths that must remain publicly accessible without a password:
  // 1. /access and /api/access (the password gate & validation endpoint)
  // 2. Legal pages /impressum, /datenschutz, /barrierefreiheit (German law compliance)
  // 3. Static assets, icons, fonts, images, and Next.js internals
  if (
    pathname.startsWith("/access") ||
    pathname.startsWith("/api/access") ||
    pathname.startsWith("/impressum") ||
    pathname.startsWith("/datenschutz") ||
    pathname.startsWith("/barrierefreiheit") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") || // allow other API routes if needed, or protect them
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(?:jpg|jpeg|png|webp|svg|gif|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Check for the session cookie
  const sessionToken = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const hasValidSession = await isSessionValid(sessionToken);

  if (hasValidSession) {
    return NextResponse.next();
  }

  // Unauthenticated user -> redirect to the access gate
  const url = request.nextUrl.clone();
  url.pathname = "/access";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg).*)",
  ],
};
