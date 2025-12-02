import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import Engrg3900Section from "@/components/Engrg3900Section";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

/**
 * Main portfolio page - single-page layout with all sections.
 * 
 * To add a new section:
 * 1. Create the section component in src/components/
 * 2. Add the section config to src/data/sections.ts
 * 3. Import and render the component below in the desired order
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <Engrg3900Section />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
}

