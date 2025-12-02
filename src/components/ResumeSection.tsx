"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

/**
 * Resume section - summary of experience and resume download.
 * 
 * To customize:
 * - Update the summary text and skills list
 * - Place your resume PDF in the /public folder (e.g., /public/resume.pdf)
 * - Update the href in the download button to match your resume filename
 */

export default function ResumeSection() {
  return (
    <Section id="resume" ariaLabel="Resume" className="bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">Resume</h2>
      <div className="space-y-8">
        <div className="space-y-4 text-lg text-stone-600">
          <p>
            I bring a strong foundation in engineering principles combined with practical 
            experience in software development and project management. My academic journey 
            has been complemented by hands-on projects and collaborative work.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-stone-900 mb-4">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Problem Solving",
              "Software Development",
              "Data Analysis",
              "Project Management",
              "Technical Communication",
              "Team Collaboration",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-stone-50 px-4 py-3 rounded-lg text-center text-stone-700 border border-stone-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume PDF
          </motion.a>
          <p className="text-sm text-stone-500 mt-3">
            Note: Place your resume PDF in the /public folder and update the link above
          </p>
        </div>
      </div>
    </Section>
  );
}

