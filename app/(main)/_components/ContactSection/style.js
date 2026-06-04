"use client";

import { Box, Container, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const ContactRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(14, 0),
  overflow: "hidden",
  background: theme.palette.background.default,

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    background: `linear-gradient(90deg, transparent, ${theme.palette.divider}, transparent)`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",
    height: "400px",
    background: `radial-gradient(ellipse at center, ${alpha(theme.palette.primary.dark, 0.14)} 0%, transparent 70%)`,
    pointerEvents: "none",
  },
}));

export const ContactContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
});

export const SectionLabel = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
}));

export const SectionNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: 15,
  letterSpacing: "0.2em",
  color: theme.palette.primary.main,
  lineHeight: 1,
}));

export const SectionLabelLine = styled(Box)(({ theme }) => ({
  width: 48,
  height: 1,
  background: theme.palette.primary.main,
  opacity: 0.55,
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(40px, 8vw, 96px)",
  fontWeight: 400,
  letterSpacing: "0.03em",
  lineHeight: 1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2.5),
}));

export const ContactSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(14px, 1.5vw, 16px)",
  color: theme.palette.text.secondary,
  lineHeight: 1.9,
  maxWidth: 460,
  margin: "0 auto",
  marginBottom: theme.spacing(5),
}));

export const EmailLink = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(22px, 3.5vw, 42px)",
  letterSpacing: "0.04em",
  color: theme.palette.text.primary,
  textDecoration: "none",
  padding: theme.spacing(1.5, 3.5),
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.12),
  borderRadius: 100,
  marginBottom: theme.spacing(5),
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: alpha(theme.palette.primary.main, 0.5),
    color: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.05),
    transform: "scale(1.02)",
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 4,
  },
}));

export const SocialRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export const SocialLink = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: alpha(theme.palette.text.primary, 0.45),
  textDecoration: "none",
  padding: theme.spacing(0.75, 1.5),
  borderRadius: 8,
  transition: "all 0.2s ease",

  "&:hover": {
    color: theme.palette.text.primary,
    background: alpha(theme.palette.text.primary, 0.06),
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

export const SocialItem = styled("div")({
  display: "contents",
});

export const SocialDivider = styled(Box)(({ theme }) => ({
  width: 1,
  height: 16,
  background: alpha(theme.palette.text.primary, 0.15),
}));
