"use client";
import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

// ...existing code...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7a00cc" />
      </head>
      <body
        className={`${heebo.className} font-sans antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        <div id="root" className="min-h-screen">
          {children}
          {showButton && (
            <button
              onClick={scrollToTop}
              title="Go to top"
              className="fixed bottom-10 right-10 z-50 bg-blue-400 hover:bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300"
            >
              <Icon path={mdiArrowUp} size={1.2} />
            </button>
          )}
        </div>
      </body>
    </html>
  );
}
