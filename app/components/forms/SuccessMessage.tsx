"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface SuccessMessageProps {
  className?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="flex flex-col items-center justify-center py-16 px-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-soft border border-white/20">
        <CheckCircle className="w-20 h-20 text-green-400 mb-6" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
          תודה רבה! פנייתך התקבלה בהצלחה
        </h2>
        <p className="text-xl text-gray-200 text-center mb-8 leading-relaxed">
          אנו ניצור איתך קשר בהקדם האפשרי
        </p>

        {/* Quick Contact Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://wa.me/972765991386?text=%D7%94%D7%99%D7%99%2C%20%D7%A9%D7%9C%D7%97%D7%AA%D7%99%20%D7%98%D7%95%D7%A4%D7%A1%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Image
              src="/images/icons/whatsapp-border.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="inline-block w-6 h-6"
            />
            צור קשר ב-WhatsApp
          </a>
          <a
            href="mailto:sales@switchq.co.il"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-lg px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-xl">✉️</span>
            שלח אימייל
          </a>
        </div>

        {/* Additional Information */}
        <div className="text-center text-gray-300 text-sm">
          <p className="mb-2">
            <strong className="text-white">SwitchQ</strong> - פתרונות IoT
            מתקדמים לחדרי שרתים
          </p>
          <p>📞 WhatsApp: 0765991386 | ✉️ sales@switchq.co.il</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
