"use client";

import { Box, Chip, Container, Typography, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const ExperienceRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(14, 0),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(9, 0),
  },
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

export const ExperienceContainer = styled(Container)({
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
  marginBottom: theme.spacing(8),
}));

export const Timeline = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0),

  "&::before": {
    content: '""',
    position: "absolute",
    insetInlineStart: 7,
    top: 8,
    bottom: 8,
    width: 1,
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${alpha(theme.palette.divider, 0.3)})`,

    [theme.breakpoints.up("md")]: {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
}));

export const TimelineItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})(({ theme, reverse }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(6),
  paddingInlineStart: theme.spacing(5),

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    paddingInlineStart: 0,
    paddingInlineEnd: 0,

    ...(reverse && {
      "& > *:nth-child(2)": { order: 2 },
      "& > *:nth-child(3)": { order: 1 },
    }),
  },
}));

export const TimelineDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ theme, current }) => ({
  position: "absolute",
  insetInlineStart: 0,
  top: 6,
  width: 15,
  height: 15,
  borderRadius: "50%",
  background: current ? theme.palette.primary.main : theme.palette.background.paper,
  border: "2px solid",
  borderColor: current ? theme.palette.primary.main : alpha(theme.palette.text.primary, 0.2),
  zIndex: 1,

  ...(current && {
    boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
    animation: "dotPulse 2s ease-in-out infinite",
    "@keyframes dotPulse": {
      "0%, 100%": { boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}` },
      "50%": { boxShadow: `0 0 0 8px ${alpha(theme.palette.primary.main, 0.08)}` },
    },
    "@media (prefers-reduced-motion: reduce)": { animation: "none" },
  }),

  [theme.breakpoints.up("md")]: {
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

export const TimelineCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})(({ theme, reverse }) => ({
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: alpha(theme.palette.background.paper, 0.5),
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: 16,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  direction: "ltr",
  textAlign: "left",

  "&:hover": {
    borderColor: alpha(theme.palette.primary.main, 0.35),
    boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.08)}`,
  },

  [theme.breakpoints.up("md")]: {
    marginLeft: reverse ? 0 : theme.spacing(4),
    marginRight: reverse ? theme.spacing(4) : 0,
  },
}));

export const TimelinePeriod = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})(({ theme, reverse }) => ({
  display: "none",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: reverse ? "flex-start" : "flex-end",
    paddingInlineStart: reverse ? theme.spacing(4) : 0,
    paddingInlineEnd: reverse ? 0 : theme.spacing(4),
    paddingTop: theme.spacing(0.5),
  },
}));

export const PeriodText = styled(Typography)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  letterSpacing: "0.04em",
}));

export const CurrentBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: theme.palette.primary.main,
}));

export const CurrentDot = styled(Box)(({ theme }) => ({
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: theme.palette.primary.main,
  boxShadow: `0 0 6px ${theme.palette.primary.main}`,
}));

export const CompanyName = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-bebas, 'Arial Black', sans-serif)",
  fontSize: "clamp(20px, 2.5vw, 26px)",
  fontWeight: 400,
  letterSpacing: "0.04em",
  lineHeight: 1.1,
  color: theme.palette.text.primary,
}));

export const RoleText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
  fontWeight: 500,
  letterSpacing: "0.02em",
}));

export const MobilePeriod = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: alpha(theme.palette.text.secondary, 0.7),
  letterSpacing: "0.04em",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
}));

export const TagsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
}));

export const ExpTag = styled(Chip)(({ theme }) => ({
  height: 26,
  fontSize: 12,
  fontWeight: 500,
  borderRadius: 6,
  background: alpha(theme.palette.text.primary, 0.05),
  color: theme.palette.text.secondary,
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.08),
}));