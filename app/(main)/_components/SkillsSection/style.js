"use client";

import { Box, Chip, Container, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const SkillsRoot = styled(Box)(({ theme }) => ({
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

export const SkillsContainer = styled(Container)({ position: "relative", zIndex: 1 });

export const SectionLabel = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
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

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(36px, 6vw, 64px)",
  fontWeight: 400,
  letterSpacing: "0.03em",
  lineHeight: 1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(7),
}));

export const CategoriesGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CategoryCard = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: alpha(theme.palette.background.paper, 0.5),
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: 16,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  height: "100%",
  transition: "border-color 0.3s ease",

  "&:hover": {
    borderColor: alpha(theme.palette.primary.main, 0.3),
  },
}));

export const CategoryName = styled(Typography)(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: theme.palette.primary.main,
}));

export const ChipsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const SkillChip = styled(Chip)(({ theme }) => ({
  height: 30,
  fontSize: 13,
  fontWeight: 500,
  borderRadius: 8,
  background: alpha(theme.palette.text.primary, 0.06),
  color: theme.palette.text.text,
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  transition: "all 0.2s ease",
  cursor: "default",

  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.1),
    borderColor: alpha(theme.palette.primary.main, 0.35),
    color: theme.palette.text.primary,
    transform: "translateY(-1px)",
  },
}));
