"use client";

import { useEffect, useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  HeroActions,
  HeroContainer,
  HeroContent,
  HeroCvButton,
  HeroEmail,
  HeroNameOutlined,
  HeroNameSolid,
  HeroRole,
  HeroRoleWrapper,
  HeroRoot,
  ScrollIndicator,
  ScrollLine,
} from "./style";

function HeroSection() {
  const { dictionary } = useLocalization();
  const hero = dictionary.hero;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, [hero.roles.length]);

  return (
    <HeroRoot component="section" id="hero">
      <HeroContainer maxWidth="lg">
        <HeroContent>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.015,
              filter: "drop-shadow(0 0 48px rgba(227, 28, 37, 0.35))",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <HeroEmail href={`mailto:${hero.email}`}>
              <EmailOutlinedIcon sx={{ fontSize: 15 }} />
              {hero.email}
            </HeroEmail>
          </motion.div>

        </HeroContent>
      </HeroContainer>

      <ScrollIndicator>
        <ScrollLine />
        <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
      </ScrollIndicator>
    </HeroRoot>
  );
}

export default HeroSection;