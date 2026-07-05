"use client";

import { useEffect, useRef, useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { alpha, useTheme } from "@mui/material/styles";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  BadgeDot,
  BlobLeft,
  BlobRight,
  CursorGlow,
  DotGrid,
  GrainOverlay,
  HeroActions,
  HeroBadge,
  HeroContainer,
  HeroContent,
  HeroCvButton,
  HeroEmail,
  HeroFooter,
  HeroGreeting,
  HeroGreetingLine,
  HeroImageWrapper,
  HeroNameFlourish,
  HeroNameGroup,
  HeroNameOutlined,
  HeroNameSolid,
  HeroPrimaryButton,
  HeroRole,
  HeroRoleWrapper,
  HeroRoot,
  HeroSocialDivider,
  HeroSocialLink,
  HeroTagline,
  Monogram,
  ScrollIndicator,
  ScrollLabel,
  ScrollTrack,
  SketchArt,
} from "./style";
import { MehdiSketch } from "@/assets/icons";

const MotionBlobLeft = motion(BlobLeft);
const MotionBlobRight = motion(BlobRight);
const MotionCursorGlow = motion(CursorGlow);
const MotionImageWrapper = motion(HeroImageWrapper);

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
  const theme = useTheme();
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
  const sketchParallaxY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 110]);

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(30);
  const glowBackground = useMotionTemplate`radial-gradient(560px circle at ${glowX}% ${glowY}%, ${alpha(theme.palette.primary.main, 0.16)} 0%, transparent 70%)`;

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const socialIcons = { github: GitHubIcon, linkedin: LinkedInIcon };

  return (
    <HeroRoot component="section" id="hero" ref={heroRef} onMouseMove={handlePointerMove}>
      <DotGrid />
      {/* <Monogram aria-hidden="true">MR</Monogram> */}
      <MotionCursorGlow style={{ background: glowBackground }} />
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroGreeting>
              <HeroGreetingLine />
              {hero.greeting}
            </HeroGreeting>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.015,
              filter: `drop-shadow(0 0 48px ${alpha(theme.palette.primary.main, 0.35)})`,
            }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            style={{ cursor: "default" }}
          >
            <HeroNameGroup>
              <HeroNameOutlined>{hero.nameFirst}</HeroNameOutlined>
              <HeroNameSolid>{hero.nameLast}</HeroNameSolid>
              <HeroNameFlourish viewBox="0 0 160 16" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="heroFlourishGradient" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor={theme.palette.primary.light} />
                    <stop offset="1" stopColor={theme.palette.primary.dark} />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M2 10C24 2 40 14 62 8C84 2 100 13 122 7C136 3 148 9 158 6"
                  stroke="url(#heroFlourishGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </HeroNameFlourish>
            </HeroNameGroup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroTagline>{hero.tagline}</HeroTagline>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroActions>
              <MagneticButton>
              <HeroPrimaryButton
                variant="contained"
                color="primary"
                size="large"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
              >
                {hero.cta.primary}
              </HeroPrimaryButton>
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
            transition={{ duration: 0.8, delay: 0.55 }}
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

      <MotionImageWrapper aria-hidden="true" style={{ y: sketchParallaxY }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <SketchArt>
            <MehdiSketch />
          </SketchArt>
        </motion.div>
      </MotionImageWrapper>

      <ScrollIndicator>
        <ScrollLabel>{hero.scroll}</ScrollLabel>
        <ScrollTrack />
      </ScrollIndicator>

      <GrainOverlay />
    </HeroRoot>
  );
}

export default HeroSection;
