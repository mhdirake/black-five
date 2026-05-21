"use client";

import { Box, styled } from "@mui/material";

export const HomeRoot = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  overflow: "hidden",
  background: theme.palette.background.default,
}));
