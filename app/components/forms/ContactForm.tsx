"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "שם חייב להכיל לפחות 2 תווים")
    .max(50, "שם לא יכול להכיל יותר מ-50 תווים")
    .regex(
      /^[א-ת\s\u0590-\u05FF\w\s]+$/,
      "שם יכול להכיל רק אותיות עבריות, אנגליות ורווחים"
    ),
  email: z
    .string()
    .email("כתובת אימייל לא תקינה")
    .min(5, "כתובת אימייל קצרה מדי")
    .max(100, "כתובת אימייל ארוכה מדי"),
  phone: z
    .string()
    .min(9, "מספר טלפון חייב להכיל לפחות 9 ספרות")
    .max(15, "מספר טלפון לא יכול להכיל יותר מ-15 ספרות")
    .regex(
      /^[0-9+\-\s()]+$/,
      "מספר טלפון יכול להכיל רק ספרות, +, -, רווחים וסוגריים"
    ),
  message: z
    .string()
    .max(1000, "הודעה לא יכולה להכיל יותר מ-1000 תווים")
    .optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus("idle");
      setSubmitMessage("");

      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default behavior - simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form data:", data);
      }

      setSubmitStatus("success");
      setSubmitMessage("הודעתך נשלחה בהצלחה! נחזור אליך בהקדם.");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name Field */}
        <Input
          {...register("name")}
          type="text"
          label="שם מלא"
          placeholder="הכנס את שמך המלא"
          error={errors.name?.message}
          required
          disabled={isSubmitting}
        />

        {/* Email Field */}
        <Input
          {...register("email")}
          type="email"
          label="כתובת אימייל"
          placeholder="example@company.com"
          error={errors.email?.message}
          required
          disabled={isSubmitting}
          dir="ltr"
          className="text-left"
        />

        {/* Phone Field */}
        <Input
          {...register("phone")}
          type="tel"
          label="מספר טלפון"
          placeholder="0501234567"
          error={errors.phone?.message}
          required
          disabled={isSubmitting}
          dir="ltr"
          className="text-left"
        />

        {/* Message Field */}
        {/* <Textarea
          {...register("message")}
          label="הודעה (אופציונלי)"
          placeholder="ספר לנו על הצרכים שלך, גודל חדר השרתים, סוג הציוד וכל מידע נוסף שיעזור לנו להכין עבורך הצעה מותאמת..."
          rows={5}
          error={errors.message?.message}
          disabled={isSubmitting}
          helperText="עד 1000 תווים"
        /> */}

        {/* Submit Button */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            type="submit"
            variant="cta"
            size="lg"
            loading={isSubmitting}
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[200px]"
          >
            <Send className="w-5 h-5 ml-2" />
            {isSubmitting ? "שולח..." : "שלח הודעה"}
          </Button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-center space-x-2 space-x-reverse text-green-600 bg-green-50 px-4 py-3 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{submitMessage}</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center space-x-2 space-x-reverse text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{submitMessage}</p>
            </div>
          )}
        </div>

        {/* Contact Info */}
        {/* <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">או צור קשר ישירות:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
            <a
              href="https://wa.me/972765991386"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse text-green-600 hover:text-green-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>WhatsApp: 0765991386</span>
            </a>
            <a
              href="mailto:sales@switchq.co.il"
              className="flex items-center space-x-2 space-x-reverse text-purple-600 hover:text-purple-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>sales@switchq.co.il</span>
            </a>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default ContactForm;
