"use client";

import { Box, Chip, Container, Stack, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const ProjectsRoot = styled(Box)(({ theme }) => ({
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

export const ProjectsContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
});

export const SectionHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(7),
}));

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
  marginBottom: theme.spacing(1),
}));

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
}));

export const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ProjectImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  aspectRatio: "16/9",
  position: "relative",
  overflow: "hidden",
  background: theme.palette.background.box,
  backgroundImage: `radial-gradient(circle, ${alpha(theme.palette.text.primary, 0.045)} 1px, transparent 1px)`,
  backgroundSize: "20px 20px",
  flexShrink: 0,

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.55)}, transparent)`,
    zIndex: 2,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to bottom, transparent 40%, ${alpha(theme.palette.background.paper, 0.65)})`,
    zIndex: 1,
  },
}));

export const ProjectImageBg = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.55s ease",
  zIndex: 0,
});

export const ProjectImageLabel = styled(Typography)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-bebas, sans-serif)",
  fontSize: "clamp(32px, 5vw, 60px)",
  letterSpacing: "0.1em",
  color: alpha(theme.palette.text.primary, 0.055),
  userSelect: "none",
  zIndex: 0,
}));

export const ProjectCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "featured",
})(({ theme, featured }) => ({
  position: "relative",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: alpha(theme.palette.background.paper, 0.5),
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: 16,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  cursor: "default",
  overflow: "hidden",
  transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover img": {
    transform: "scale(1.05)",
  },

  ...(featured && {
    gridColumn: "span 2",
    borderColor: alpha(theme.palette.primary.main, 0.25),
    [theme.breakpoints.down("md")]: {
      gridColumn: "span 1",
    },
  }),

  "&:hover": {
    borderColor: alpha(theme.palette.primary.main, 0.4),
    transform: "translateY(-4px)",
    boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}));

export const ProjectCardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.75),
  flexGrow: 1,
}));

export const ProjectTopRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(22px, 3vw, 30px)",
  fontWeight: 400,
  letterSpacing: "0.03em",
  lineHeight: 1.1,
  color: theme.palette.text.primary,
}));

export const ProjectLinks = styled(Stack)({
  flexDirection: "row",
  gap: 6,
  flexShrink: 0,
});

export const ProjectLink = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 34,
  height: 34,
  borderRadius: 8,
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.12),
  color: alpha(theme.palette.text.primary, 0.5),
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: alpha(theme.palette.primary.main, 0.5),
    color: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.07),
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderColor: alpha(theme.palette.primary.main, 0.5),
  },
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export const ProjectTags = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
  marginTop: "auto",
}));

export const ProjectTag = styled(Chip)(({ theme }) => ({
  height: 26,
  fontSize: 12,
  fontWeight: 500,
  borderRadius: 6,
  background: alpha(theme.palette.text.primary, 0.05),
  color: theme.palette.text.secondary,
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.08),
}));

export const EmptyState = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(10, 0),
  color: theme.palette.text.secondary,
  fontSize: 15,
  letterSpacing: "0.04em",
}));

export const FeaturedBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(-0.5),
}));

export const FeaturedDot = styled(Box)(({ theme }) => ({
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: theme.palette.primary.main,
  boxShadow: `0 0 6px ${theme.palette.primary.main}`,
}));