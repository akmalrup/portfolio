"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  location: string;
  companyDateRange: string;
  role: string;
  roleDateRange: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Datadog",
    location: "New York, NY",
    companyDateRange: "Summer 2025",
    role: "Software Engineering Intern",
    roleDateRange: "Summer 2025",
    description: "Placeholder description - details to be added.",
    highlights: [
      "Placeholder highlight 1",
      "Placeholder highlight 2",
      "Placeholder highlight 3",
    ],
  },
  {
    company: "Cornell Nexus",
    location: "Ithaca, NY",
    companyDateRange: "2024 – Present",
    role: "Embedded Software Engineer",
    roleDateRange: "2024 – Present",
    description: "Placeholder description - details to be added.",
    highlights: [
      "Placeholder highlight 1",
      "Placeholder highlight 2",
      "Placeholder highlight 3",
    ],
  },
  {
    company: "Cornell Maker Club",
    location: "Ithaca, NY",
    companyDateRange: "2024 – Present",
    role: "Backend Software Engineer",
    roleDateRange: "2024 – Present",
    description: "Placeholder description - details to be added.",
    highlights: [
      "Placeholder highlight 1",
      "Placeholder highlight 2",
      "Placeholder highlight 3",
    ],
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-sm border border-stone-200"
    >
      {/* Header with company and date */}
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-2xl font-bold text-stone-900">{experience.company}</h3>
        <span className="text-stone-500 text-sm whitespace-nowrap ml-4">
          {experience.companyDateRange}
        </span>
      </div>
      
      {/* Location */}
      <p className="text-slate-500 mb-4">{experience.location}</p>
      
      {/* Role with date */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-stone-800">{experience.role}</h4>
        <span className="text-stone-500 text-sm whitespace-nowrap ml-4">
          {experience.roleDateRange}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-stone-600 mb-4 leading-relaxed">{experience.description}</p>
      
      {/* Highlights */}
      <ul className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start text-stone-600">
            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ResumeSection() {
  return (
    <Section id="experience" ariaLabel="Experience" className="bg-stone-100">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-stone-900 mb-4"
        >
          Experience
        </motion.h2>
        <div className="w-16 h-1 bg-stone-800 mx-auto" />
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.company} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  );
}
