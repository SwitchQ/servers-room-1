import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwitchQ - הגנה חכמה על חדרי השרתים שלכם",
  description:
    "פתרון IoT מתקדם לניטור ובקרה של תנאי הסביבה בחדרי שרתים - טמפרטורה, לחות, דליפות מים וגישה לא מורשית",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img
                src="/images/logos/logo.svg"
                alt="SwitchQ Logo"
                className="h-10 w-auto ml-2"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#products"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group"
              >
                מוצרים
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group"
              >
                איך זה עובד
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#benefits"
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
                href="tel:+972765991386"
                className="hidden sm:block text-primary-500 hover:text-primary-600 font-medium transition-colors"
              >
                +972-76-599-1386
              </a>
              <button className="btn-cta shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                קבל הצעת מחיר
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/backgrounds/hero.png')",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        <div className="container-custom relative z-10">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center animate-fade-in-up max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                🚀 פתרון IoT מתקדם לחדרי שרתים
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  הגנה חכמה
                </span>
                <br />
                על חדרי השרתים שלכם
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 max-w-4xl mx-auto">
                פתרון IoT מתקדם לניטור ובקרה של תנאי הסביבה בחדרי שרתים -
                <span className="font-semibold text-primary-300">
                  {" "}
                  טמפרטורה, לחות, דליפות מים וגישה לא מורשית
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xl px-10 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  🎯 קבל הצעת מחיר חינם
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl px-10 py-5 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                  📖 למד עוד על הפתרון
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">5+</div>
                  <div className="text-sm text-gray-300">שנות פעולה</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">ניטור רציף</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">30</div>
                  <div className="text-sm text-gray-300">דקות התקנה</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-24 bg-gradient-to-br from-white to-gray-50 relative"
      >
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
              🔧 טכנולוגיית Efento המתקדמת
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              המוצרים שלנו
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              חיישנים מתקדמים וגייטוויי לניטור מקיף של חדר השרתים עם טכנולוגיה
              אלחוטית מתקדמת
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/products/temperature-humidity-on-wall.png"
                    alt="חיישן טמפרטורה ולחות"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  חיישן טמפרטורה ולחות
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  ניטור מדויק של טמפרטורה ולחות עם דיוק של ±0.1°C ודיווח כל 15
                  דקות
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold">
                    🔋 5 שנות סוללה
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/products/leak-on-wall.png"
                    alt="חיישן דליפת מים"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  חיישן דליפת מים
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  זיהוי מיידי של דליפות מים ולחות יתר בחדר השרתים עם התראה
                  מיידית
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    ⚡ התראה מיידית
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/products/pir-on-wall.png"
                    alt="חיישן תנועה וגישה"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  חיישן תנועה וגישה
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  מעקב אחר גישה לא מורשית וזיהוי תנועה בחדר השרתים עם טכנולוגיית
                  PIR
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                    🛡️ אבטחה מתקדמת
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/products/gateway-on-wall.png"
                    alt="גייטוויי BLE PoE"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  גייטוויי BLE PoE
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  מרכז הבקרה המחבר את כל החיישנים לרשת האינטרנט עם הזנת PoE
                  מובנית
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    🌐 PoE מובנה
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Features */}
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-soft border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                מפרט טכני מתקדם
              </h3>
              <p className="text-lg text-gray-600">
                כל המוצרים שלנו מגיעים עם המפרט הטכני הגבוה ביותר בשוק
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📡</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  טכנולוגיית BLE 5.0
                </h4>
                <p className="text-gray-600">
                  חיבור אלחוטי מתקדם עם טווח של עד 100 מטר
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  הצפנה מתקדמת
                </h4>
                <p className="text-gray-600">
                  הגנה מלאה על הנתונים עם הצפנת AES-256
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ענן מאובטח
                </h4>
                <p className="text-gray-600">
                  גיבוי אוטומטי ונגישות מכל מקום בעולם
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-40"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 text-primary-700 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              ⚡ תהליך פשוט ומהיר
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              איך זה עובד?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              תהליך התקנה פשוט ומהיר להגנה מלאה על חדר השרתים שלכם תוך 3 שלבים
              בלבד
            </p>
          </div>

          {/* Step 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl text-2xl font-bold mb-6 lg:mr-0 mx-auto">
                1
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                התקנה קלה ומהירה
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                התקנה מקצועית תוך פחות מ-30 דקות. החיישנים מותקנים על הקירות ללא
                צורך בכבלים או עבודות חשמל מורכבות.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-end lg:justify-end justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    התקנה ללא כבלים
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-4"></div>
                </div>
                <div className="flex items-center justify-end lg:justify-end justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    הגדרה אוטומטית
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-4"></div>
                </div>
                <div className="flex items-center justify-end lg:justify-end justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    בדיקת מערכת מלאה
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-4"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-3xl blur opacity-60"></div>
                <img
                  src="/images/backgrounds/installation-process.png"
                  alt="תהליך התקנת החיישנים"
                  className="relative w-full max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur opacity-60"></div>
                <img
                  src="/images/backgrounds/alert-notifications.png"
                  alt="התראות בזמן אמת"
                  className="relative w-full max-w-lg h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
            <div className="text-center lg:text-right order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl text-2xl font-bold mb-6 lg:mr-0 mx-auto">
                2
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                התראות מיידיות
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                קבלת התראות מיידיות בכל אמצעי התקשורת - WhatsApp, SMS, אימייל
                ואפליקציה ניידת בזמן אמת.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-end lg:justify-end justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    התראות WhatsApp
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></div>
                </div>
                <div className="flex items-center justify-end lg:justify-end justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    הודעות SMS
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></div>
                </div>
                <div className="flex items-center justify-end lg:justify-end justify-center">
                  <span className="text-lg font-medium text-gray-700">
                    התראות אימייל
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ניטור רציף ובקרה מלאה
            </h3>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              מעקב רציף 24/7 אחר כל הפרמטרים הקריטיים עם דשבורד מתקדם ודוחות
              מפורטים
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-soft border border-white/50">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    דשבורד מתקדם
                  </h4>
                  <p className="text-gray-600">
                    ממשק משתמש אינטואיטיבי עם גרפים ונתונים בזמן אמת
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    דוחות מפורטים
                  </h4>
                  <p className="text-gray-600">
                    דוחות יומיים, שבועיים וחודשיים עם ניתוח מגמות
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    בקרה מרחוק
                  </h4>
                  <p className="text-gray-600">
                    שליטה מלאה במערכת מכל מקום בעולם דרך האפליקציה
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section
        id="benefits"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              ⭐ יתרונות מתקדמים
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              למה לבחור בפתרון של SwitchQ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              פתרון מקיף לניטור חדרי שרתים עם טכנולוגיית Efento המתקדמת והתמיכה
              הטובה ביותר בישראל
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/icons/monitoring-24-7.svg"
                  alt="ניטור 24/7"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                ניטור 24/7
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                מעקב רציף אחר טמפרטורה, לחות ותנאי סביבה קריטיים עם דיווח כל 15
                דקות
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/icons/real-time-alerts.svg"
                  alt="התראות בזמן אמת"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                התראות בזמן אמת
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                קבלת התראות מיידיות ב-WhatsApp, SMS, אימייל ואפליקציה ניידת תוך
                שניות
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/icons/battery-life.svg"
                  alt="5 שנות פעולה"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                5 שנות פעולה
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                חיי סוללה ארוכים ללא צורך בתחזוקה או החלפות עם אחריות מלאה
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/icons/easy-setup.svg"
                  alt="התקנה קלה"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                התקנה קלה
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                התקנה והגדרה תוך פחות מ-30 דקות ללא צורך בכבלים או עבודות חשמל
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 border border-primary-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                יתרונות נוספים שיחסכו לכם כסף
              </h3>
              <p className="text-lg text-gray-600">
                הפתרון שלנו לא רק מגן על הציוד - הוא גם חוסך עלויות תפעול
                משמעותיות
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  חיסכון בעלויות
                </h4>
                <p className="text-gray-600">
                  מניעת נזקים יקרים לציוד ושבירות בשירות
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  אמינות גבוהה
                </h4>
                <p className="text-gray-600">
                  99.9% זמינות עם גיבוי כפול ומערכת failover
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  תמיכה מקצועית
                </h4>
                <p className="text-gray-600">
                  תמיכה טכנית 24/7 בעברית עם זמן תגובה מהיר
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-400 to-primary-400 rounded-full blur-3xl opacity-20 translate-y-48 -translate-x-48"></div>

        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 מוכנים להתחיל?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              מוכנים להגן על חדר השרתים שלכם?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              צרו קשר עכשיו לקבלת ייעוץ חינם והצעת מחיר מותאמת אישית.
              <br />
              <span className="text-white font-semibold">
                התקנה מקצועית תוך 48 שעות!
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="https://wa.me/972765991386"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl px-10 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-2xl">📱</span>
                WhatsApp: +972-76-599-1386
              </a>
              <a
                href="mailto:contact@switchq.co.il"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl px-10 py-5 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-2xl">✉️</span>
                contact@switchq.co.il
              </a>
            </div>

            {/* Contact Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  תגובה מהירה
                </h4>
                <p className="text-gray-300">מענה תוך 30 דקות בשעות העבודה</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  ייעוץ מקצועי
                </h4>
                <p className="text-gray-300">הערכת צרכים חינם ללא התחייבות</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  התקנה מהירה
                </h4>
                <p className="text-gray-300">התקנה מקצועית תוך 48 שעות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">SwitchQ</h3>
            <p className="text-gray-400 mb-6">
              פתרונות IoT מתקדמים לניטור חדרי שרתים
            </p>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="tel:+972765991386"
                className="text-gray-400 hover:text-white transition-colors"
              >
                +972-76-599-1386
              </a>
              <a
                href="mailto:contact@switchq.co.il"
                className="text-gray-400 hover:text-white transition-colors"
              >
                contact@switchq.co.il
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
