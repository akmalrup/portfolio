"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplineScene from "@/components/SplineScene";

/**
 * Hero/Home section - the landing area at the top of the portfolio.
 * Features a cinematic intro with full-screen 3D model zoom, then reveals two-column layout.
 * 
 * Animation sequence:
 * 1. Full-screen zoomed-in 3D model (only thing visible)
 * 2. Model zooms out over 2 seconds
 * 3. Model transitions to right column position
 * 4. Text content fades in on the left
 * 5. Normal homepage layout revealed
 * 
 * To customize:
 * - Update the name, tagline, and description text below
 * - Replace the SPLINE_SCENE_URL with your actual Spline scene URL
 * - Modify or add call-to-action buttons as needed
 */

// Replace this with your actual Spline scene URL
// Example: https://prod.spline.design/v6MyoNPhcVqE1jb3/scene.splinecode
const SPLINE_SCENE_URL = "https://prod.spline.design/v6MyoNPhcVqE1jb3/scene.splinecode";

export default function HomeSection() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Mark intro as complete after zoom animation finishes
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 2500); // 0.5s delay + 2s animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      aria-label="Home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <div className="w-full h-full">
              <SplineScene sceneUrl={SPLINE_SCENE_URL} enableZoomAnimation={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: introComplete ? 1 : 0, x: introComplete ? 0 : -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6">
              Akmal Rupasingha
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-6">
              Engineering Student & Problem Solver
            </p>
            <p className="text-lg text-stone-500 mb-10 max-w-xl">
              Welcome to my portfolio. I&apos;m passionate about engineering, technology, and creating 
              innovative solutions to complex challenges.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#resume"
                className="px-8 py-3 border-2 border-stone-900 text-stone-900 rounded-lg font-medium hover:bg-stone-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right: 3D Spline model */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden"
          >
            {introComplete && <SplineScene sceneUrl={SPLINE_SCENE_URL} enableZoomAnimation={false} />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

