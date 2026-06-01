"use client";

import { useEffect, useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  BadgeDot,
  BlobLeft,
  BlobRight,
  DotGrid,
  HeroActions,
  HeroBadge,
  HeroContainer,
  HeroContent,
  HeroCvButton,
  HeroEmail,
  HeroFooter,
  HeroNameOutlined,
  HeroNameSolid,
  HeroRole,
  HeroRoleWrapper,
  HeroRoot,
  HeroSocialDivider,
  HeroSocialLink,
  HeroTagline,
  ScrollDot,
  ScrollIndicator,
  ScrollLine,
} from "./style";

function HeroSection() {
  const { dictionary } = useLocalization();
  const hero = dictionary.hero;
  const socials = dictionary.contact.social;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, [hero.roles.length]);

  const socialIcons = { github: GitHubIcon, linkedin: LinkedInIcon };

  return (
    <HeroRoot component="section" id="hero">
      <DotGrid />
      <BlobLeft />
      <BlobRight />

      <HeroContainer maxWidth="lg">
        <HeroContent>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroBadge>
              <BadgeDot />
              {hero.badge}
            </HeroBadge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.015,
              filter: "drop-shadow(0 0 48px rgba(227, 28, 37, 0.35))",
            }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ cursor: "default" }}
          >
            <HeroNameOutlined aria-hidden="true">{hero.nameFirst}</HeroNameOutlined>
            <HeroNameSolid>{hero.nameLast}</HeroNameSolid>
          </motion.div>

          <HeroRoleWrapper>
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <HeroRole>{hero.roles[roleIndex]}</HeroRole>
              </motion.div>
            </AnimatePresence>
          </HeroRoleWrapper>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroTagline>{hero.tagline}</HeroTagline>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroActions>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
              >
                {hero.cta.primary}
              </Button>
              <HeroCvButton
                variant="outlined"
                size="large"
                href="/cv.pdf"
                target="_blank"
              >
                {hero.cta.secondary}
              </HeroCvButton>
            </HeroActions>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HeroFooter>
              <HeroEmail href={`mailto:${hero.email}`}>
                <EmailOutlinedIcon sx={{ fontSize: 15 }} />
                {hero.email}
              </HeroEmail>
              <HeroSocialDivider />
              {socials.map(({ label, url, icon }) => {
                const Icon = socialIcons[icon];
                return Icon ? (
                  <HeroSocialLink
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </HeroSocialLink>
                ) : null;
              })}
            </HeroFooter>
          </motion.div>

        </HeroContent>
      </HeroContainer>

      <ScrollIndicator>
        <ScrollDot />
        <ScrollLine />
      </ScrollIndicator>
    </HeroRoot>
  );
}

export default HeroSection;