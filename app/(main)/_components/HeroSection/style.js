"use client";

import { Box, Button, Container, Stack, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const HeroRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  background: theme.palette.background.default,

  backgroundImage: `radial-gradient(circle, ${alpha(theme.palette.text.primary, 0.035)} 1px, transparent 1px)`,
  backgroundSize: "28px 28px",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    height: "360px",
    background: `radial-gradient(ellipse at center, ${alpha(theme.palette.primary.dark, 0.18)} 0%, transparent 70%)`,
    pointerEvents: "none",
  },
}));

export const HeroContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
});

export const HeroContent = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  textAlign: "left",
  gap: theme.spacing(2.5),
  maxWidth: 680,
}));

export const HeroNameOutlined = styled("span")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(52px, 11vw, 130px)",
  fontWeight: 400,
  lineHeight: 0.92,
  letterSpacing: "0.02em",
  WebkitTextStroke: `2px ${alpha(theme.palette.text.primary, 0.75)}`,
  color: "transparent",
  userSelect: "none",
}));

export const HeroNameSolid = styled("span")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(52px, 11vw, 130px)",
  fontWeight: 400,
  lineHeight: 0.92,
  letterSpacing: "0.02em",
  color: theme.palette.primary.main,
  userSelect: "none",
}));

export const HeroRoleWrapper = styled(Box)({
  minHeight: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  overflow: "hidden",
});

export const HeroRole = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(14px, 2vw, 19px)",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  letterSpacing: "0.05em",
}));

export const HeroCvButton = styled(Button)(({ theme }) => ({
  borderColor: alpha(theme.palette.text.primary, 0.2),
  color: alpha(theme.palette.text.primary, 0.65),
  "&:hover": {
    borderColor: alpha(theme.palette.text.primary, 0.55),
    color: theme.palette.text.primary,
    background: alpha(theme.palette.text.primary, 0.05),
  },
}));

export const HeroActions = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1.5),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    "& .MuiButton-root": { width: "100%" },
  },
}));

export const HeroEmail = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  color: alpha(theme.palette.text.secondary, 0.7),
  fontSize: 13,
  textDecoration: "none",
  letterSpacing: "0.02em",
  transition: "color 0.2s",
  "&:hover": { color: theme.palette.text.primary },
}));

export const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(0.75),
  color: alpha(theme.palette.text.primary, 0.2),
  animation: "scrollBounce 2.5s ease-in-out infinite",
  "@keyframes scrollBounce": {
    "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
    "50%": { transform: "translateX(-50%) translateY(8px)" },
  },
}));

export const ScrollLine = styled(Box)(({ theme }) => ({
  width: 1,
  height: 36,
  background: `linear-gradient(to bottom, ${alpha(theme.palette.text.primary, 0.25)}, transparent)`,
}));