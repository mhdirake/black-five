"use client";

import { Box, Chip, Container, Grid2, Stack, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const AboutRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(14, 0),
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
}));

export const AboutContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
});

export const SectionLabel = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
}));

export const SectionNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: 13,
  letterSpacing: "0.15em",
  color: theme.palette.primary.main,
  lineHeight: 1,
}));

export const SectionLabelLine = styled(Box)(({ theme }) => ({
  width: 32,
  height: 1,
  background: theme.palette.primary.main,
  opacity: 0.6,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(36px, 6vw, 64px)",
  fontWeight: 400,
  letterSpacing: "0.03em",
  lineHeight: 1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(4),
}));

export const BioText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  lineHeight: 1.95,
  color: theme.palette.text.text,
  marginBottom: theme.spacing(2.5),
  maxWidth: 520,
}));

export const SkillsPanel = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: alpha(theme.palette.background.paper, 0.5),
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: 16,
  padding: theme.spacing(3.5),
  height: "100%",
}));

export const SkillsGroupTitle = styled(Typography)(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1.5),
}));

export const SkillChip = styled(Chip)(({ theme }) => ({
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  height: 32,
  background: alpha(theme.palette.text.primary, 0.06),
  color: theme.palette.text.text,
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  transition: "all 0.25s ease",
  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.1),
    borderColor: alpha(theme.palette.primary.main, 0.35),
    color: theme.palette.text.primary,
  },
}));

export const SkillGroup = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2.5),
}));

export const ChipsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const StatRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(4),
  marginTop: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(3),
  },
}));

export const StatItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StatNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(32px, 5vw, 48px)",
  fontWeight: 400,
  lineHeight: 1,
  color: theme.palette.text.primary,
  letterSpacing: "0.02em",
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
  letterSpacing: "0.05em",
  marginTop: theme.spacing(0.25),
}));