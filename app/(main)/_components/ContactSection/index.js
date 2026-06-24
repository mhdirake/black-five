"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  ContactContainer,
  ContactRoot,
  ContactSubtitle,
  ContactTitle,
  EmailLink,
  FormField,
  FormMessage,
  FormRoot,
  FormTextarea,
  OrDivider,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SocialDivider,
  SocialItem,
  SocialLink,
  SocialRow,
  SubmitButton,
} from "./style";

const iconMap = { github: GitHubIcon, linkedin: LinkedInIcon };

const buildSchema = (f) =>
  yup.object({
    name: yup.string().required(f?.namePlaceholder || "Name required"),
    email: yup.string().email("Invalid email").required("Email required"),
    message: yup.string().min(10, "Min 10 chars").required("Message required"),
  });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ContactSection() {
  const { dictionary } = useLocalization();
  const contact = dictionary.contact;
  const f = contact.form;

  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(buildSchema(f)),
  });

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          <FormRoot onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormField
              {...register("name")}
              placeholder={f.namePlaceholder}
              aria-label={f.namePlaceholder}
            />
            {errors.name && (
              <Typography variant="caption" color="error" sx={{ mt: -1.5 }}>
                {errors.name.message}
              </Typography>
            )}

            <FormField
              {...register("email")}
              type="email"
              placeholder={f.emailPlaceholder}
              aria-label={f.emailPlaceholder}
            />
            {errors.email && (
              <Typography variant="caption" color="error" sx={{ mt: -1.5 }}>
                {errors.email.message}
              </Typography>
            )}

            <FormTextarea
              {...register("message")}
              placeholder={f.messagePlaceholder}
              aria-label={f.messagePlaceholder}
            />
            {errors.message && (
              <Typography variant="caption" color="error" sx={{ mt: -1.5 }}>
                {errors.message.message}
              </Typography>
            )}

            <SubmitButton type="submit" disabled={isSubmitting}>
              <SendOutlinedIcon sx={{ fontSize: 16 }} />
              {isSubmitting ? f.sending : f.submit}
            </SubmitButton>

            {status && (
              <FormMessage success={status === "success"}>
                {status === "success" ? f.success : f.error}
              </FormMessage>
            )}
          </FormRoot>
        </motion.div>

        <OrDivider>
          <Typography variant="caption" sx={{ opacity: 0.4, whiteSpace: "nowrap" }}>
            {f.orLabel}
          </Typography>
        </OrDivider>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.5, delay: 0.34 }}
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
