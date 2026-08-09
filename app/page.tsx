"use client";

import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransitionSection from "@/components/TransitionSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-background transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TransitionSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
