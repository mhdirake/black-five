import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getNextAuthToken } from "@/config/nextAuthToken";

export async function GET(request) {
  const cookieStore = await cookies();
  const token = await getNextAuthToken(cookieStore);

  const callbackUrl = request.nextUrl.searchParams.get("callbackUrl") || "/";
  const redirectUri = new URL(callbackUrl, request.nextUrl.origin).toString();
  const keycloakIssuer = process.env.KEYCLOAK_ISSUER;

  if (!keycloakIssuer || !token?.idToken) {
    return NextResponse.json({
      url: redirectUri,
    });
  }

  const logoutUrl = new URL(`${keycloakIssuer}/protocol/openid-connect/logout`);
  logoutUrl.searchParams.set("id_token_hint", token.idToken);
  logoutUrl.searchParams.set("post_logout_redirect_uri", redirectUri);

  return NextResponse.json({
    url: logoutUrl.toString(),
  });
}
