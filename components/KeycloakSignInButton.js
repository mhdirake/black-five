"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

function KeycloakSignInButton({ children, callbackUrl = "/", ...props }) {
  return (
    <Button
      {...props}
      onClick={() => signIn("keycloak", { callbackUrl })}
    >
      {children}
    </Button>
  );
}

export default KeycloakSignInButton;
