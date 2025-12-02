/**
 * Data for ENGRG 3900 projects and experiences.
 * 
 * To add a new project:
 * - Add a new object to the array below with title, description, and optional technologies
 * - The ProjectCard component will automatically render it
 * 
 * To modify existing projects:
 * - Update the corresponding object properties
 */

export interface Engrg3900Project {
  title: string;
  description: string;
  technologies?: string[];
}

export const ENGRG_3900_PROJECTS: Engrg3900Project[] = [
  {
    title: "Project Name 1",
    description: "Brief description of the first project or major assignment from ENGRG 3900. Replace this with your actual project details.",
    technologies: ["Python", "Data Analysis", "Jupyter"],
  },
  {
    title: "Project Name 2",
    description: "Brief description of the second project. Add details about what you built, learned, or accomplished.",
    technologies: ["MATLAB", "Simulation", "Engineering Design"],
  },
  // Add more projects as needed
];

