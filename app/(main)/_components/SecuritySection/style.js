"use client";

import { Box, Container, Grid2, Stack, Typography, styled } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: "relative",

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

export const SecurityContainer = styled(Container)(() => ({
  overflow: "hidden",
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

export const SecurityCard = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(2.5),
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
}));

export const SecurityIcon = styled(Box)(({ theme }) => ({
  width: 38,
  height: 38,
  display: "grid",
  placeItems: "center",
  borderRadius: 8,
  color: theme.palette.secondary.main,
  backgroundColor: "rgba(253, 197, 0, 0.1)",
  border: "1px solid rgba(253, 197, 0, 0.2)",
}));

export const SecurityTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));

export const SecurityDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle2,
  lineHeight: 1.9,
}));

export const HighlightPanel = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(3),
  borderRadius: 8,
  border: "1px solid rgba(255, 255, 255, 0.14)",
  boxShadow: "0 18px 54px rgba(0, 14, 36, 0.32)",
}));

export const HighlightTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  ...theme.typography.h4,
}));

export const HighlightText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  color: theme.palette.text.primary,
  ...theme.typography.h6,
  lineHeight: 1.9,
}));

export const HighlightList = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.25),
  marginTop: theme.spacing(2.5),
}));

export const HighlightItem = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
}));
