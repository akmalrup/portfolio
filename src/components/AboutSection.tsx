import Section from "@/components/Section";

/**
 * About Me section - personal bio and background.
 * 
 * To customize:
 * - Replace the bio text with your own story
 * - Update the interests and focus areas
 */

export default function AboutSection() {
  return (
    <Section id="about-me" ariaLabel="About Me" className="bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">About Me</h2>
      <div className="space-y-6 text-lg text-stone-600">
        <p>
          I&apos;m an engineering student with a passion for solving complex problems through 
          innovative thinking and technology. My journey in engineering has equipped me with 
          both technical skills and a collaborative mindset.
        </p>
        <p>
          My interests span across multiple domains including software development, data analysis, 
          and engineering design. I enjoy working on projects that challenge me to learn new 
          technologies and methodologies.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-stone-900 mb-4">Focus Areas</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="mr-2 text-stone-900">•</span>
              <span>Software Engineering & Development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-stone-900">•</span>
              <span>Data Analysis & Visualization</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-stone-900">•</span>
              <span>Engineering Design & Problem Solving</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-stone-900">•</span>
              <span>Continuous Learning & Innovation</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

