"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import Image from "next/image";

interface Experience {
  company: string;
  location: string;
  companyDateRange: string;
  role: string;
  roleDateRange: string;
  description: string;
  highlights: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    company: "Datadog",
    location: "New York, NY",
    companyDateRange: "June 2026",
    role: "Software Engineering Intern",
    roleDateRange: "",
    description: "Incoming Summer 2026*",
    highlights: [
    ],
    logo: "/logos/ddlogo.png",
  },
  {
    company: "Cornell Nexus",
    location: "Ithaca, NY",
    companyDateRange: "2024 – Present",
    role: "Embedded Software Engineer",
    roleDateRange: "2024 – Present",
    description: "Developed motor-control software translating PWM duty cycles to precise turning behavior, enabling reliable robotic navigation. Supported PCB validation, communcation protocol debugging, and electrical–mechanical integration across the full embedded stack.",
    highlights: [
      "Python, Raspberry Pi",
      "Altium Designer, KiCad, Soldering, Multimeter, Oscilloscope",
      "I2C, SPI",
    
    ],
    logo: "/logos/nexuslogo.png",
  },
  {
    company: "Cornell Maker Club",
    location: "Ithaca, NY",
    companyDateRange: "2024 – Present",
    role: "Backend Software Engineer",
    roleDateRange: "2024 – Present",
    description: "Built an end-to-end Arabic speech-verification system combining similarity scoring, and real-time user session management. Designed and deployed a FastAPI + PostgreSQL backend, integrated Whisper for large-scale verse processing, and engineered a pronunciation-verification pipeline using cosine-similarity thresholds.",
    highlights: [
      "React, FastAPI, PostgreSQL, Open AI API",
      "Docker, AWS EC2, Hugging Face",
      "6,000+ Qur’anic verses processed, 61% Similarity Threshold",
    ],
    logo: "/logos/cmclogo.png",
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
      {/* Header with logo, company and date */}
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Company info */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-stone-900">{experience.company}</h3>
            <span className="text-stone-500 text-sm whitespace-nowrap ml-4">
              {experience.companyDateRange}
            </span>
          </div>
          <p className="text-slate-500">{experience.location}</p>
        </div>
      </div>
      
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
          className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-4"
        >
          Experience
        </motion.h2>
        <motion.div 
          className="w-12 h-0.5 bg-red-600 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.company} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  );
}
