export const AUTH_COOKIE_NAME = "cammann_access_session";

/**
 * Computes SHA-256 hash using the standard Web Crypto API,
 * which is fully supported in Next.js 16 Edge, Proxy, and Node runtimes.
 */
async function sha256Hex(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Generates the expected session token for the configured site password.
 */
export async function createSessionToken(password: string): Promise<string> {
  const secret = process.env.AUTH_SECRET || "cammann_optik_secret_salt_2026";
  return sha256Hex(`${password}:${secret}`);
}

/**
 * Verifies if the provided token matches the expected site password token.
 */
export async function isSessionValid(token?: string | null): Promise<boolean> {
  if (!token) return false;
  const sitePassword = process.env.SITE_PASSWORD || "cammann2026!";
  const expectedToken = await createSessionToken(sitePassword);
  return token === expectedToken;
}
