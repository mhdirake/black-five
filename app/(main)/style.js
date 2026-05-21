"use client";

import { Box, styled } from "@mui/material";

export const HomeRoot = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  overflow: "hidden",
  background: theme.palette.background.default,
}));

export const sectionAnimatedBackground = (theme, options = {}) => ({
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: options.inset || "-24%",
    pointerEvents: "none",
    background: `radial-gradient(circle at 18% 26%, ${theme.palette.modules.backgroundInfoGlow} 0, transparent 24%),
      radial-gradient(circle at 78% 30%, ${theme.palette.modules.backgroundGoldGlow} 0, transparent 22%),
      radial-gradient(circle at 52% 82%, ${theme.palette.modules.backgroundPrimaryGlow} 0, transparent 26%)`,
    backgroundSize: "140% 140%",
    filter: "blur(10px)",
    opacity: options.opacity || 0.6,
    animation: `${options.animationName || "sectionBackgroundFloat"} ${options.duration || "12s"} ease-in-out infinite alternate`,
  },

  "@keyframes sectionBackgroundFloat": {
    "0%": {
      transform: "translate3d(-4%, -2%, 0) scale(1)",
      backgroundPosition: "0% 35%",
    },
    "50%": {
      transform: "translate3d(4%, 3%, 0) scale(1.05)",
      backgroundPosition: "65% 55%",
    },
    "100%": {
      transform: "translate3d(2%, -4%, 0) scale(1.08)",
      backgroundPosition: "100% 25%",
    },
  },
});
