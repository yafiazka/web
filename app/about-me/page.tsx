import { Navigation } from "../components/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Yafi Azka",
  description: "Learn more about Yafi Azka, a passionate fullstack developer from Banda Aceh, Indonesia with enthusiasm for frontend development. Experienced in React, Next.js, Flutter, Laravel, and modern web technologies.",
  keywords: "Yafi Azka about, yafiazka biography, fullstack developer Indonesia, React developer Banda Aceh, Flutter developer, web developer profile, frontend enthusiast",
  openGraph: {
    title: "About Me - Yafi Azka",
    description: "Learn more about Yafi Azka, a passionate fullstack developer from Indonesia with enthusiasm for frontend development and expertise in modern web technologies.",
  },
};

export default function AboutMe() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-9xl mx-auto lg:mx-0 h-full">
          <div className="flex justify-between items-end">
            <div className="flex flex-col my-auto">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-zinc-400">
                Some of the projects are from work and some are on my own time.
              </p>
            </div>
            <img src="/me.jpg" alt="Yafi Azka" className="w-64 h-64 rounded-full object-cover" />
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 text-zinc-400">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Muhammad Yafi Azka</h3>
            <p><strong>Also known as:</strong> yafiazka</p>
            <p><strong>Location:</strong> Banda Aceh, Indonesia</p>
            <p><strong>Email:</strong> yafiazkawork@gmail.com</p>
            {/* <p><strong>Phone:</strong> +62 851-5600-9530</p> */}
            <p><strong>GitHub:</strong> <a href="https://github.com/YafiAzka" target="_blank" className="text-blue-400 underline">YafiAzka</a></p>
            <p><strong>Telegram:</strong> @yafiazka19</p>
            <p><strong>Portfolio:</strong> <a href="https://yafiazka.my.id" target="_blank" className="text-blue-400 underline">yafiazka.my.id</a></p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Professional Summary</h3>
            <p>
              I'm <strong>Yafi Azka</strong>, a passionate and quick-learning fullstack developer based in Banda Aceh, Indonesia, with a strong enthusiasm for frontend development. With expertise in modern web and mobile technologies, I specialize in creating user-friendly interfaces that deliver exceptional user experiences while maintaining solid backend capabilities. I combine technical expertise with creative problem-solving, focusing on building dynamic, responsive applications using React, Next.js, Flutter, Laravel, and modern web standards.
            </p>
            {/* <p>
              Currently pursuing a Bachelor's degree in Computer Science at Universitas Bina Bangsa Getsempena, I have established myself as a skilled fullstack developer in the Indonesian tech scene with comprehensive experience in both frontend and backend development, though my passion particularly lies in crafting beautiful, intuitive user interfaces.
            </p> */}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-zinc-100">Technical Expertise</h3>
            <p className="text-sm text-zinc-300 mb-4">
              <strong>Fullstack Developer</strong> with special enthusiasm and passion for <strong>Frontend Development</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-zinc-200 mb-2">Frontend (My Passion)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• React.js - Dynamic user interfaces</li>
                  <li>• Next.js - Server-side rendering</li>
                  <li>• TypeScript - Type-safe development</li>
                  <li>• Tailwind CSS - Modern styling</li>
                  <li>• Bootstrap - Responsive design</li>
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• UI/UX Implementation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-200 mb-2">Backend & Mobile</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Laravel - PHP framework</li>
                  <li>• PHP - Backend development</li>
                  <li>• Flutter - Cross-platform apps</li>
                  <li>• Dart - Flutter development</li>
                  <li>• API Development & Integration</li>
                  <li>• Database Management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-200 mb-2">Tools & Skills</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Git/GitLab - Version control</li>
                  <li>• Figma - UI/UX design</li>
                  <li>• Problem-solving</li>
                  <li>• Technical presentation</li>
                  <li>• English proficiency</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
            </div>
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

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-zinc-100">Work Experience</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-zinc-200">Fullstack Developer</h4>
                <p className="text-sm text-zinc-300">PT. Digital Kreasi Muslim • Feb 2024 – Present</p>
                <p className="mt-2">
                  Developed a comprehensive <strong>Paperless Hospital EMR System</strong> that revolutionizes how hospitals manage patient data. Working across the full stack with special enthusiasm for frontend development. The system features:
                </p>
                <ul className="mt-2 space-y-1 text-sm ml-4">
                  <li>• Integration with BSrE (Balai Sertifikasi Elektronik) for digital signatures</li>
                  <li>• BPJS integration for insurance claims processing</li>
                  <li>• Real-time data access for healthcare providers</li>
                  <li>• Streamlined patient data management workflows</li>
                  <li>• Beautiful, intuitive user interfaces with focus on user experience</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-200">Full-stack Developer</h4>
                <p className="text-sm text-zinc-300">PT. Leu Ritel Indonesia • Sep 2022 – Jan 2024</p>
                <p className="mt-2">
                  Built the <strong>Leumart E-commerce Platform</strong>, a cross-platform application using Flutter and Laravel, serving both modern and traditional markets in Indonesia. Also developed internal data processing systems for business operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-200">Digital Marketing Volunteer</h4>
                <p className="text-sm text-zinc-300">Kooling ID • 2020 – 2021</p>
                <p className="mt-2">
                  Managed social media accounts and supported digital marketing strategies and campaigns, gaining valuable experience in digital marketing and content creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
