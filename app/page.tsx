"use client";
import Image from "next/image";
import ContactForm from "./components/forms/ContactForm";

export default function HomePage() {
  const scrollToTopAndResetUrl = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset URL to remove any hash fragments
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

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
                href="#products"
                className="text-gray-700 hover:text-primary-500 transition-all duration-300 font-medium relative group me-8"
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
                href="#contact"
                className="btn-cta shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                קבל הצעת מחיר
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
        {/* <div className="absolute inset-0 bg-white/10"></div> */}
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
                  href="#products"
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

      {/* Products Section */}
      <section
        id="products"
        className="py-24 bg-gradient-to-br from-white to-gray-50 relative"
      >
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
              🔧 טכנולוגיית IoT מתקדמת
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              המוצרים שלנו
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מערכת חיישנים מתקדמת לניטור מקיף של חדרי השרתים והתקשורת עם
              טכנולוגיה אלחוטית
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="group bg-white rounded-3xl pb-0 pb-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="relative">
                <div className="w-142 h-142 mx-auto mb-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/products/temperature-humidity-on-wall.png"
                    alt="חיישן טמפרטורה ולחות"
                    width={248}
                    height={248}
                    className="w-142 h-142 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center px-8">
                  חיישן טמפרטורה ולחות
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed px-8">
                  ניטור מדויק של טמפרטורה ולחות למניעת התחממות יתר
                </p>
              </div>
              <div className="flex justify-center">
                <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold px-8">
                  🌡️ הגנה מהתחממות
                </span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl pb-0 pb-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="relative">
                <div className="w-124 h-124 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/products/leak-on-wall.png"
                    alt="חיישן הצפה"
                    width={248}
                    height={248}
                    className="w-124 h-124 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center px-8">
                  חיישן הצפה
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed px-8">
                  זיהוי מיידי של דליפות מים והצפה בחדר השרתים למניעת נזק כבד
                </p>
              </div>
              <div className="flex justify-center">
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold px-8">
                  💦 הגנה ממים
                </span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-0 pb-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="relative">
                <div className="w-124 h-124 mx-auto mb-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/products/pir-on-wall.png"
                    alt="גלאי תנועה"
                    width={248}
                    height={248}
                    className="w-124 h-124 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center px-8">
                  גלאי תנועה
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed px-8 ">
                  זיהוי תנועה בחדר השרתים למעקב אחר גישה לא מורשית עם עם חיישן
                  PIR
                </p>
              </div>
              <div className="flex justify-center">
                <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold px-8">
                  🛡️ בקרת גישה
                </span>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-0 pb-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="relative">
                <div className="w-124 h-124 mx-auto mb-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/products/power-consumption.png"
                    alt="חיישן צריכת חשמל"
                    width={248}
                    height={248}
                    className="w-124 h-124 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center px-8">
                  חיישן צריכת חשמל
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed px-8">
                  ניטור צריכת החשמל של המערכות בחדר השרתים למניעת עומסים חשמליים
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold px-8">
                    🔌 מניעת עומסים
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-0 pb-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="relative">
                <div className="w-124 h-124 mx-auto mb-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/products/gateway-on-wall.png"
                    alt="מרכזיית IoT"
                    width={248}
                    height={248}
                    className="w-124 h-124 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center px-8">
                  מרכזיית IoT
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed px-8">
                  מרכזיית תקשורת המחברת את כל החיישנים לרשת האינטרנט ולמערכת
                  הענן
                </p>
              </div>
              <div className="flex justify-center">
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold px-8">
                  🌐 מרכז תקשורת
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://www.switchq.co.il/"
              target="_blank"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xl px-10 py-5 rounded-3xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              למוצרים נוספים
            </a>
          </div>

          {/* Product Features */}
          <div className="mt-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 border border-primary-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                יתרונות טכנולוגיים
              </h3>
              <p className="text-lg text-gray-600">
                כל המוצרים שלנו מגיעים עם המפרט הטכני הגבוה ביותר בשוק
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icons/automations_system.png"
                    alt="מערכת אוטומציות"
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  מערכת אוטומציות
                </h4>
                <p className="text-gray-600">
                  מערכת לשליטה, ניהול ובקרה אוטומטית
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icons/notifications_system.png"
                    alt="מערכת התראות מתקדמת"
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  מערכת התראות מתקדמת
                </h4>
                <p className="text-gray-600">
                  התראות בהתאמה אישית לפי זמנים ותנאים מתקדמים
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icons/secured_cloud_architecture.png"
                    alt="מערכת ענן מאובטחת"
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
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
              מערכת מתקדמת לניטור ובקרה של חדרי שרתים ותקשורת
            </p>
          </div>

          {/* Flow Diagram: Sensor -> Gateway -> Cloud -> Application */}
          <div className="flex flex-col items-center justify-center mb-24">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Sensor */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-3xl flex items-center justify-center mb-4">
                  <Image
                    src="/images/products/temperature-humidity-on-wall.png"
                    alt="חיישן"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-3xl shadow-lg"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  חיישן
                </span>
              </div>
              {/* Arrow */}
              <span className="hidden md:block text-3xl text-primary-500 mx-2 lg:mx-4">
                ←
              </span>
              <span className="block md:hidden text-3xl text-primary-500 mx-2 lg:mx-4">
                ↓
              </span>
              {/* Gateway */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-3xl flex items-center justify-center mb-4">
                  <Image
                    src="/images/products/gateway-on-wall.png"
                    alt="מרכזיית BLE PoE"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-3xl shadow-lg"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  מרכזיית IoT
                </span>
              </div>
              {/* Arrow */}
              <span className="hidden md:block text-3xl text-primary-500 mx-2 lg:mx-4">
                ←
              </span>
              <span className="block md:hidden text-3xl text-primary-500 mx-2 lg:mx-4">
                ↓
              </span>
              {/* Cloud */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-3xl flex items-center justify-center mb-4">
                  <Image
                    src="/images/backgrounds/secured-cloud.png"
                    alt="אפליקציה"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-3xl shadow-lg"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  ענן מאובטח
                </span>
              </div>
              {/* Arrow */}
              <span className="hidden md:block text-3xl text-primary-500 mx-2 lg:mx-4">
                ←
              </span>
              <span className="block md:hidden text-3xl text-primary-500 mx-2 lg:mx-4">
                ↓
              </span>
              {/* Application */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-3xl flex items-center justify-center mb-4">
                  <Image
                    src="/images/backgrounds/application.jpg"
                    alt="אפליקציה"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-3xl shadow-lg"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  אפליקציה ודשבורד
                </span>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-600 text-lg max-w-2xl mx-auto">
              כל החיישנים שולחים נתונים למרכזיית IoT, שמעבירה אותם לענן מאובטח.
              <br />
              הנתונים זמינים באפליקציה ובדשבורד בזמן אמת.
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur opacity-60"></div>
                <Image
                  src="/images/backgrounds/alert-notifications.png"
                  alt="התראות בזמן אמת"
                  width={600}
                  height={400}
                  className="relative w-full max-w-lg h-auto rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
            <div className="text-center lg:text-right order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">התראות</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                קבלת התראות בזמן אמת ישירות מהאפליקציה, ב-SMS, ובאימייל, עם
                מערכת הגדרות מתקדמת להתאמה אישית.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    התראות אפליקציה
                  </span>
                </div>
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    התראות WhatsApp
                  </span>
                </div>
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    התראות SMS
                  </span>
                </div>
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    התראות אימייל
                  </span>
                </div>
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    VMS - שיחת טלפון אוטומטית
                  </span>
                </div>
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    התראות לפי זמנים
                  </span>
                </div>
                <div className="flex items-center justify-start lg:justify-start justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full me-4"></div>
                  <span className="text-lg font-medium text-gray-700">
                    התראות חוזרות
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
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
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/images/icons/advanced_dashboard.png"
                      alt="דשבורד מתקדם"
                      width={96}
                      height={96}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    דשבורד מתקדם
                  </h4>
                  <p className="text-gray-600">
                    ממשק משתמש אינטואיטיבי עם גרפים ונתונים בזמן אמת
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/images/icons/detailed_reports.png"
                      alt="דוחות מפורטים"
                      width={96}
                      height={96}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    דוחות מפורטים
                  </h4>
                  <p className="text-gray-600">
                    דוחות יומיים, שבועיים וחודשיים עם ניתוח מגמות
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/images/icons/remote_control.png"
                      alt="בקרה מרחוק"
                      width={96}
                      height={96}
                      className="w-24 h-24 object-contain"
                    />
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
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              פתרון מקיף לניטור חדרי שרתים ותקשורת עם הטכנולוגייה הכי המתקדמת
              והתמיכה הטובה ביותר בישראל
            </p> */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              פתרון מקיף לניטור חדרי שרתים ותקשורת המבוסס על טכנולוגיות IoT
              מתקדמות ותמיכה מקצועית בעברית
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-cyan-500"></div>
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/icons/save_money.png"
                  alt="חיסכון בעלויות"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                חיסכון בעלויות
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                מערכת חכמה שמונעת תקלות יקרות, חוסכת באנרגיה ומפחיתה את עלויות
                התחזוקה
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/icons/protected.png"
                  alt="אמינות גבוהה"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                אמינות גבוהה
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                זמינות של 99.9% עם גיבוי מלא (failover) ותפקוד רציף גם בזמן
                תקלות
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></div>
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/icons/support.png"
                  alt="תמיכה מקצועית"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                תמיכה מקצועית
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                ליווי טכני 24/7 בעברית, כולל וואטסאפ, טלפון ואימייל – עם זמן
                תגובה מהיר
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/icons/touch_app.png"
                  alt="התקנה ותפעול פשוטים"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                התקנה ותפעול פשוטים
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                התקנה קלה וניהול מהיר דרך אפליקציה אינטואיטיבית בעברית
              </p>
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
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 מוכנים להתחיל?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              מוכנים להגן על חדרי השרתים והתקשורת שלכם?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              צרו קשר עכשיו לקבלת ייעוץ חינם והצעת מחיר מותאמת אישית.
              {/* <br />
              <span className="text-white font-semibold">
                התקנה מקצועית תוך 48 שעות!
              </span> */}
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  שלחו לנו הודעה
                </h3>
                <p className="text-gray-300">
                  מלאו את הפרטים ותקבלו מענה תוך רגע!
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/972765991386?text=%D7%94%D7%99%D7%99%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%95%D7%93%D7%A2%D7%94%20%D7%A9%D7%9C%D7%9B%D7%9D%20%D7%A2%D7%9C%20%D7%A0%D7%99%D7%98%D7%95%D7%A8%20%D7%97%D7%93%D7%A8%20%D7%A9%D7%A8%D7%AA%D7%99%D7%9D%0A%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93"
                target="_blank"
                rel="noopener noreferrer"
                className="w-56 flex justify-center group bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl px-10 py-5 rounded-3xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                {/* <span className="text-2xl">📱</span> */}
                <Image
                  src="/images/icons/whatsapp-border.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="inline-block w-6 h-6 me-2"
                />
                WhatsApp
              </a>
              <a
                href="mailto:sales@switchq.co.il"
                className="w-56 flex justify-center group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl px-10 py-5 rounded-3xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-2xl">✉️</span>
                Email
              </a>
            </div>
          </div>

          {/* Contact Features */}
          {/* <div className="grid md:grid-cols-3 gap-8">
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
          </div> */}
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
