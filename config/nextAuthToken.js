import { decode, getToken } from "next-auth/jwt";

const getSessionCookieName = () => {
  const isSecure = process.env.NEXTAUTH_URL?.startsWith("https://");

  return isSecure
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";
};

const getChunkIndex = (cookieName) => {
  const suffix = cookieName.split(".").pop();
  const index = Number(suffix);

  return Number.isNaN(index) ? 0 : index;
};

const getChunkedSessionToken = (cookieStore) => {
  const sessionCookieName = getSessionCookieName();
  const chunks = cookieStore
    .getAll()
    .filter((cookie) => cookie.name.startsWith(sessionCookieName))
    .sort((a, b) => getChunkIndex(a.name) - getChunkIndex(b.name));

  if (!chunks.length) {
    return null;
  }

  return chunks.map((cookie) => cookie.value).join("");
};

export const getNextAuthToken = async (cookieStore) => {
  const token = await getToken({
    req: {
      cookies: cookieStore,
    },
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token) {
    return token;
  }

  const rawToken = getChunkedSessionToken(cookieStore);

  if (!rawToken) {
    return null;
  }

  return decode({
    token: rawToken,
    secret: process.env.NEXTAUTH_SECRET,
  });
};
