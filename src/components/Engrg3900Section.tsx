import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { ENGRG_3900_PROJECTS } from "@/data/engrg3900";

/**
 * ENGRG 3900 section - showcases course work and projects.
 * 
 * To customize:
 * - Update the course description text
 * - Modify project data in src/data/engrg3900.ts
 */

export default function Engrg3900Section() {
  return (
    <Section id="engrg-3900" ariaLabel="ENGRG 3900" className="bg-stone-50">
      <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">ENGRG 3900</h2>
      <div className="space-y-8">
        <div className="space-y-4 text-lg text-stone-600">
          <p>
            ENGRG 3900 is a comprehensive engineering course focused on practical problem-solving, 
            design thinking, and collaborative project work. The course emphasizes hands-on 
            experience with real-world engineering challenges.
          </p>
          <p>
            Throughout this course, I developed critical skills in project management, technical 
            communication, and interdisciplinary collaboration. The projects below represent key 
            achievements and learning experiences from the course.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-stone-900 mb-6">Key Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGRG_3900_PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

