import { useLocation } from "react-router-dom";
import { AboutMeSection } from "./AboutMeSection";
import { AppBar } from "./AppBar";
import { HeroSection } from "./HeroSection";
import { useEffect, useState } from "react";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { SkillsSection } from "./SkillsSection";
import { Box, Container } from "@mui/material";
import { ProjectsSection } from "./ProjectsSection";
import { Loader } from "./Loader";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { CertificateSection } from "./CertificateSection";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  const { hash } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <HeroSection />
          <Container>
            <AboutMeSection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificateSection />
            <ContactSection />
          </Container>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </Box>
  );
};
