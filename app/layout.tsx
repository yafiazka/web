import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: "Muhammad Yafi Azka - Fullstack Developer | yafiazka.my.id",
    template: "%s | Muhammad Yafi Azka"
  },
  description: "Muhammad Yafi Azka (Yafi Azka) is a quick-learning and passionate fullstack developer with special enthusiasm for frontend development. Expert in crafting user-friendly interfaces and building complete web applications using React, Next.js, Flutter, Laravel, and modern web technologies. Based in Banda Aceh, Indonesia.",
  keywords: [
    "Muhammad Yafi Azka",
    "Yafi Azka",
    "Azka",
    "Yafi",
    "yafiazka",
    "Muhammad Yafi",
    "Yafi Azka Developer",
    "Azka Developer",
    "Muhammad Yafi Azka Portfolio",
    "Yafi Azka Portfolio",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Flutter Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "PHP Developer",
    "UI/UX Developer",
    "Mobile App Developer",
    "Indonesia Developer",
    "Banda Aceh Developer",
    "Aceh Developer",
    "Indonesian Programmer",
    "Freelance Developer",
    "Portfolio Website",
    "Web Design",
    "Responsive Design",
    "Modern Web Development",
    "Frontend Engineer",
    "Backend Engineer",
    "Software Developer",
    "Tech Enthusiast",
    "Programming",
    "Coding",
    "Web Applications",
    "User Interface",
    "User Experience",
    "Digital Solutions",
    "API Development",
    "Database Management",
    "Computer Science Student",
    "Universitas Bina Bangsa Getsempena",
    "SMK Negeri 5 Telkom Banda Aceh",
    "Software Engineering",
    "PT Digital Kreasi Muslim",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Figma",
    "Canva",
    "Digital Marketing",
    "Social Media Marketing"
  ],
  authors: [{ name: "Muhammad Yafi Azka", url: "https://yafiazka.my.id" }],
  creator: "Muhammad Yafi Azka",
  publisher: "Muhammad Yafi Azka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Muhammad Yafi Azka - Fullstack Developer | yafiazka.my.id",
    description: "Muhammad Yafi Azka (Yafi Azka) is a quick-learning and passionate fullstack developer with special enthusiasm for frontend development. Expert in crafting user-friendly interfaces and building complete web applications using React, Next.js, Flutter, Laravel, and modern web technologies. Based in Banda Aceh, Indonesia.",
    url: "https://yafiazka.my.id",
    siteName: "Muhammad Yafi Azka Portfolio",
    images: [
      {
        url: "https://yafiazka.my.id/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Yafi Azka - Fullstack Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://yafiazka.my.id",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Yafi Azka" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
