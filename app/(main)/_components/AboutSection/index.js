"use client";

import { useRef } from "react";
import { Grid2 } from "@mui/material";
import { motion, useInView } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  AboutContainer,
  AboutRoot,
  BioText,
  ChipsRow,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SectionTitle,
  SkillChip,
  SkillGroup,
  SkillsGroupTitle,
  SkillsPanel,
  StatItem,
  StatLabel,
  StatNumber,
  StatRow,
} from "./style";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AboutSection() {
  const { dictionary } = useLocalization();
  const about = dictionary.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <AboutRoot component="section" id="about" ref={ref}>
      <AboutContainer maxWidth="lg">
        <Grid2 container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">

          <Grid2 size={{ xs: 12, md: 7 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel>
                <SectionNumber>01</SectionNumber>
                <SectionLabelLine />
              </SectionLabel>

              <SectionTitle>{about.title}</SectionTitle>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <BioText>{about.bio}</BioText>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <StatRow>
                <StatItem>
                  <StatNumber>5+</StatNumber>
                  <StatLabel>{dictionary.about.stats?.experience ?? "Years Exp."}</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>20+</StatNumber>
                  <StatLabel>{dictionary.about.stats?.projects ?? "Projects"}</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>∞</StatNumber>
                  <StatLabel>{dictionary.about.stats?.coffee ?? "Cups of Tea"}</StatLabel>
                </StatItem>
              </StatRow>
            </motion.div>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 5 }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <SkillsPanel>
                <SkillGroup>
                  <div>
                    <SkillsGroupTitle>{dictionary.about.skills?.frontendLabel ?? "Frontend"}</SkillsGroupTitle>
                    <ChipsRow>
                      {about.skills.frontend.map((skill) => (
                        <SkillChip key={skill} label={skill} size="small" />
                      ))}
                    </ChipsRow>
                  </div>
                  <div>
                    <SkillsGroupTitle>{dictionary.about.skills?.toolsLabel ?? "Tools & Design"}</SkillsGroupTitle>
                    <ChipsRow>
                      {about.skills.tools.map((skill) => (
                        <SkillChip key={skill} label={skill} size="small" />
                      ))}
                    </ChipsRow>
                  </div>
                </SkillGroup>
              </SkillsPanel>
            </motion.div>
          </Grid2>

        </Grid2>
      </AboutContainer>
    </AboutRoot>
  );
}

export default AboutSection;