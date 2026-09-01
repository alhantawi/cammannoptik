"use client";

import React from "react";
import { serviceTiers } from "@/data/services";
import { CheckCircle2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const Membership: React.FC = () => {
  const { openBooking } = useAppointment();

  return (
    <section id="tarife" className="py-32 px-6 md:px-16 bg-[#161719] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#D13426]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/15 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Transparente Beratung
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Investition in Ihre Sehkraft
          </h2>
          <p className="font-serif italic text-2xl text-[#FAF8F5]">
            Umfassende Meister-Leistungen ohne versteckte Kosten
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {serviceTiers.map((tier) => {
            const isFeatured = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? "bg-[#232529] border-2 border-[#D13426] shadow-2xl lg:-translate-y-4 shadow-[#D13426]/15"
                    : "bg-white/5 border border-white/10 hover:bg-white/[0.08]"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-0 right-10 bg-[#D13426] text-white text-[11px] font-mono uppercase tracking-wider px-4 py-1.5 rounded-b-xl shadow-md font-bold">
                    {tier.badge || "Meistgewählt"}
                  </div>
                )}

                <div>
                  {/* Duration & Price Label */}
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className={`font-mono text-xs uppercase px-3 py-1 rounded-full ${
                        isFeatured
                          ? "bg-white/20 text-white font-bold"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {tier.priceLabel}
                    </span>
                    <span className="font-mono text-xs flex items-center gap-1.5 text-[#D13426] bg-[#D13426]/15 px-3 py-1 rounded-full font-bold">
                      <Clock size={12} />
                      {tier.duration}
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold mb-2">
                    {tier.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm mb-8 leading-relaxed ${
                      isFeatured ? "text-white/85" : "text-white/60"
                    }`}
                  >
                    {tier.subtitle}
                  </p>

                  <div className="h-px bg-white/10 w-full mb-8" />

                  {/* Feature Checklist */}
                  <ul className="space-y-4 text-xs sm:text-sm mb-10">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 ${
                          feature.included
                            ? isFeatured
                              ? "text-white font-medium"
                              : "text-white/85"
                            : "text-white/30 line-through"
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          className={`shrink-0 mt-0.5 ${
                            feature.included ? "text-[#D13426]" : "text-white/20"
                          }`}
                        />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div>
                  <button
                    onClick={() => openBooking(tier.id)}
                    className={`w-full py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? "luxury-btn bg-[#D13426] text-white hover:bg-[#B5281B] shadow-xl shadow-[#D13426]/30"
                        : "border border-white/20 hover:bg-white/10 text-white"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-white/60 flex items-center justify-center gap-2">
            <ShieldCheck size={15} className="text-[#D13426]" />
            Alle Beratungen inklusive individueller Verträglichkeits- und Passformgarantie.
          </p>
        </div>
      </div>
    </section>
  );
};
