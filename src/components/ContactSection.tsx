"use client";

import { motion } from "framer-motion";

/**
 * Contact section - ways to reach out.
 */

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-20 px-6 bg-stone-950 rounded-t-[2.5rem]"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            Always open to discussing new opportunities and innovative projects.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {/* Get In Touch Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-5">
              {/* Email */}
              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                  <svg
                    className="w-5 h-5 text-stone-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-500">Email</p>
                  <p className="text-stone-200 group-hover:text-white transition-colors">
                    ar2346@cornell.edu
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/akmal-rupasingha-b2704820a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                  <svg
                    className="w-5 h-5 text-stone-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-500">LinkedIn</p>
                  <p className="text-stone-200 group-hover:text-white transition-colors">
                    /in/akmalrup
                  </p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/akmalrup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                  <svg
                    className="w-5 h-5 text-stone-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-500">GitHub</p>
                  <p className="text-stone-200 group-hover:text-white transition-colors">
                    github.com/akmalrup
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Beyond Code Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Beyond Code</h3>
            <div className="space-y-5">
              <div>
                <p className="text-stone-200 font-medium">Valorant</p>
                <p className="text-stone-500 text-sm">Peaked Top 2k in North America (Immortal 3)</p>
              </div>
              <div>
                <p className="text-stone-200 font-medium">3x3 Speedcubing</p>
                <p className="text-stone-500 text-sm">Best Time: 27.33</p>
              </div>
              <div>
                <p className="text-stone-200 font-medium">Gym</p>
                <p className="text-stone-500 text-sm">215lbs to 150lbs lost</p>
              </div>
            </div>
          </motion.div>

          {/* Send a Message Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-stone-800/60 border border-stone-700/50 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-stone-800/60 border border-stone-700/50 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-stone-800/60 border border-stone-700/50 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-all resize-none"
                />
                <motion.button
                  type="submit"
                  className="absolute bottom-3 right-3 w-10 h-10 bg-stone-700 hover:bg-stone-600 rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 text-stone-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
