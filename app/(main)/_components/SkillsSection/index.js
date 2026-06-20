"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";
import TiltCard from "@/components/TiltCard";

import {
  CategoriesGrid,
  CategoryCard,
  CategoryName,
  ChipsRow,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SectionTitle,
  SkillChip,
  SkillsContainer,
  SkillsRoot,
} from "./style";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const MotionGrid = motion(CategoriesGrid);

function SkillsSection() {
  const { dictionary } = useLocalization();
  const skills = dictionary.skills;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <SkillsRoot component="section" id="skills" ref={ref}>
      <SkillsContainer maxWidth="lg">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>
            <SectionNumber>04</SectionNumber>
            <SectionLabelLine />
          </SectionLabel>
          <SectionTitle>{skills.title}</SectionTitle>
        </motion.div>

        <MotionGrid
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.categories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 25 } }}
            >
              <TiltCard maxTilt={7} scale={1.0}>
              <CategoryCard>
                <CategoryName>{category.name}</CategoryName>
                <ChipsRow>
                  {category.items.map((skill) => (
                    <SkillChip key={skill} label={skill} size="small" />
                  ))}
                </ChipsRow>
              </CategoryCard>
              </TiltCard>
            </motion.div>
          ))}
        </MotionGrid>

      </SkillsContainer>
    </SkillsRoot>
  );
}

export default SkillsSection;
