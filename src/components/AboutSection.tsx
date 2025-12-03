"use client";

import { motion } from "framer-motion";

/**
 * About Me section - personal bio, skills, and background.
 */

export default function AboutSection() {
  return (
    <section
      id="about-me"
      aria-label="About Me"
      className="py-20 px-6 bg-stone-100"
    >
      <motion.div
        className="max-w-7xl mx-auto bg-stone-950 rounded-[2.5rem] px-8 md:px-16 py-16 shadow-2xl"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif italic text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-12 h-0.5 bg-red-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <motion.div 
            className="space-y-6 text-stone-300 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>
              I&apos;m <span className="text-white font-semibold">[Your Name]</span>, a student at [Your University] pursuing [Your Major].
            </p>
            <p>
              [Add your story here - what projects have you worked on? What drives you?]
            </p>
            <p>
              [Share your experiences - internships, research, or notable achievements]
            </p>
            <p>
              [What are you passionate about outside of your main field?]
            </p>
            <p>
              [Any leadership roles or extracurricular involvement?]
            </p>
            <div className="border-t border-stone-800 pt-6 mt-8">
              <p className="text-stone-500 italic text-sm">
                [Add a current status or what you&apos;re working on now]
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Info */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Languages */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">Languages</h4>
                  <p className="text-stone-500 text-sm">
                    [Programming languages]
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">Technologies</h4>
                  <p className="text-stone-500 text-sm">
                    [Frameworks, tools, etc.]
                  </p>
                </div>

                {/* Domain Skills */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">Domain Skills</h4>
                  <p className="text-stone-500 text-sm">
                    [Specialized skills]
                  </p>
                </div>

                {/* Backend & Databases */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">Backend & Databases</h4>
                  <p className="text-stone-500 text-sm">
                    [Backend technologies]
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Foundation */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Academic Foundation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-stone-400 font-medium mb-1">[Primary Field]</h4>
                  <p className="text-stone-500 text-sm">
                    [Relevant coursework]
                  </p>
                </div>
                <div>
                  <h4 className="text-stone-400 font-medium mb-1">[Secondary Field]</h4>
                  <p className="text-stone-500 text-sm">
                    [Relevant coursework]
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Involvement */}
            <div className="border-t border-stone-800 pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">Campus Involvement</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-medium">[Role]</span>
                  <span className="text-stone-500 text-sm">[Organization]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-medium">[Role]</span>
                  <span className="text-stone-500 text-sm">[Organization]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
