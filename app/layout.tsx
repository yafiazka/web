import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Yafi Azka - Fullstack Developer | yafiazka.my.id",
    template: "%s | Yafi Azka"
  },
  description: "Yafi Azka is a quick-learning and passionate fullstack developer with special enthusiasm for frontend development. Expert in crafting user-friendly interfaces and building complete web applications using React, Next.js, Flutter, Laravel, and modern web technologies.",
  keywords: [
    "Yafi Azka",
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
    "Database Management"
  ],
  authors: [{ name: "Yafi Azka", url: "https://yafiazka.my.id" }],
  creator: "Yafi Azka",
  publisher: "Yafi Azka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yafi Azka - Fullstack Developer | yafiazka.my.id",
    description: "Yafi Azka is a quick-learning and passionate fullstack developer with special enthusiasm for frontend development. Expert in crafting user-friendly interfaces and building complete web applications using React, Next.js, Flutter, Laravel, and modern web technologies.",
    url: "https://yafiazka.my.id",
    siteName: "Yafi Azka Portfolio",
    images: [
      {
        url: "https://yafiazka.my.id/og.png",
        width: 1200,
        height: 630,
        alt: "Yafi Azka - Frontend Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yafi Azka - Frontend Developer",
    description: "Passionate frontend developer specializing in React, Next.js, and Flutter development.",
    images: ["https://yafiazka.my.id/og.png"],
    creator: "@yafiazka19",
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
      </body>
    </html>
  );
}
