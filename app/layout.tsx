import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "SwitchQ - הגנה חכמה על חדרי השרתים שלכם",
  description:
    "פתרון IoT מתקדם לניטור ובקרה של תנאי הסביבה בחדרי שרתים - טמפרטורה, לחות, דליפות מים וגישה לא מורשית",
  keywords: [
    "חדרי שרתים",
    "ניטור חדר שרתים",
    "חיישני IoT",
    "מערכת ניטור טמפרטורה",
    "אבטחת חדרי שרתים",
    "דליפות מים בחדר שרתים",
    "ניטור סביבתי",
    "פתרונות IoT לעסקים",
    "SwitchQ",
    "Efento",
  ],
  authors: [{ name: "SwitchQ" }],
  creator: "SwitchQ",
  publisher: "SwitchQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://switchq.co.il"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SwitchQ - הגנה חכמה על חדרי השרתים שלכם",
    description: "פתרון IoT מתקדם לניטור ובקרה של תנאי הסביבה בחדרי שרתים",
    url: "https://switchq.co.il",
    siteName: "SwitchQ",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwitchQ - הגנה חכמה על חדרי השרתים שלכם",
    description: "פתרון IoT מתקדם לניטור ובקרה של תנאי הסביבה בחדרי שרתים",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        </div>
      </body>
    </html>
  );
}
