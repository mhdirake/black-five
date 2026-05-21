"use client"

import { Box, Container, IconButton, Link, Stack, styled } from "@mui/material";
import Image from "next/image";

export const Main = styled('main')(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  minWidth: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

export const PageContent = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "100%",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),

  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(7),
  },
}));

export const HeaderRoot = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.appBar,
  width: "100%",
  borderBottom: `1px solid ${theme.palette.grey[10]}`,
  background: theme.palette.background.default,
  backdropFilter: "blur(18px)",
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
  minHeight: 76,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    minHeight: 64,
  },
}));

export const Brand = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  color: theme.palette.text.primary,
  textDecoration: "none",
  flexShrink: 0,
}));

export const BrandLogo = styled(Image)(({ theme }) => ({
  width: 40,
  height: "auto",
  display: "block",

  [theme.breakpoints.down("md")]: {
    width: 35,
  },
}));

export const Nav = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  gap: theme.spacing(0.5),
  flex: 1,
  justifyContent: "start",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  minHeight: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1.25),
  borderRadius: 8,
  color: theme.palette.text.text,
  fontSize: 13,
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "color 180ms ease, color 180ms ease",

  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));

export const HeaderActions = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  gap: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  width: 40,
  height: 40,
  color: theme.palette.text.primary,
  borderRadius: 8,
  border: `1px solid ${theme.palette.grey[40]}`,

  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
  },
}));

export const MobileDrawerContent = styled(Box)(({ theme }) => ({
  width: 300,
  maxWidth: "86vw",
  minHeight: "100%",
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

export const FooterRoot = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[10]}`,
  background: theme.palette.background.default,
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.4fr repeat(3, 1fr)",
  gap: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
  },
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.text,
  fontSize: 12,
  textDecoration: "none",
  width: "fit-content",

  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));

export const FooterBottom = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(5),
  paddingTop: theme.spacing(2.5),
  borderTop: `1px solid ${theme.palette.grey[40]}`,
  color: theme.palette.text.disabled,
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
  },
}));
