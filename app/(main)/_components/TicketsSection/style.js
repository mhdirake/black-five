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

export const TicketsContainer = styled(Container)(() => ({
  overflow: "hidden",
}));

export const ContentStack = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  maxWidth: 620,
  color: theme.palette.text.primary,
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

export const FeatureGrid = styled(Grid2)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const FeatureCard = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(2),
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
}));

export const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 34,
  height: 34,
  display: "grid",
  placeItems: "center",
  borderRadius: 8,
  color: theme.palette.secondary.main,
  backgroundColor: "rgba(253, 197, 0, 0.1)",
  border: "1px solid rgba(253, 197, 0, 0.2)",
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle2,
  lineHeight: 1.9,
}));

export const TicketPanel = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: 430,
  marginInlineStart: "auto",
  padding: theme.spacing(2.5),
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",

  [theme.breakpoints.down("md")]: {
    marginInlineStart: 0,
    maxWidth: "100%",
  },
}));

export const TicketPanelHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const TicketStatus = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  ...theme.typography.subtitle1,
}));

export const TicketProduct = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.h4,
}));

export const TicketVisual = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(2),
  borderRadius: 8,
  border: `1px dashed ${theme.palette.secondary.main}`,
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}55, ${theme.palette.secondary.main}22)`,
    opacity: 0.85,
  },
}));

export const TicketVisualContent = styled(Stack)(({ theme }) => ({
  position: "relative",
  minHeight: 134,
  justifyContent: "space-between",
}));

export const TicketCode = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.h3,
}));

export const TicketMetaGrid = styled(Grid2)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const TicketMetaItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: 8,
  border: `1px solid ${theme.palette.grey[10]}`,
}));

export const TicketMetaLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  ...theme.typography.subtitle2,
}));

export const TicketMetaValue = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));

export const TicketAction = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
