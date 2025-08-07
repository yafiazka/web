"use client";
import { Navigation } from "../components/nav";

export default function AboutMe() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 text-zinc-400">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Muhammad Yafi Azka</h3>
            <p><strong>Location:</strong> Banda Aceh, Indonesia</p>
            <p><strong>Email:</strong> yafiazka19@gmail.com</p>
            <p><strong>Phone:</strong> +62 851-5600-9530</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/YafiAzka" target="_blank" className="text-blue-400 underline">YafiAzka</a></p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Professional Summary</h3>
            <p>
              I'm Yafi Azka, a fast learner and passionate full-stack developer with strong skills in developing user-friendly and responsive web and mobile applications. Proficient in HTML, CSS, JavaScript, PHP, Laravel, and Flutter, I specialize in combining clean design with functional interfaces. Experienced in working with Git/GitLab and applying UI/UX principles, I stay up-to-date with the latest trends and best practices in software development.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Skills</h3>
            <p>
              <strong>Technical:</strong> Flutter, Laravel, HTML, CSS, JavaScript, PHP, Git/GitLab, Figma
            </p>
            <p>
              <strong>Soft Skills:</strong> Problem-solving, interpersonal communication, technical presentation
            </p>
            <p>
              <strong>Other:</strong> Social media marketing, Canva design, English proficiency
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Education</h3>
            <p>
              <strong>Universitas Bina Bangsa Getsempena</strong> — Bachelor's Degree in Computer Science (2024 – Present)
            </p>
            <p>
              <strong>SMK Negeri 5 Telkom Banda Aceh</strong> — Vocational High School in Software Engineering (Graduated 2021)
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Work Experience</h3>
            <p>
              <strong>PT. Digital Kreasi Muslim</strong> (Feb 2024 – Present)  
              Developed an EMR system integrated with BSrE and BPJS, simplifying how doctors manage patient data.
            </p>
            <p>
              <strong>PT. Leu Ritel Indonesia</strong> (Sep 2022 – Jan 2024)  
              Built a cross-platform e-commerce app using Flutter and Laravel for both modern and traditional markets, and developed a data processing system for internal use.
            </p>
            <p>
              <strong>Kooling ID</strong> (2020 – 2021)  
              Volunteered as a digital marketer, managing social media accounts and supporting digital marketing strategies and campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
