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
              I&apos;m <span className="text-white font-semibold">Akmal Rupasingha</span>, a student at Cornell University pursuing Electrical and Computer Engineering.
            </p>
            <p>
              I started at Cornell in Arts and Sciences studying CS. I later switched to ECE because I wanted a deeper understanding of the whole computer stack. Now that I know how the layers work together, I am driven to build software that actually helps people.
            </p>
            <p>
            Last summer I was a research intern in the EmPRISE Lab, which focuses on caregiving robots. My project was developing a nipple sensor that detects disease early in baby cows. I handled the sensor’s PCB design. At the same time, I kept working on my Arabic verse detection software as a passion project.
            </p>
            <p>
            Outside of CS and ECE, I love video games and working out. During senior summer of high school, I spent most of my time playing Valorant and peaked around top 2K players in North America which is well under 0.1 percent of the player base.
            </p>
            <p>
            On Campus, you can find me helping the campus MSA, designg canva posters, running the instagram, and organizing/helping out with events :)
            </p>
            <div className="border-t border-stone-800 pt-6 mt-8">
              <p className="text-stone-500 italic text-sm">
                This summer I will be a SWE intern in NYC! 
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
                    Python, C++, Java, JavaScript, TypeScript, 
                    HTML, CSS, Assembly, Verilog
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">Technologies</h4>
                  <p className="text-stone-500 text-sm">
                    React, Next.js, Node.js, Git, AWS, Linux, 
                    Microsoft Office Suite, Canva 
                  </p>
                </div>

                {/* Domain Skills */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">ECE Fundamentals</h4>
                  <p className="text-stone-500 text-sm">
                    Altium Designer, KiCad, Bash Scripting,
                    Soldering, Multimeter, Oscilloscope 
                  </p>
                </div>

                {/* Backend & Databases */}
                <div>
                  <h4 className="text-stone-400 font-medium mb-2">Backend & Databases</h4>
                  <p className="text-stone-500 text-sm">
                  MySQL, FastAPI,
                  Firebase, PostgreSQL 
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Foundation */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Academic Foundation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-stone-400 font-medium mb-1">Electrical & Computer Engineering</h4>
                  <p className="text-stone-500 text-sm">
                    Digital Logic, Computer Architecture, Circuit Analysis, Physics E&M
                  </p>
                </div>
                <div>
                  <h4 className="text-stone-400 font-medium mb-1">Computer Science</h4>
                  <p className="text-stone-500 text-sm">
                  Data Structures & Algorithms, Object-Oriented Programming, Discrete Structures, Linear
                  Algebra, Backend Development
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Involvement */}
            <div className="border-t border-stone-800 pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">Campus Involvement</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-medium">Co-President</span>
                  <span className="text-stone-500 text-sm">Muslim Educational and Cultural Assocation</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-medium">Cohort Member</span>
                  <span className="text-stone-500 text-sm">Engineering Leadering Certification Program</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
