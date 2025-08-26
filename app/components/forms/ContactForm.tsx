"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useRecaptcha } from "../../lib/hooks/useRecaptcha";

// Zod validation schema - simplified to 3 fields only
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "שם חייב להכיל לפחות 2 תווים")
    .max(50, "שם לא יכול להכיל יותר מ-50 תווים"),
  phone: z
    .string()
    .min(9, "מספר טלפון חייב להכיל לפחות 9 ספרות")
    .max(15, "מספר טלפון לא יכול להכיל יותר מ-15 ספרות")
    .regex(
      /^[0-9+\-\s()]+$/,
      "מספר טלפון יכול להכיל רק ספרות, +, -, רווחים וסוגריים"
    ),
  email: z
    .string()
    .email("כתובת אימייל לא תקינה")
    .min(5, "כתובת אימייל קצרה מדי")
    .max(100, "כתובת אימייל ארוכה מדי"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [formStartTime] = useState<number>(Date.now());
  const router = useRouter();

  // Initialize reCAPTCHA
  const {
    isLoaded: recaptchaLoaded,
    executeRecaptcha,
    error: recaptchaError,
  } = useRecaptcha({
    action: "contact_form",
  });

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

      // Get reCAPTCHA token
      let recaptchaToken: string | null = null;
      if (recaptchaLoaded) {
        try {
          recaptchaToken = await executeRecaptcha();
        } catch (error) {
          // Continue without reCAPTCHA token (graceful degradation)
        }
      }

      // Prepare submission data with protection fields
      const submissionData = {
        ...data,
        recaptchaToken,
        formStartTime,
        honeypot: "", // Empty honeypot field
      };

      // Send data to our API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        // Reset form and redirect to success page
        reset();
        router.push("/submit#contact");
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "אירעה שגיאה בשליחת ההודעה. אנא נסה שוב."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "אירעה שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר ב-WhatsApp: 0765991386"
      );
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {submitStatus === "success" ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 bg-neutral-50/20 rounded-2xl shadow">
          <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            תודה! פנייתך התקבלה בהצלחה
          </h2>
          {/* <p className="text-white text-center mb-4">
            {submitMessage || "נחזור אליך בהקדם האפשרי."}
          </p> */}
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <Input
            {...register("fullName")}
            type="text"
            label="שם מלא"
            placeholder="הכנס את שמך המלא"
            error={errors.fullName?.message}
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

          {/* Honeypot field - hidden from users, visible to bots */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px" }}
            />
          </div>

          {/* Security indicator */}
          {recaptchaLoaded && (
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-300" />
              <span>הטופס מוגן באמצעות reCAPTCHA</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col items-center space-y-4">
            <Button
              type="submit"
              variant="cta"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[200px] rounded-2xl"
            >
              <Send className="w-5 h-5 ml-2" />
              {isSubmitting ? "שולח..." : "שלח הודעה"}
            </Button>

            {/* Status Messages */}
            {submitStatus === "error" && (
              <div className="flex items-center space-x-2 space-x-reverse text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">{submitMessage}</p>
              </div>
            )}
          </div>

          {/* Alternative Contact Info */}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
