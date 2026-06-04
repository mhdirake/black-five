"use client";

import { useRef } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, useInView } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  ContactContainer,
  ContactRoot,
  ContactSubtitle,
  ContactTitle,
  EmailLink,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SocialDivider,
  SocialItem,
  SocialLink,
  SocialRow,
} from "./style";

const iconMap = { github: GitHubIcon, linkedin: LinkedInIcon };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ContactSection() {
  const { dictionary } = useLocalization();
  const contact = dictionary.contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <ContactRoot component="section" id="contact" ref={ref}>
      <ContactContainer maxWidth="md">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>
            <SectionLabelLine />
            <SectionNumber>05</SectionNumber>
            <SectionLabelLine />
          </SectionLabel>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactTitle>{contact.title}</ContactTitle>
          <ContactSubtitle>{contact.subtitle}</ContactSubtitle>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <EmailLink href={`mailto:${contact.email}`}>
            <EmailOutlinedIcon sx={{ fontSize: "0.7em" }} />
            {contact.email}
          </EmailLink>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <SocialRow>
            {contact.social.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <SocialItem key={item.label}>
                  {index > 0 && <SocialDivider />}
                  <SocialLink href={item.url} target="_blank" rel="noopener noreferrer">
                    {Icon && <Icon sx={{ fontSize: 16 }} />}
                    {item.label}
                  </SocialLink>
                </SocialItem>
              );
            })}
          </SocialRow>
        </motion.div>

      </ContactContainer>
    </ContactRoot>
  );
}

export default ContactSection;
