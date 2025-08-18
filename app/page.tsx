import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Yafi Azka - Fullstack Developer Portfolio",
  description: "Muhammad Yafi Azka (Yafi Azka) is a passionate fullstack developer with special enthusiasm for frontend development. Specializing in React, Next.js, Flutter, Laravel, and modern web technologies. Based in Banda Aceh, Indonesia. View my portfolio of web and mobile applications.",
  keywords: "Muhammad Yafi Azka, Yafi Azka, Azka, Yafi, yafiazka, Muhammad Yafi, fullstack developer, frontend developer, React developer, Next.js, Flutter, Laravel, web developer, mobile app developer, portfolio, Banda Aceh developer, Indonesia developer, Computer Science student",
  openGraph: {
    title: "Muhammad Yafi Azka - Fullstack Developer Portfolio",
    description: "Muhammad Yafi Azka (Yafi Azka) - Passionate fullstack developer with special enthusiasm for frontend development. Specializing in React, Next.js, Flutter, Laravel, and modern web technologies. Based in Banda Aceh, Indonesia.",
  },
};

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About Me", href: "/about-me" }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Yafi Azka",
  "alternateName": ["Yafi Azka", "yafiazka", "Azka", "Yafi", "Muhammad Yafi"],
  "url": "https://yafiazka.my.id",
  "image": "https://yafiazka.my.id/og.png",
  "sameAs": [
    "https://github.com/yafiazka",
    "https://linkedin.com/in/yafiazka",
    "https://t.me/yafiazka19"
  ],
  "jobTitle": "Fullstack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "PT. Digital Kreasi Muslim",
    "url": "https://digitalkreasi.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Banda Aceh",
    "addressRegion": "Aceh",
    "addressCountry": "Indonesia"
  },
  "email": "yafiazkawork@gmail.com",
  "telephone": "+62 851-5600-9530",
  "birthPlace": "Indonesia",
  "nationality": "Indonesian",
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Universitas Bina Bangsa Getsempena",
      "description": "Bachelor's Degree in Computer Science (2024 – Present)"
    },
    {
      "@type": "EducationalOrganization",
      "name": "SMK Negeri 5 Telkom Banda Aceh",
      "description": "Vocational High School in Software Engineering (Graduated 2021)"
    }
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "Flutter",
    "Laravel",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Mobile App Development",
    "Backend Development",
    "Frontend Development",
    "UI/UX Design",
    "API Development",
    "Database Management",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Figma",
    "Canva",
    "Digital Marketing",
    "Social Media Marketing",
    "Dart",
    "HTML",
    "CSS"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Fullstack Developer",
    "description": "Specializing in frontend development with expertise in React, Next.js, Flutter, and Laravel",
    "skills": "React, Next.js, Flutter, Laravel, PHP, JavaScript, TypeScript, UI/UX Design"
  },
  "description": "Muhammad Yafi Azka (also known as Yafi Azka) is a quick-learning and passionate fullstack developer with special enthusiasm for frontend development. Expert in crafting user-friendly interfaces and building complete web applications using modern technologies like React, Next.js, Flutter, and Laravel. Based in Banda Aceh, Indonesia.",
  "seeks": "Web Development Projects, Mobile App Development, Frontend Development, Freelance Opportunities"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in" role="navigation" aria-label="Main navigation">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <header className="text-center">
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
            yafiazka
          </h1>
          <div className="sr-only">yafiazka - Frontend Developer Portfolio</div>
        </header>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <section className="my-16 text-center animate-fade-in w-96">
          <h2 className="text-sm text-zinc-200">
            I'm <strong>Muhammad Yafi Azka (Azka)</strong>, a quick-learning and passionate <strong>fullstack developer</strong> with special enthusiasm for <strong>frontend development</strong>. Expert in crafting user-friendly interfaces and building complete <strong>web and mobile applications</strong>. Specializing in <strong>React</strong>, <strong>Next.js</strong>, <strong>Flutter</strong>, and <strong>Laravel</strong> development.
          </h2>
        </section>
      </div>
    </>
  );
}
