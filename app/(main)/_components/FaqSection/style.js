"use client";

import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid2, Stack, Typography, styled } from "@mui/material";

import { sectionAnimatedBackground } from "../../style";

export const SectionRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: "relative",
  ...sectionAnimatedBackground(theme, { opacity: 0.4, duration: "17s" }),

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

export const FaqContainer = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
  overflow: "hidden",
}));

export const FaqIntro = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  maxWidth: 480,
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

export const FaqAction = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const FaqList = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.5),
}));

export const FaqAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: "8px !important",
  border: "1px solid",
  borderColor: theme.palette.divider,
  background: "transparent",
  color: theme.palette.text.primary,
  boxShadow: "none",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",

  "&::before": {
    display: "none",
  },

  "&.Mui-expanded": {
    margin: 0,
  },
}));

export const FaqSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: 54,
  padding: theme.spacing(0, 2),

  ".MuiAccordionSummary-content": {
    margin: theme.spacing(1.5, 0),
  },

  ".MuiAccordionSummary-content.Mui-expanded": {
    margin: theme.spacing(1.5, 0),
  },
}));

export const FaqQuestion = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.subtitle1,
}));

export const FaqDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 2, 2),
  color: theme.palette.text.text,
  ...theme.typography.subtitle1,
  lineHeight: 1.9,
}));

export const FaqGrid = styled(Grid2)(({ theme }) => ({
  alignItems: "flex-start",

  [theme.breakpoints.down("md")]: {
    rowGap: theme.spacing(4),
  },
}));
