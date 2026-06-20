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
}));

export const DotGrid = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `radial-gradient(circle, ${alpha(theme.palette.text.primary, 0.055)} 1px, transparent 1px)`,
  backgroundSize: "30px 30px",
  pointerEvents: "none",
  maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
}));

export const BlobLeft = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-10%",
  insetInlineStart: "-15%",
  width: "clamp(340px, 52vw, 680px)",
  height: "clamp(340px, 52vw, 680px)",
  borderRadius: "50%",
  background: alpha(theme.palette.primary.main, 0.28),
  filter: "blur(140px)",
  pointerEvents: "none",
  animation: "blobFloat 10s ease-in-out infinite alternate",
  "@keyframes blobFloat": {
    from: { transform: "translate(0, 0) scale(1)" },
    to: { transform: "translate(30px, 40px) scale(1.06)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
}));

export const BlobRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "-15%",
  insetInlineEnd: "-18%",
  width: "clamp(300px, 45vw, 600px)",
  height: "clamp(300px, 45vw, 600px)",
  borderRadius: "50%",
  background: alpha(theme.palette.primary.dark, 0.22),
  filter: "blur(160px)",
  pointerEvents: "none",
  animation: "blobFloat2 13s ease-in-out infinite alternate",
  "@keyframes blobFloat2": {
    from: { transform: "translate(0, 0) scale(1)" },
    to: { transform: "translate(-24px, -32px) scale(1.08)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
}));

export const HeroContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
});

export const HeroContent = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(3),
  maxWidth: 740,
  margin: "0 auto",
}));

export const HeroBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  padding: `${theme.spacing(0.6)} ${theme.spacing(1.5)}`,
  borderRadius: 100,
  border: "1px solid",
  borderColor: alpha(theme.palette.success.main, 0.45),
  background: alpha(theme.palette.success.main, 0.08),
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  color: theme.palette.success.main,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.05em",
  userSelect: "none",
  cursor: "default",
}));

export const BadgeDot = styled(Box)(({ theme }) => ({
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: theme.palette.success.main,
  flexShrink: 0,
  animation: "badgePulse 2.4s ease-in-out infinite",
  "@keyframes badgePulse": {
    "0%, 100%": { opacity: 1, transform: "scale(1)" },
    "50%": { opacity: 0.45, transform: "scale(0.65)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
}));

export const HeroNameOutlined = styled("span")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(42px, 11vw, 110px)",
  fontWeight: 300,
  lineHeight: 1.0,
  letterSpacing: "0.02em",
  WebkitTextStroke: `2px ${alpha(theme.palette.text.primary, 0.75)}`,
  color: "transparent",
  userSelect: "none",
}));

export const HeroNameSolid = styled("span")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(42px, 11vw, 110px)",
  fontWeight: 300,
  lineHeight: 1.0,
  letterSpacing: "0.02em",
  color: theme.palette.primary.main,
  userSelect: "none",
}));

export const HeroRoleWrapper = styled(Box)({
  minHeight: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const HeroRole = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(15px, 1.8vw, 22px)",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  letterSpacing: "0.06em",
}));

export const HeroTagline = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(14px, 1.35vw, 16px)",
  fontWeight: 400,
  color: alpha(theme.palette.text.secondary, 0.6),
  letterSpacing: "0.02em",
  lineHeight: 1.7,
  maxWidth: 500,
  textAlign: "center",
  marginTop: theme.spacing(-1),
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

export const HeroFooter = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: theme.spacing(0.5),
}));

export const HeroEmail = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  color: alpha(theme.palette.text.secondary, 0.65),
  fontSize: 13,
  textDecoration: "none",
  letterSpacing: "0.02em",
  transition: "color 0.2s",
  "&:hover": { color: theme.palette.text.primary },
}));

export const HeroSocialDivider = styled(Box)(({ theme }) => ({
  width: 1,
  height: 14,
  background: alpha(theme.palette.divider, 0.6),
  flexShrink: 0,
}));

export const HeroSocialLink = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: 8,
  color: alpha(theme.palette.text.secondary, 0.55),
  textDecoration: "none",
  transition: "color 0.2s, background 0.2s",
  cursor: "pointer",
  "& svg": { fontSize: 18 },
  "&:hover": {
    color: theme.palette.text.primary,
    background: alpha(theme.palette.text.primary, 0.07),
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
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
  animation: "scrollBounce 2.8s ease-in-out infinite",
  "@keyframes scrollBounce": {
    "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
    "50%": { transform: "translateX(-50%) translateY(10px)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
}));

export const ScrollDot = styled(Box)(({ theme }) => ({
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: alpha(theme.palette.text.primary, 0.3),
  animation: "dotPulse 2.8s ease-in-out infinite",
  "@keyframes dotPulse": {
    "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
    "50%": { opacity: 1, transform: "scale(1.5)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 0.4 },
}));

export const ScrollLine = styled(Box)(({ theme }) => ({
  width: 1,
  height: 40,
  background: `linear-gradient(to bottom, ${alpha(theme.palette.text.primary, 0.22)}, transparent)`,
}));