"use client";

import { Box, Container, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const ContactRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(14, 0),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(9, 0),
  },
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
  fontSize: "clamp(14px, 1.8vw, 22px)",
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

export const OrDivider = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  margin: theme.spacing(5, 0, 3),
  "&::before, &::after": {
    content: '""',
    flex: 1,
    height: 1,
    background: alpha(theme.palette.text.primary, 0.1),
  },
}));

export const FormRoot = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: 520,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  textAlign: "left",
  "[dir='rtl'] &": { textAlign: "right" },
}));

export const FormField = styled("input")(({ theme }) => ({
  width: "100%",
  background: alpha(theme.palette.text.primary, 0.04),
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  borderRadius: 10,
  padding: theme.spacing(1.75, 2.5),
  fontSize: 14,
  color: theme.palette.text.primary,
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease, background 0.2s ease",
  "&::placeholder": {
    color: alpha(theme.palette.text.primary, 0.35),
  },
  "&:focus": {
    borderColor: alpha(theme.palette.primary.main, 0.5),
    background: alpha(theme.palette.primary.main, 0.04),
  },
}));

export const FormTextarea = styled("textarea")(({ theme }) => ({
  width: "100%",
  background: alpha(theme.palette.text.primary, 0.04),
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  borderRadius: 10,
  padding: theme.spacing(1.75, 2.5),
  fontSize: 14,
  color: theme.palette.text.primary,
  outline: "none",
  fontFamily: "inherit",
  resize: "vertical",
  minHeight: 120,
  boxSizing: "border-box",
  transition: "border-color 0.2s ease, background 0.2s ease",
  "&::placeholder": {
    color: alpha(theme.palette.text.primary, 0.35),
  },
  "&:focus": {
    borderColor: alpha(theme.palette.primary.main, 0.5),
    background: alpha(theme.palette.primary.main, 0.04),
  },
}));

export const SubmitButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  width: "100%",
  padding: theme.spacing(1.75, 3),
  borderRadius: 10,
  border: "none",
  background: theme.palette.primary.main,
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  fontFamily: "inherit",
  cursor: "pointer",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  "&:hover:not(:disabled)": {
    opacity: 0.88,
    transform: "translateY(-1px)",
  },
  "&:disabled": {
    opacity: 0.55,
    cursor: "not-allowed",
  },
}));

export const FormMessage = styled(Box, {
  shouldForwardProp: (p) => p !== "success",
})(({ theme, success }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: 8,
  fontSize: 13,
  textAlign: "center",
  background: success
    ? alpha("#4caf50", 0.12)
    : alpha("#f44336", 0.12),
  color: success ? "#4caf50" : "#f44336",
  border: "1px solid",
  borderColor: success ? alpha("#4caf50", 0.25) : alpha("#f44336", 0.25),
}));
