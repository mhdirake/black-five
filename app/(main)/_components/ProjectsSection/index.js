"use client";

import { useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion, useInView } from "framer-motion";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  EmptyState,
  FeaturedBadge,
  FeaturedDot,
  ProjectCard,
  ProjectCardContent,
  ProjectDescription,
  ProjectImageBg,
  ProjectImageLabel,
  ProjectImageWrapper,
  ProjectLink,
  ProjectLinks,
  ProjectTag,
  ProjectTags,
  ProjectTitle,
  ProjectTopRow,
  ProjectsContainer,
  ProjectsGrid,
  ProjectsRoot,
  SectionHeader,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SectionSubtitle,
  SectionTitle,
} from "./style";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ProjectsSection() {
  const { dictionary } = useLocalization();
  const projects = dictionary.projects;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <ProjectsRoot component="section" id="projects" ref={ref}>
      <ProjectsContainer maxWidth="lg">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader>
            <SectionLabel>
              <SectionNumber>02</SectionNumber>
              <SectionLabelLine />
            </SectionLabel>
            <SectionTitle>{projects.title}</SectionTitle>
            <SectionSubtitle>{projects.subtitle}</SectionSubtitle>
          </SectionHeader>
        </motion.div>

        {projects.items.length === 0 ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <EmptyState>{projects.empty}</EmptyState>
          </motion.div>
        ) : (
          <ProjectsGrid>
            {projects.items.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard featured={project.featured ? 1 : 0}>
                  <ProjectImageWrapper>
                    {project.image && (
                      <ProjectImageBg src={project.image} alt={project.title} />
                    )}
                    <ProjectImageLabel>{project.title}</ProjectImageLabel>
                  </ProjectImageWrapper>

                  <ProjectCardContent>
                    {project.featured && (
                      <FeaturedBadge>
                        <FeaturedDot />
                        Featured
                      </FeaturedBadge>
                    )}

                    <ProjectTopRow>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectLinks>
                        {project.githubUrl && (
                          <ProjectLink href={project.githubUrl} target="_blank" aria-label="GitHub">
                            <GitHubIcon sx={{ fontSize: 16 }} />
                          </ProjectLink>
                        )}
                        {project.liveUrl && (
                          <ProjectLink href={project.liveUrl} target="_blank" aria-label="Live">
                            <OpenInNewIcon sx={{ fontSize: 16 }} />
                          </ProjectLink>
                        )}
                      </ProjectLinks>
                    </ProjectTopRow>

                    <ProjectDescription>{project.description}</ProjectDescription>

                    {project.tags?.length > 0 && (
                      <ProjectTags>
                        {project.tags.map((tag) => (
                          <ProjectTag key={tag} label={tag} size="small" />
                        ))}
                      </ProjectTags>
                    )}
                  </ProjectCardContent>
                </ProjectCard>
              </motion.div>
            ))}
          </ProjectsGrid>
        )}

      </ProjectsContainer>
    </ProjectsRoot>
  );
}

export default ProjectsSection;