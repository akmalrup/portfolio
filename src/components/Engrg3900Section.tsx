"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * ENGRG 3900 section - Engineering Leadership course work.
 */

interface LeadershipCard {
  id: number;
  title: string;
  description: string;
  content: string;
  subSections?: {
    title: string;
    content: string;
  }[];
  images?: string[];
}

const leadershipCards: LeadershipCard[] = [
  {
    id: 1,
    title: "What is ENGRG 3900",
    description: "The first class in the Engineering Leadership Certificate Program",
    content: "This is the introductory course in the Engineering Leadership Certificate Program. Through hands-on activities, group collaboration, personal reflection, and coaching, students build the self-awareness and self-management skills that form the foundation of effective, courageous leadership.",
    images: ["/logos/engrglogo.png"],
  },
  {
    id: 2,
    title: "Self Discovery Process",
    description: "A journey of defining my purpose and living by my values",
    content: "",
    subSections: [
      {
        title: "Discovering My Purpose",
        content: "During ENGRG 3900, we were asked to define our purpose. I had never actually put mine into words before. When I sat with it, I realized my core values are Islam, family, responsibility, authenticity, helping others, and striving for good character. These values shape how I want to live, even though some naturally take the lead depending on what I'm going through.\n\nTogether, they feed into my purpose: to have a presence that makes others feel safe, to uplift the people around me, and to lead with authenticity, empathy, and character.",
      },
      {
        title: "Living After Defining My Values",
        content: "The most valuable thing I learned in this class is how to ground myself and my interactions in my values and purpose. Once I named them, I started asking whether I was actually representing them in what I do and how I show up. I've noticed moments where a value slips or gets overshadowed, but having a clear definition gives me a framework to recognize when something is being over- or under-represented. That awareness alone has been huge.\n\nGoing forward, I want to live my values in balance rather than pouring everything into just one. I tend to fixate on responsibility or achievement and let others, like character or authenticity, fade into the background. To change that, I want to check in with myself regularly and reflect on how I've been living each value. Catching misalignment early will help me stay grounded before things drift too far.\n\nMost importantly, I want to remind myself that I am not defined by a single value. Staying balanced and whole matters more than being perfect in one area. If I can keep that perspective, I'll not only live more in alignment with who I am, but also find more peace and happiness in how I move through life.",
      },
    ],
  },
  {
    id: 3,
    title: "Clifton Strengths Assessment",
    description: "Discovering my top strengths: Consistency, Developer, Relator, Harmony, and Empathy",
    content: "When I first received my CliftonStrengths results, I was both curious and skeptical. The assessment revealed my top five strengths as consistency, developer, relator, harmony, and empathy. Some of these made sense right away, while others surprised me and pushed me to think about myself in ways I hadn't before. Out of these, consistency stood out as the strength that felt most naturally tied to who I am. CliftonStrengths defines consistency as a craving for stable routines, not perfection, but steadiness. For me, this resonates deeply. I find myself structuring almost every part of my life around routines, from how I study and take notes to how I exercise. There's something satisfying about checking boxes off a list, seeing order in the chaos, and knowing I've followed through.",
    images: ["/logos/clifton1.png", "/logos/clifton2.png"],
  },
  {
    id: 4,
    title: "Best Self Feedback Project",
    description: "Understanding my unique contributions through reflected feedback",
    content: "",
    subSections: [
      {
        title: "What is the Best Self Feedback Project?",
        content: "This project was a \"Reflected Best Self\" exercise where you reach out to people from different parts of your life and ask them for short stories about times when they saw you at your best: moments where you added real value, showed leadership, overcame challenges, or made a positive impact. After collecting these narratives, you look for patterns and themes across all the feedback, then use those insights to build a portrait of your strengths and how you naturally show up in the world. The whole point is to help you understand your unique contributions and learn how to lean into your strengths as a teammate and leader.",
      },
      {
        title: "What I Discovered from the Feedback",
        content: "At my best, I am a calm, empathetic, and fair leader who stays composed under pressure, balances care with honesty, and anchors decisions in my core values of faith, family, responsibility, authenticity, helping others, and good character. When I am at my best, I show up by listening first, keeping my word, naming hard truths with respect, and being a steady person others can lean on when things are painful or uncertain. I want to live this more consistently and to do so, I will pause before reacting, choose courageous conversations over avoidance, set clear boundaries so I can keep commitments, and seek regular consultation and feedback to stay aligned with my values.",
      },
    ],
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
            Engineering Leadership Certificate Program
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mb-6" />
          <p className="text-stone-600 max-w-2xl mx-auto">
            Insight into my leadership journey and personal development process
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
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
                      {/* Main content if exists */}
                      {selectedCardData.content && (
                        <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 mb-8">
                          <p className="text-stone-700 leading-relaxed">
                            {selectedCardData.content}
                          </p>
                        </div>
                      )}

                      {/* Images - centered for single, side by side for multiple */}
                      {selectedCardData.images && selectedCardData.images.length > 0 && (
                        <div className={`mb-8 ${selectedCardData.images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-6'}`}>
                          {selectedCardData.images.map((image, index) => (
                            <div 
                              key={index} 
                              className={`bg-stone-50 rounded-2xl p-6 border border-stone-100 flex items-center justify-center ${selectedCardData.images!.length === 1 ? 'max-w-md' : ''}`}
                            >
                              <Image
                                src={image}
                                alt={`${selectedCardData.title} image ${index + 1}`}
                                width={selectedCardData.images!.length === 1 ? 300 : 400}
                                height={selectedCardData.images!.length === 1 ? 300 : 400}
                                className="w-full h-auto object-contain rounded-xl"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sub-sections for cards like Best Self Feedback */}
                      {selectedCardData.subSections && selectedCardData.subSections.map((section, index) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-xl font-semibold text-stone-900 mb-4">{section.title}</h4>
                          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 space-y-4">
                            {section.content.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-stone-700 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
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
