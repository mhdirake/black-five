import { signOut } from "next-auth/react";

export const logout = async (callbackUrl = "/") => {
  const redirectUri = new URL(callbackUrl, window.location.origin).toString();
  const logoutResponse = await fetch(
    `/inner-api/keycloak/logout?callbackUrl=${encodeURIComponent(callbackUrl)}`
  );
  const logoutData = await logoutResponse.json().catch(() => null);

  localStorage.removeItem("access_token");
  localStorage.removeItem("userToken");

  await signOut({
    redirect: false,
    callbackUrl,
  });

  window.location.href = logoutData?.url || redirectUri;
};
