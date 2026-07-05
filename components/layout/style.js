"use client";

import { Box, Link, Stack, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: theme.palette.background.default,
}));

export const HeaderRoot = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: theme.zIndex.appBar,
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  padding: theme.spacing(3, 3),
  pointerEvents: "none",
  transition: "opacity 0.8s ease",

  "body.intro-active &": {
    opacity: 0,
    visibility: "hidden",
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 2),
  },
}));

export const HeaderBrand = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: 18,
  fontWeight: 400,
  letterSpacing: "0.1em",
  color: alpha(theme.palette.text.primary, 0.5),
  pointerEvents: "auto",
  cursor: "default",
  userSelect: "none",
}));

export const Nav = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  pointerEvents: "auto",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: alpha(theme.palette.background.paper, 0.55),
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: 100,
  padding: theme.spacing(0.5),
  boxShadow: `0 8px 32px ${alpha("#000000", 0.45)}`,
  maxWidth: "calc(100vw - 24px)",
  overflowX: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.4),
  },
}));

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  fontSize: 13,
  fontWeight: active ? 600 : 500,
  letterSpacing: "0.02em",
  color: active ? theme.palette.text.primary : alpha(theme.palette.text.primary, 0.5),
  padding: theme.spacing(0.75, 1.75),
  borderRadius: 100,
  textDecoration: "none",
  whiteSpace: "nowrap",
  position: "relative",
  transition: "color 0.25s ease, background 0.25s ease",

  ...(active && {
    background: alpha(theme.palette.primary.main, 0.08),
  }),

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: active ? "60%" : "0%",
    height: 2,
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    borderRadius: "0 0 4px 4px",
    boxShadow: active ? `0 0 12px 2px ${alpha(theme.palette.primary.main, 0.65)}` : "none",
    transition: "width 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease",
  },

  "&:hover": {
    color: theme.palette.text.primary,
    background: alpha(theme.palette.text.primary, 0.06),
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: theme.spacing(0.6, 1.1),
  },
}));
