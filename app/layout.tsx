import { Heebo } from "next/font/google";
import "./globals.css";
import FloatingButtons from "./components/FloatingButtons";

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
        </div>
        <FloatingButtons />
        </body>
      </html>
    );
  }
