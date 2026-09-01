"use client";

import React from "react";
import { eyewearBrands } from "@/data/brands";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const BrandGallery: React.FC = () => {
  const { openBooking } = useAppointment();

  return (
    <section id="marken" className="py-24 px-6 md:px-16 bg-[#161719] text-white relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D13426]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/15 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
            <Sparkles size={13} />
            <span>Kuratierte Brillenmanufakturen</span>
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Meisterwerke der Brillenkunst
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
            In unserem Studio führen wir handverlesene Premium-Marken und unabhängige Manufakturen, die höchste Verarbeitungsqualität mit zeitloser Ästhetik vereinen.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {eyewearBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#D13426]/60 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#D13426] font-bold bg-[#D13426]/15 px-3 py-1 rounded-full">
                    {brand.origin}
                  </span>
                  <span className="font-mono text-xs text-white/40">
                    {brand.category}
                  </span>
                </div>

                <h3 className="font-outfit text-3xl font-extrabold text-white mb-2 group-hover:text-[#D13426] transition-colors">
                  {brand.name}
                </h3>

                <p className="font-serif italic text-lg text-white/90 mb-4">
                  „{brand.tagline}“
                </p>

                <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono text-white/50">Im Studio vorrätig</span>
                <button
                  onClick={() => openBooking("basis")}
                  className="text-xs font-mono uppercase tracking-wider text-[#D13426] group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Modelle anprobieren</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}

          {/* Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-[#D13426] to-[#A32215] rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full inline-block mb-6">
                Stil- & Typberatung
              </span>
              <h3 className="font-outfit text-3xl font-extrabold mb-3">
                Ihre Brille. Ihr Charakter.
              </h3>
              <p className="text-sm text-white/90 font-light leading-relaxed mb-6">
                Welche Brillenform passt perfekt zu Ihren Gesichtszügen und Ihrem Teint? Vereinbaren Sie eine exklusive Stilberatung bei einer Tasse Espresso in unserer Studio-Lounge.
              </p>
            </div>

            <button
              onClick={() => openBooking("basis")}
              className="w-full py-3.5 bg-white text-[#161719] hover:bg-[#FAF8F5] rounded-full text-xs font-semibold uppercase tracking-wider font-mono shadow-lg transition-colors cursor-pointer"
            >
              Fassungsberatung buchen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
