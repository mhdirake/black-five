"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  CompanyName,
  CurrentBadge,
  CurrentDot,
  Description,
  ExperienceContainer,
  ExperienceRoot,
  ExpTag,
  MobilePeriod,
  PeriodText,
  RoleText,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SectionTitle,
  TagsRow,
  Timeline,
  TimelineCard,
  TimelineDot,
  TimelineItem,
  TimelinePeriod,
} from "./style";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ExperienceSection() {
  const { dictionary } = useLocalization();
  const experience = dictionary.experience;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <ExperienceRoot component="section" id="experience" ref={ref}>
      <ExperienceContainer maxWidth="lg">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>
            <SectionNumber>03</SectionNumber>
            <SectionLabelLine />
          </SectionLabel>
          <SectionTitle>{experience.title}</SectionTitle>
        </motion.div>

        <Timeline>
          {experience.items.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.div
                key={item.company}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <TimelineItem reverse={reverse ? 1 : 0}>
                  <TimelineDot current={item.current ? 1 : 0} />

                  <TimelinePeriod reverse={reverse ? 1 : 0}>
                    <PeriodText>{item.period}</PeriodText>
                  </TimelinePeriod>

                  <TimelineCard reverse={reverse ? 1 : 0}>
                    {item.current && (
                      <CurrentBadge>
                        <CurrentDot />
                        {dictionary.common.present}
                      </CurrentBadge>
                    )}

                    <CompanyName>{item.company}</CompanyName>
                    <RoleText>{item.role}</RoleText>
                    <MobilePeriod>{item.period}</MobilePeriod>
                    <Description>{item.description}</Description>

                    {item.tags?.length > 0 && (
                      <TagsRow>
                        {item.tags.map((tag) => (
                          <ExpTag key={tag} label={tag} size="small" />
                        ))}
                      </TagsRow>
                    )}
                  </TimelineCard>
                </TimelineItem>
              </motion.div>
            );
          })}
        </Timeline>

      </ExperienceContainer>
    </ExperienceRoot>
  );
}

export default ExperienceSection;