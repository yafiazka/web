import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yafi Azka - Fullstack Developer Portfolio",
  description: "Yafi Azka is a passionate fullstack developer with special enthusiasm for frontend development. Specializing in React, Next.js, Flutter, Laravel, and modern web technologies. View my portfolio of web and mobile applications.",
  keywords: "Yafi Azka, yafiazka, fullstack developer, frontend developer, React developer, Next.js, Flutter, Laravel, web developer, mobile app developer, portfolio",
  openGraph: {
    title: "Yafi Azka - Fullstack Developer Portfolio",
    description: "Passionate fullstack developer with special enthusiasm for frontend development. Specializing in React, Next.js, Flutter, Laravel, and modern web technologies.",
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
  "name": "Yafi Azka",
  "alternateName": "yafiazka",
  "url": "https://yafiazka.my.id",
        "image": "https://yafiazka.my.id/og.png",
  "sameAs": [
    "https://github.com/yafiazka",
    "https://linkedin.com/in/yafiazka"
  ],
  "jobTitle": "Fullstack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "PT. Digital Kreasi Muslim"
  },
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
    "Database Management"
  ],
  "description": "Yafi Azka is a quick-learning and passionate fullstack developer with special enthusiasm for frontend development. Expert in crafting user-friendly interfaces and building complete web applications."
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
            Yafi Azka
          </h1>
          <div className="sr-only">yafiazka - Frontend Developer Portfolio</div>
        </header>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <section className="my-16 text-center animate-fade-in w-96">
          <h2 className="text-sm text-zinc-200">
            I'm <strong>Yafi Azka</strong>, a quick-learning and passionate <strong>fullstack developer</strong> with special enthusiasm for <strong>frontend development</strong>. Expert in crafting user-friendly interfaces and building complete <strong>web and mobile applications</strong>. Specializing in <strong>React</strong>, <strong>Next.js</strong>, <strong>Flutter</strong>, and <strong>Laravel</strong> development.
          </h2>
        </section>
      </div>
    </>
  );
}
