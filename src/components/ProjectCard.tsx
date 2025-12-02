"use client";

import { motion } from "framer-motion";
import { Engrg3900Project } from "@/data/engrg3900";

interface ProjectCardProps {
  project: Engrg3900Project;
}

/**
 * Reusable card component for displaying projects.
 * Used in the ENGRG 3900 section, but can be reused for other project sections.
 * 
 * Props:
 * - project: Object containing title, description, and optional technologies array
 */

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <h4 className="text-xl font-semibold text-stone-900 mb-3">{project.title}</h4>
      <p className="text-stone-600 mb-4">{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-full border border-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

