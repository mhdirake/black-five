"use client";

import { SessionProvider } from "next-auth/react";

function AuthSessionProvider({ children }) {
  return <SessionProvider basePath="/inner-api/auth">{children}</SessionProvider>;
}

export default AuthSessionProvider;
