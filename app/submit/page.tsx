"use client";
import Image from "next/image";
import SuccessMessage from "../components/forms/SuccessMessage";
import { useEffect } from "react";

export default function SubmitPage() {
  const scrollToTopAndResetUrl = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset URL to remove any hash fragments
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  // Auto-scroll to contact section when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Small delay to ensure page is fully loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={scrollToTopAndResetUrl}
              className="flex items-center hover:opacity-80 transition-opacity duration-300 cursor-pointer focus:outline-none"
            >
              <Image
                src="/images/logos/logo.svg"
                alt="SwitchQ Logo"
                width={56}
                height={56}
                className="h-10 md:h-14 w-auto ml-2"
                priority
              />
              <h2 className="hidden md:block text-3xl text-primary-500 ms-2">
                SwitchQ
              </h2>
            </button>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/#products"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group me-8"
              >
                מוצרים
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#how-it-works"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group"
              >
                איך זה עובד
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#benefits"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group"
              >
                יתרונות
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group"
              >
                יצירת קשר
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/972765991386?text=%D7%94%D7%99%D7%99%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%95%D7%93%D7%A2%D7%94%20%D7%A9%D7%9C%D7%9B%D7%9D%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%98%D7%95%D7%A8%20%D7%97%D7%93%D7%A8%20%D7%A9%D7%A8%D7%AA%D7%99%D7%9D%0A%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93"
                target="_blank"
                className="hidden sm:block text-primary-500 hover:text-primary-600 font-medium transition-colors"
              >
                <span className="inline-flex items-center gap-2 mx-2 me-6">
                  <Image
                    src="/images/icons/whatsapp-color.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="inline-block align-middle"
                  />
                </span>
              </a>
              <a
                href="/"
                className="btn-cta shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                חזור לעמוד הראשי
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div
          id="hero-background-image"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // backgroundImage: "url('/images/backgrounds/hero.png')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Strong Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>

        {/* Additional dark overlay for extra contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        <div className="container-custom relative z-10">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center animate-fade-in-up max-w-5xl mx-auto">
              <h2 className="md:hidden text-white pb-4 text-5xl">SwitchQ</h2>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 drop-shadow-lg">
                🚀 פתרון IoT מתקדם לחדרי שרתים ותקשורת
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent drop-shadow-lg">
                  הגנה חכמה
                </span>
                <br />
                <span className="drop-shadow-2xl">על חדרי שרתים ותקשורת</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed mb-10 max-w-4xl mx-auto drop-shadow-lg">
                פתרון IoT מתקדם לניטור ובקרה של תנאי הסביבה בחדרי שרתים ותקשורת
                <br />
                <span className="font-semibold text-white">
                  {" "}
                  טמפרטורה, לחות, זיהוי הצפה וגישה לא מורשית
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <a
                  href="/#products"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl px-10 py-5 rounded-3xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  📖 למד עוד על הפתרון
                </a>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xl px-10 py-5 rounded-3xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🎯 קבל הצעת מחיר
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400">5</div>
                  <div className="text-md text-gray-300">
                    <div className="flex justify-center text-center align-center">
                      חיישנים
                      <br className="md:hidden" />
                      <span className="hidden md:flex">&nbsp;</span>
                      מתקדמים
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-400">
                    24/7
                  </div>
                  <div className="text-md text-gray-300">
                    <div className="flex justify-center text-center align-center">
                      ניטור
                      <br className="md:hidden" />
                      <span className="hidden md:flex">&nbsp;</span>
                      רציף
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400">
                    100%
                  </div>
                  <div className="text-md text-gray-300">
                    <div className="flex justify-center text-center align-center">
                      הגנה
                      <br className="md:hidden" />
                      <span className="hidden md:flex">&nbsp;</span>
                      חכמה
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-400 to-primary-400 rounded-full blur-3xl opacity-20 translate-y-48 -translate-x-48"></div>

        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              ✅ הודעה נשלחה בהצלחה
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              תודה על פנייתך!
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              קיבלנו את פנייתך ונחזור אליך בהקדם עם הצעת מחיר מותאמת אישית.
            </p>
          </div>

          {/* Success Message */}
          <div className="max-w-4xl mx-auto mb-16">
            <SuccessMessage />
          </div>

          {/* Additional Contact Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                תגובה מהירה
              </h4>
              <p className="text-gray-300">מענה תוך 30 דקות בשעות העבודה</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                ייעוץ מקצועי
              </h4>
              <p className="text-gray-300">הערכת צרכים חינם ללא התחייבות</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                התקנה מהירה
              </h4>
              <p className="text-gray-300">התקנה מקצועית תוך 48 שעות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">SwitchQ</h3>
            <p className="text-gray-400 mb-6">
              פתרונות IoT מתקדמים לניטור חדרי שרתים ותקשורת
            </p>
            <div className="flex justify-center items-center">
              <a
                href="tel:+972765991386"
                className="text-gray-400 hover:text-white transition-colors me-6"
              >
                <Image
                  src="/images/icons/whatsapp-color.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="inline-block w-6 h-6 me-2"
                />
                WhatsApp
              </a>
              <a
                href="mailto:sales@switchq.co.il"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="inline-block w-6 h-6 me-2 text-2xl">✉️</span>
                sales@switchq.co.il
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
              © 2025 SwitchQ. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
