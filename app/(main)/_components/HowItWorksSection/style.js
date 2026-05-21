"use client";

import { Box, Container, Grid2, Stack, Typography, styled } from "@mui/material";

import { sectionAnimatedBackground } from "../../style";

export const SectionRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: "relative",
  ...sectionAnimatedBackground(theme, { opacity: 0.42, duration: "15s" }),

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
  alignItems: "center",
  maxWidth: 720,
  margin: "0 auto",
  textAlign: "center",
  marginBottom: theme.spacing(5),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.h2,
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
  lineHeight: 1.9,
}));

export const TimelineGrid = styled(Grid2)(({ theme }) => ({
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 39,
    left: 0,
    right: 0,
    height: 1,
    background: `linear-gradient(90deg, transparent, ${theme.palette.info.main}, ${theme.palette.secondary.main}, transparent)`,
  },

  [theme.breakpoints.down("md")]: {
    "&::before": {
      display: "none",
    },
  },
}));

export const StepCard = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100%",
  padding: theme.spacing(2.5),
  borderRadius: 8,
  border: "1px solid rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
}));

export const StepNumber = styled(Box)(({ theme }) => ({
  width: 34,
  height: 34,
  display: "grid",
  placeItems: "center",
  borderRadius: 8,
  color: theme.palette.secondary.main,
  border: "1px solid",
  borderColor: theme.palette.secondary.main,
  ...theme.typography.subtitle1,
}));

export const StepIcon = styled(Box)(({ theme }) => ({
  width: 34,
  height: 34,
  display: "grid",
  placeItems: "center",
  borderRadius: 8,
  color: theme.palette.secondary.main,
  backgroundColor: "rgba(253, 197, 0, 0.1)",
  border: "1px solid rgba(253, 197, 0, 0.2)",
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));

export const StepDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle2,
  lineHeight: 1.9,
}));

export const SummaryPanel = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(3),
  borderRadius: 8,
  border: "1px solid rgba(255, 255, 255, 0.14)",
  boxShadow: "0 18px 54px rgba(0, 14, 36, 0.32)",
}));

export const SummaryTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.h4,
}));

export const SummaryList = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2.5),
}));

export const SummaryItem = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1.25),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
}));

export const HowItWorksContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
  overflow: "hidden",
}));
