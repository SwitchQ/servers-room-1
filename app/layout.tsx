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
  const [showWhatsappButton, setShowWhatsappButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowButton(window.scrollY > 200);
  //     // if near the bottom of the page, don't show WhatsApp button
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show regular button after scrolling 200px
      setShowButton(scrollY > 200);

      // Get contact form element
      const contactForm = document.getElementById("contact");

      // Check if contact form is in viewport
      let hideWhatsApp = false;

      if (contactForm) {
        const contactRect = contactForm.getBoundingClientRect();
        // Hide WhatsApp button if contact form is visible (even partially)
        hideWhatsApp = contactRect.top < windowHeight && contactRect.bottom > 0;
      }

      // Also hide WhatsApp button if user is near the bottom (footer area)
      // Adjust this value based on your footer height
      const footerThreshold = 300; // pixels from bottom
      const nearBottom =
        scrollY + windowHeight >= documentHeight - footerThreshold;

      if (nearBottom) {
        hideWhatsApp = true;
      }

      // Show WhatsApp button only if scrolled enough AND not in contact/footer area
      setShowWhatsappButton(!hideWhatsApp);
      // setShowWhatsappButton(scrollY > 200 && !hideWhatsApp);
    };

    window.addEventListener("scroll", handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset URL to remove any hash fragments
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable}`}>
      <head>
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SwitchQ",
              image: "https://switchq.co.il/images/logos/logo-1024.png",
              "@id": "https://switchq.co.il/",
              url: "https://switchq.co.il/",
              telephone: "+972-76-599-1386",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
              },
              description:
                "פתרון IoT מתקדם לניטור ובקרה של חדרי שרתים ותקשורת: טמפרטורה, לחות, דליפות מים, גישה לא מורשית. התראות בזמן אמת, התקנה מהירה, 5 שנות פעולה ללא תחזוקה.",
              logo: "https://switchq.co.il/images/logos/logo-1024.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+972-76-599-1386",
                  contactType: "customer support",
                  areaServed: "IL",
                  availableLanguage: ["Hebrew", "English"],
                },
              ],
              sameAs: ["https://www.facebook.com/switchq.co.il"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "פתרון ניטור IoT לחדרי שרתים ותקשורת",
              image: "https://switchq.co.il/images/logos/logo-1024.png",
              description:
                "פתרון IoT מתקדם לניטור ובקרה של חדרי שרתים ותקשורת: טמפרטורה, לחות, דליפות מים, גישה לא מורשית.",
              brand: {
                "@type": "Brand",
                name: "SwitchQ",
              },
              offers: {
                "@type": "Offer",
                url: "https://switchq.co.il/",
                priceCurrency: "ILS",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta
          property="og:title"
          content="הגנה חכמה על חדרי שרתים ותקשורת | SwitchQ IoT"
        />
        <meta
          property="og:description"
          content="פתרון IoT מתקדם לניטור ובקרה של חדרי שרתים ותקשורת: טמפרטורה, לחות, דליפות מים, גישה לא מורשית. התראות בזמן אמת, התקנה מהירה, 5 שנות פעולה ללא תחזוקה."
        />
        <meta property="og:image" content="/images/logos/logo-1024.png" />
        <meta property="og:url" content="https://switchq.co.il/" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="הגנה חכמה על חדרי שרתים ותקשורת | SwitchQ IoT"
        />
        <meta
          name="twitter:description"
          content="פתרון IoT מתקדם לניטור ובקרה של חדרי שרתים ותקשורת: טמפרטורה, לחות, דליפות מים, גישה לא מורשית. התראות בזמן אמת, התקנה מהירה, 5 שנות פעולה ללא תחזוקה."
        />
        <meta name="twitter:image" content="/images/logos/logo-1024.png" />
        <title>הגנה חכמה על חדרי שרתים ותקשורת | SwitchQ IoT</title>
        <meta
          name="description"
          content="פתרון IoT מתקדם לניטור ובקרה של חדרי שרתים ותקשורת: טמפרטורה, לחות, דליפות מים, גישה לא מורשית. התראות בזמן אמת, התקנה מהירה, 5 שנות פעולה ללא תחזוקה."
        />
        <meta
          name="keywords"
          content="חדרי שרתים, חדרי תקשורת, תקשורת, ניטור IoT, חיישנים, דליפות מים, טמפרטורה, לחות, SwitchQ, התראות בזמן אמת, ניטור 24/7, אבטחת מידע, פתרון חכם"
        />
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
              className="fixed bottom-10 left-10 z-50 bg-blue-400 hover:bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <Icon path={mdiArrowUp} size={1.2} />
            </button>
          )}
        </div>
        {showWhatsappButton && (
          <a
            href="https://wa.me/972765991386?text=%D7%94%D7%99%D7%99%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%95%D7%93%D7%A2%D7%94%20%D7%A9%D7%9C%D7%9B%D7%9D%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%98%D7%95%D7%A8%20%D7%97%D7%93%D7%A8%20%D7%A9%D7%A8%D7%AA%D7%99%D7%9D%0A%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed floating-whatsapp z-50 bg-whatsapp hover:bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300"
            aria-label="Open WhatsApp chat"
          >
            <img
              src="/images/icons/whatsapp-border.svg"
              alt="WhatsApp"
              className="inline-block w-7 h-7"
            />
          </a>
        )}
      </body>
    </html>
  );
}
