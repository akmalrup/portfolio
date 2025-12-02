"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SECTIONS } from "@/data/sections";

/**
 * Sticky navigation bar with scrollspy functionality.
 * Automatically highlights the active section as the user scrolls.
 * 
 * The active section is determined by which section is currently
 * most visible in the viewport.
 * 
 * The navbar fades in after the initial intro animation completes.
 */

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Show navbar after intro animation completes
    const navTimer = setTimeout(() => {
      setShowNav(true);
    }, 2500); // Match intro duration

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Find which section is currently in view
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(navTimer);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-end items-center gap-8">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors hover:text-stone-900 ${
                  activeSection === section.id
                    ? "text-stone-900 border-b-2 border-stone-900 pb-1"
                    : "text-stone-600"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

