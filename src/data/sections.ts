/**
 * Central configuration for all portfolio sections.
 * 
 * To add a new section:
 * 1. Add a new entry to this array with a unique id and label
 * 2. Create a corresponding section component (e.g., src/components/NewSection.tsx)
 * 3. Import and render that component in src/app/page.tsx
 * 4. Ensure the component uses the same id value in its <section id="..."> tag
 */

export interface SectionConfig {
  id: string;
  label: string;
}

export const SECTIONS: SectionConfig[] = [
  { id: "home", label: "Home" },
  { id: "about-me", label: "About Me" },
  { id: "engrg-3900", label: "ENGRG 3900" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

