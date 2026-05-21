"use client";

import { Box, Stack, Typography, styled } from "@mui/material";

export const CardRoot = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(2),
  borderRadius: 8,
  border: "1px solid rgba(255, 255, 255, 0.14)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "0 18px 54px rgba(0, 14, 36, 0.32)",
}));

export const CardMedia = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: 190,
  borderRadius: 8,
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,

  img: {
    objectFit: "cover",
  },
}));

export const CardHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.h5,
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  minHeight: 42,
  marginTop: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
  lineHeight: 1.8,
}));

export const CardMetaGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

export const CardMetaItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.25),
  borderRadius: 8,
  backgroundColor: "rgba(0, 14, 36, 0.48)",
  border: `1px solid ${theme.palette.grey[10]}`,
}));

export const CardMetaLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  ...theme.typography.subtitle1,
}));

export const CardMetaValue = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));

export const CardAction = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
