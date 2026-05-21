"use client";

import { Box, Container, Grid2, Stack, Typography, styled } from "@mui/material";

import { sectionAnimatedBackground } from "../../style";

export const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "calc(100vh - 76px)",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(9, 0, 10),
  ...sectionAnimatedBackground(theme, { opacity: 0.7, duration: "13s" }),

  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    padding: theme.spacing(6, 0, 7),
  },
}));

export const AuctionPreviewCard = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 430,
  padding: theme.spacing(2.5),
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
}));

export const AuctionPreviewMedia = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: 158,
  borderRadius: 8,
  overflow: "hidden",
  display: "flex",
  img: {
    objectFit: "contain",
    width: "100%",
    height: "auto"
  },
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  color: theme.palette.text.primary,
}));

export const HeroGrid = styled(Grid2)(({ theme }) => ({
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    rowGap: theme.spacing(5),
  },
}));

export const HeroContent = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  maxWidth: 720,
  color: theme.palette.text.primary,
}));

export const HeroBadge = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: theme.spacing(1),
  minHeight: 3,
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 8,
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.modules.goldGlass,
  border: `1px solid ${theme.palette.modules.goldBorderStrong}`,
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
}));

export const HeroTitleAccent = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.h1.fontWeight,
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 620,
  color: theme.palette.text.text,
  ...theme.typography.h6,
  lineHeight: 2,
}));

export const HeroActions = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "column",

    ".MuiButton-root": {
      width: "100%",
    },
  },
}));

export const HeroStatsGrid = styled(Grid2)(({ theme }) => ({
  width: "100%",
  maxWidth: 560,
  marginTop: theme.spacing(2),
}));

export const HeroStatCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.75),
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
}));

export const HeroStatValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  ...theme.typography.h4,
}));

export const HeroStatLabel = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
}));

export const HeroVisual = styled(Box)(({ theme }) => ({
  minHeight: 520,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    minHeight: 380,
  },
}));

export const AuctionPreviewHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
}));

export const AuctionPreviewHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
}));

export const AuctionPreviewTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  ...theme.typography.h5,
}));

export const AuctionPreviewDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.text,
  ...theme.typography.subtitle2,
}));

export const AuctionInfoGrid = styled(Grid2)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const AuctionInfoCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: 8,
  border: `1px solid ${theme.palette.grey[10]}`,
}));

export const AuctionInfoLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  ...theme.typography.subtitle1,
}));

export const AuctionInfoValue = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));
