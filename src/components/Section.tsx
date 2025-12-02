"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
}

/**
 * Generic section wrapper component.
 * Provides consistent spacing, max width, and fade-in animations.
 * 
 * Props:
 * - id: Matches the section config id for navigation
 * - ariaLabel: Accessible label for the section
 * - className: Optional additional classes
 * - children: Section content
 */

export default function Section({ id, ariaLabel, className = "", children }: SectionProps) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={`py-20 px-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

