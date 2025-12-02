# Akmal Rupasingha - Portfolio

A modern, single-page portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main single-page portfolio
├── components/
│   ├── Navbar.tsx          # Sticky navigation with scrollspy
│   ├── Section.tsx         # Reusable section wrapper with animations
│   ├── HomeSection.tsx     # Hero/landing section
│   ├── AboutSection.tsx    # About me section
│   ├── Engrg3900Section.tsx # ENGRG 3900 course section
│   ├── ResumeSection.tsx   # Resume/experience section
│   ├── ContactSection.tsx  # Contact information section
│   └── ProjectCard.tsx     # Reusable project card component
├── data/
│   ├── sections.ts         # Central section configuration
│   └── engrg3900.ts        # ENGRG 3900 projects data
└── styles/
    └── globals.css         # Global styles and Tailwind imports
```

## Customization Guide

### Adding a New Section

1. **Update section configuration** (`src/data/sections.ts`):
```typescript
export const SECTIONS: SectionConfig[] = [
  // ... existing sections
  { id: "new-section", label: "New Section" },
];
```

2. **Create section component** (`src/components/NewSection.tsx`):
```typescript
import Section from "@/components/Section";

export default function NewSection() {
  return (
    <Section id="new-section" ariaLabel="New Section">
      <h2 className="text-4xl font-bold">New Section</h2>
      {/* Your content */}
    </Section>
  );
}
```

3. **Add to main page** (`src/app/page.tsx`):
```typescript
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* ... existing sections */}
        <NewSection />
      </main>
    </div>
  );
}
```

### Updating Content

- **Personal information**: Edit `HomeSection.tsx` and `AboutSection.tsx`
- **ENGRG 3900 projects**: Update the array in `src/data/engrg3900.ts`
- **Contact information**: Edit `ContactSection.tsx` (uncomment GitHub/LinkedIn links and add your URLs)
- **Resume**: Place your PDF in `/public/resume.pdf` and update the link in `ResumeSection.tsx`

### Styling

The portfolio uses a light, modern color palette with stone/neutral tones:
- Background: `stone-50` (off-white)
- Text: `stone-900` (dark gray)
- Accents: `stone-600`

To modify colors, update the Tailwind classes throughout the components or extend the theme in `tailwind.config.ts`.

## Features

- **Smooth scrolling**: Native CSS scroll behavior with proper offset for sticky header
- **Scrollspy navigation**: Active section highlighting as you scroll
- **Framer Motion animations**: Subtle fade-in effects on section reveal and hover states
- **Responsive design**: Mobile-first approach that scales beautifully to desktop
- **TypeScript**: Fully typed for better developer experience
- **Easy to extend**: Central configuration and clear component structure

## Technologies

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Building for Production

```bash
npm run build
npm start
```

## License

This project is open source and available for personal use.

