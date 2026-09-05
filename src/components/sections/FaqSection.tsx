"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useAppointment();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 px-6 md:px-16 bg-[#F2F0E9] dark:bg-[#161719] transition-colors duration-500 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4 font-bold">
            <HelpCircle size={13} />
            Häufige Fragen
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#161719] dark:text-white">
            Wissenswertes rund um Ihre Sehkraft
          </h2>
          <p className="text-base text-[#161719]/70 dark:text-white/70 font-light">
            Transparente Antworten auf wichtige Fragen zur meisterlichen Augenglasbestimmung und individuellen Beratung.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white dark:bg-[#202226] rounded-3xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "border-[#D13426]/40 shadow-md ring-1 ring-[#D13426]/20"
                    : "border-[#161719]/10 dark:border-white/10 hover:border-[#161719]/20 dark:hover:border-white/20 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 sm:p-7 text-left flex justify-between items-center gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#D13426] bg-[#D13426]/10 px-2.5 py-1 rounded-full shrink-0">
                      {item.category}
                    </span>
                    <h3 className="font-outfit font-bold text-base sm:text-lg text-[#161719] dark:text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#D13426] text-white rotate-180"
                        : "bg-[#161719]/5 dark:bg-white/10 text-[#161719] dark:text-white"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 pt-1 sm:px-7 sm:pb-8 animate-in fade-in duration-200">
                    <div className="h-px bg-[#161719]/10 dark:bg-white/10 w-full mb-5" />
                    <p className="text-sm sm:text-base text-[#161719]/75 dark:text-white/75 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question Trigger */}
        <div className="mt-12 bg-white/70 dark:bg-[#202226] p-6 rounded-3xl border border-[#161719]/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left shadow-sm transition-colors duration-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D13426]/10 flex items-center justify-center text-[#D13426] shrink-0">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="font-outfit font-bold text-sm text-[#161719] dark:text-white">
                Haben Sie eine spezifische Frage zu Ihren Augen?
              </p>
              <p className="text-xs text-[#161719]/60 dark:text-white/60 font-light">
                Wir beraten Sie gerne unverbindlich im Vorfeld.
              </p>
            </div>
          </div>
          <button
            onClick={() => openBooking("meister")}
            className="px-5 py-2.5 bg-[#D13426] hover:bg-[#B5281B] text-white text-xs font-semibold rounded-full uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Persönlich fragen
          </button>
        </div>
      </div>
    </section>
  );
};
