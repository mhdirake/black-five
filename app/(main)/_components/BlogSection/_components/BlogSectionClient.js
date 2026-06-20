"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { useLocalization } from "@/context/LocalizationProvider";
import TiltCard from "@/components/TiltCard";

import {
  BlogCard,
  BlogCardContent,
  BlogCover,
  BlogCoverFallback,
  BlogDate,
  BlogEmptyState,
  BlogGrid,
  BlogMeta,
  BlogRoot,
  BlogSummary,
  BlogTag,
  BlogTags,
  BlogTitle,
  BlogsContainer,
  ReadTime,
  SectionHeader,
  SectionLabel,
  SectionLabelLine,
  SectionNumber,
  SectionSubtitle,
  SectionTitle,
} from "../style";

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

const MotionGrid = motion(BlogGrid);

function formatDate(dateStr, locale) {
  if (!dateStr) return "";
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateStr));
}

export default function BlogSectionClient({ posts }) {
  const { dictionary, locale } = useLocalization();
  const blog = dictionary.blog;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <BlogRoot component="section" id="blog" ref={ref}>
      <BlogsContainer maxWidth="lg">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader>
            <SectionLabel>
              <SectionNumber>06</SectionNumber>
              <SectionLabelLine />
            </SectionLabel>
            <SectionTitle>{blog.title}</SectionTitle>
            <SectionSubtitle>{blog.subtitle}</SectionSubtitle>
          </SectionHeader>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <BlogEmptyState>{blog.empty}</BlogEmptyState>
          </motion.div>
        ) : (
          <MotionGrid
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {posts.map((post) => (
              <motion.div
                key={post.uuid}
                variants={item}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              >
                <TiltCard maxTilt={8} scale={1.0}>
                <BlogCard>
                  {post.coverImage ? (
                    <BlogCover src={post.coverImage} alt={post.title} />
                  ) : (
                    <BlogCoverFallback>{post.title}</BlogCoverFallback>
                  )}

                  <BlogCardContent>
                    {post.tags?.length > 0 && (
                      <BlogTags>
                        {post.tags.slice(0, 3).map((tag) => (
                          <BlogTag key={tag} label={tag} size="small" />
                        ))}
                      </BlogTags>
                    )}

                    <BlogTitle>{post.title}</BlogTitle>

                    {post.summary && (
                      <BlogSummary>{post.summary}</BlogSummary>
                    )}

                    <BlogMeta>
                      {post.publishedAt && (
                        <BlogDate>
                          <CalendarTodayIcon sx={{ fontSize: 13 }} />
                          {formatDate(post.publishedAt, locale)}
                        </BlogDate>
                      )}
                      {post.readTime && (
                        <ReadTime>
                          <AccessTimeIcon sx={{ fontSize: 13 }} />
                          {post.readTime} {blog.minRead}
                        </ReadTime>
                      )}
                    </BlogMeta>
                  </BlogCardContent>
                </BlogCard>
                </TiltCard>
              </motion.div>
            ))}
          </MotionGrid>
        )}
      </BlogsContainer>
    </BlogRoot>
  );
}
