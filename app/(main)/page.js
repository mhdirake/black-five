import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ProjectsSection from "./_components/ProjectsSection";
import ExperienceSection from "./_components/ExperienceSection";
import SkillsSection from "./_components/SkillsSection";
import BlogSection from "./_components/BlogSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}