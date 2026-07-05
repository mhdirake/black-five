"use client";

import { Box, Button, Container, Stack, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

const noiseSvg = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>" +
  "<rect width='100%' height='100%' filter='url(#n)'/></svg>"
);

export const HeroRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  background: theme.palette.background.default,
}));

export const GrainOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 5,
  opacity: 0.05,
  mixBlendMode: "overlay",
  pointerEvents: "none",
  backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
  backgroundRepeat: "repeat",
});

export const DotGrid = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `radial-gradient(circle, ${alpha(theme.palette.text.primary, 0.055)} 1px, transparent 1px)`,
  backgroundSize: "30px 30px",
  pointerEvents: "none",
  maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
}));

export const Monogram = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-8%",
  insetInlineEnd: "-3%",
  fontFamily: "var(--font-bebas, sans-serif)",
  fontSize: "clamp(220px, 30vw, 480px)",
  lineHeight: 0.78,
  letterSpacing: "-0.01em",
  color: "transparent",
  WebkitTextStroke: `1px ${alpha(theme.palette.text.primary, 0.055)}`,
  userSelect: "none",
  pointerEvents: "none",
  zIndex: 0,
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const CursorGlow = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  mixBlendMode: "screen",
});

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
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    textAlign: "start",
    margin: 0,
  },
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

export const HeroGreeting = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  color: alpha(theme.palette.text.primary, 0.7),
  fontSize: 15,
  fontStyle: "italic",
  fontWeight: 500,
  letterSpacing: "0.01em",
}));

export const HeroGreetingLine = styled(Box)(({ theme }) => ({
  width: 32,
  height: 1,
  flexShrink: 0,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
}));

export const HeroNameGroup = styled(Box)({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
});

export const HeroNameOutlined = styled("span")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-jakarta, sans-serif)",
  fontSize: "clamp(40px, 9vw, 92px)",
  fontWeight: 200,
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  color: theme.palette.text.primary,
  userSelect: "none",
}));

export const HeroNameSolid = styled("span")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-jakarta, sans-serif)",
  fontSize: "clamp(40px, 9vw, 92px)",
  fontWeight: 200,
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  color: theme.palette.primary.main,
  userSelect: "none",
}));

export const HeroNameFlourish = styled("svg")(({ theme }) => ({
  width: "clamp(120px, 15vw, 170px)",
  height: 16,
  marginTop: theme.spacing(0.5),
  alignSelf: "center",
  [theme.breakpoints.up("md")]: {
    alignSelf: "flex-start",
    insetInlineStart: 4,
  },
}));

export const HeroRoleWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: 32,
  padding: `${theme.spacing(0.5)} ${theme.spacing(1.75)}`,
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.modules.glassBorder,
  background: alpha(theme.palette.common.white, 0.02),
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  overflow: "hidden",
}));

export const HeroRole = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-jakarta)",
  fontSize: "clamp(12px, 1.5vw, 15px)",
  fontWeight: 500,
  color: theme.palette.text.text,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "&::before, &::after": {
    content: '"/"',
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

export const HeroTagline = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(14px, 1.35vw, 16px)",
  fontWeight: 400,
  color: alpha(theme.palette.text.secondary, 0.6),
  letterSpacing: "0.02em",
  lineHeight: 1.7,
  maxWidth: 500,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "start",
  },
}));

export const HeroPrimaryButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 55%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.35)}`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-75%",
    width: "50%",
    height: "100%",
    background: `linear-gradient(120deg, transparent, ${alpha(theme.palette.common.white, 0.35)}, transparent)`,
    transform: "skewX(-20deg)",
    transition: "transform 0.7s ease",
  },
  "&:hover": {
    boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.5)}`,
    transform: "translateY(-2px)",
  },
  "&:hover::before": {
    transform: "skewX(-20deg) translateX(320%)",
  },
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
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
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
  gap: theme.spacing(1),
  zIndex: 2,
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

export const ScrollLabel = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: alpha(theme.palette.text.secondary, 0.55),
  userSelect: "none",
}));

export const ScrollTrack = styled(Box)(({ theme }) => ({
  position: "relative",
  width: 1,
  height: 44,
  overflow: "hidden",
  background: alpha(theme.palette.text.primary, 0.12),
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 14,
    background: theme.palette.primary.main,
    animation: "scrollSlide 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
  },
  "@keyframes scrollSlide": {
    from: { transform: "translateY(-16px)" },
    to: { transform: "translateY(48px)" },
  },
  "@media (prefers-reduced-motion: reduce)": {
    "&::after": { animation: "none", top: "50%" },
  },
}));

export const HeroImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: -188,
  insetInlineEnd: "clamp(16px, 6vw, 146px)",
  right: -130,
  zIndex: 1,
  width: "clamp(260px, 82vw, 840px)",
  pointerEvents: "none",
  userSelect: "none",
  opacity: 0.2,
  transform: "rotate(22deg)",
  animation: "sketchDrift 14s ease-in-out infinite alternate",
  "@keyframes sketchDrift": {
    from: { transform: "rotate(22deg) translate(0, 0) scale(1)", opacity: 0.16 },
    to: { transform: "rotate(25deg) translate(-14px, -18px) scale(1.03)", opacity: 0.24 },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: "8%",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.32)} 0%, ${alpha(theme.palette.primary.dark, 0.12)} 55%, transparent 75%)`,
    filter: "blur(48px)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const HeroImage = styled("img")(({ theme }) => ({
  position: "relative",
  display: "block",
  width: "100%",
  height: "auto",
  filter: `drop-shadow(0 0 14px ${alpha(theme.palette.primary.main, 0.55)}) drop-shadow(0 0 42px ${alpha(theme.palette.primary.main, 0.3)})`,
  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
}));
