"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ENGRG 3900 section - Engineering Leadership course work.
 */

const leadershipCards = [
  {
    id: 1,
    title: "What is Engineering Leadership",
    description: "[Add your understanding of engineering leadership and what it means to you]",
    content: "[Add detailed content about your understanding of engineering leadership. What does it mean to lead in technical environments? How do engineers influence and guide teams?]",
  },
  {
    id: 2,
    title: "Self Discovery Process",
    description: "[Describe your self-discovery journey and key insights you gained]",
    content: "[Add detailed content about your self-discovery process. What exercises or reflections helped you understand yourself better? What surprised you?]",
  },
  {
    id: 3,
    title: "Clifton Strengths Assessment",
    description: "[Share your top strengths and how they influence your leadership style]",
    content: "[Add your Clifton Strengths results and analysis. What are your top 5 strengths? How do they manifest in your daily life and leadership approach?]",
  },
  {
    id: 4,
    title: "Best Self Feedback Project",
    description: "[Reflect on feedback received and how it shaped your self-awareness]",
    content: "[Add detailed content about the feedback you received from others. What themes emerged? How did this feedback align or contrast with your self-perception?]",
  },
  {
    id: 5,
    title: "Awareness as a Leader",
    description: "[Discuss your growth in self-awareness and understanding of others]",
    content: "[Add detailed content about developing awareness. How has your understanding of yourself and others evolved? What practices help you stay aware?]",
  },
  {
    id: 6,
    title: "Future Leadership Goals",
    description: "[Share your vision and goals for your leadership journey ahead]",
    content: "[Add detailed content about your leadership aspirations. Where do you see yourself? What kind of leader do you want to become?]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Engrg3900Section() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const selectedCardData = leadershipCards.find(card => card.id === selectedCard);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCard(null);
      }
    };

    if (selectedCard !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  return (
    <section
      id="engrg-3900"
      aria-label="ENGRG 3900"
      className="py-20 px-6 bg-stone-100 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-4">
            ENGRG 3900
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mb-6" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Engineering Leadership - A journey of self-discovery, personal growth, and developing 
            the skills to lead with authenticity and purpose.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {leadershipCards.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              variants={cardVariants}
              onClick={() => setSelectedCard(card.id)}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg cursor-pointer overflow-hidden transition-shadow duration-300 min-h-[180px] flex flex-col justify-center items-center text-center"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <motion.h3 
                  layoutId={`title-${card.id}`}
                  className="text-xl font-semibold text-stone-900 group-hover:text-stone-800 transition-colors tracking-tight"
                >
                  {card.title}
                </motion.h3>

                {/* Subtle description preview */}
                <p className="text-stone-500 text-sm mt-3 line-clamp-2">
                  {card.description}
                </p>

                {/* Click indicator */}
                <div className="mt-4 text-stone-400 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCard !== null && selectedCardData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setSelectedCard(null)}
            />

            {/* Expanded Card Modal */}
            <motion.div
              layoutId={`card-${selectedCard}`}
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-[2rem] z-50 overflow-hidden shadow-2xl"
            >
              <div className="h-full overflow-y-auto">
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center transition-colors z-10"
                >
                  <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Modal Content */}
                <div className="p-8 md:p-12 lg:p-16">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <motion.h3 
                      layoutId={`title-${selectedCard}`}
                      className="text-3xl md:text-4xl font-serif italic text-stone-900 mb-4"
                    >
                      {selectedCardData.title}
                    </motion.h3>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="h-0.5 bg-red-600 mx-auto"
                    />
                  </div>

                  {/* Content Area */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="max-w-3xl mx-auto"
                  >
                    <div className="prose prose-stone prose-lg max-w-none">
                      <p className="text-stone-600 leading-relaxed text-lg mb-8">
                        {selectedCardData.description}
                      </p>
                      
                      <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                        <p className="text-stone-700 leading-relaxed">
                          {selectedCardData.content}
                        </p>
                      </div>

                      {/* Placeholder for additional content */}
                      <div className="mt-8 pt-8 border-t border-stone-200">
                        <h4 className="text-xl font-semibold text-stone-900 mb-4">Key Takeaways</h4>
                        <ul className="space-y-3 text-stone-600">
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                            <span>[Add key takeaway 1]</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                            <span>[Add key takeaway 2]</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                            <span>[Add key takeaway 3]</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Navigation hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-stone-400 text-sm"
                  >
                    Press ESC or click outside to close
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
