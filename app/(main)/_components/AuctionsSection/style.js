"use client";

import { Box, Container, Stack, Typography, styled } from "@mui/material";

import { sectionAnimatedBackground } from "../../style";

export const SectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(8, 0),
  ...sectionAnimatedBackground(theme, { opacity: 0.45, duration: "14s" }),

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    width: "min(880px, calc(100% - 32px))",
    height: 1,
    transform: "translateX(-50%)",
    background: `linear-gradient(90deg, transparent, ${theme.palette.info.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main}, transparent)`,
  },
}));

export const SectionHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.h2,
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 560,
  marginTop: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
  lineHeight: 1.9,
}));

export const SectionActions = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexWrap: "wrap",
  },
}));

export const TabsWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1),
  padding: theme.spacing(0.5),
  borderRadius: 18,
  border: `1px solid ${theme.palette.modules.glassBorder}`,
}));

export const SliderShell = styled(Box)(({ theme }) => ({
  position: "relative",

  ".swiper": {
    overflow: "visible",
  },

  ".swiper-slide": {
    height: "auto",
  },
}));

export const SliderControls = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const AuctionsContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
  overflow: "hidden",
}));
