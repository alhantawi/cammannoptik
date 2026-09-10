import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, createSessionToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    const expectedPassword = process.env.SITE_PASSWORD || "cammann2026!";

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "Bitte geben Sie ein Passwort ein." },
        { status: 400 }
      );
    }

    if (password !== expectedPassword) {
      return NextResponse.json(
        { success: false, message: "Das eingegebene Passwort ist leider nicht korrekt." },
        { status: 401 }
      );
    }

    // Generate secure session token
    const token = await createSessionToken(expectedPassword);

    const response = NextResponse.json({
      success: true,
      message: "Zugriff erfolgreich freigeschaltet."
    });

    // 30 days validity
    const maxAge = 60 * 60 * 24 * 30;

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge
    });

    return response;
  } catch (error) {
    console.error("Error verifying access password:", error);
    return NextResponse.json(
      { success: false, message: "Ein interner Serverfehler ist aufgetreten." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Zugriffssitzung beendet."
  });

  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });

  return response;
}
