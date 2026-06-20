"use client";

import { useEffect, useRef, useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

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

const MotionBlobLeft = motion(BlobLeft);
const MotionBlobRight = motion(BlobRight);

function MagneticButton({ children }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 280, damping: 22 });
  const y = useSpring(rawY, { stiffness: 280, damping: 22 });

  const handleMouseMove = (e) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.4);
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  };

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
    >
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const { dictionary } = useLocalization();
  const hero = dictionary.hero;
  const socials = dictionary.contact.social;
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, [hero.roles.length]);

  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blobLeftY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 60]);
  const blobRightY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -50]);

  const socialIcons = { github: GitHubIcon, linkedin: LinkedInIcon };

  return (
    <HeroRoot component="section" id="hero" ref={heroRef}>
      <DotGrid />
      <MotionBlobLeft style={{ y: blobLeftY }} />
      <MotionBlobRight style={{ y: blobRightY }} />

      <HeroContainer maxWidth="lg">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
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
              <MagneticButton>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
              >
                {hero.cta.primary}
              </Button>
              </MagneticButton>
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
        </motion.div>
      </HeroContainer>

      <ScrollIndicator>
        <ScrollDot />
        <ScrollLine />
      </ScrollIndicator>
    </HeroRoot>
  );
}

export default HeroSection;