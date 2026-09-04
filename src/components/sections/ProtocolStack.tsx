"use client";

import React, { useEffect, useRef } from "react";
import { protocolCards } from "@/data/protocols";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ProtocolStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useAppointment();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray<HTMLElement>(".stack-card");

      cardElements.forEach((card, i) => {
        if (i === cardElements.length - 1) return;

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.35,
          filter: "blur(10px)",
          scrollTrigger: {
            trigger: cardElements[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderGraphic = (type: "radial" | "scan" | "wave") => {
    if (type === "radial") {
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-[spin_25s_linear_infinite] opacity-80"
          fill="none"
          stroke="#161719"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="42" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="18" strokeDasharray="2 4" strokeWidth="1.5" stroke="#D13426" />
          <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.3" />
          <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.3" />
          <line x1="18" y1="18" x2="82" y2="82" strokeWidth="0.2" />
          <line x1="18" y1="82" x2="82" y2="18" strokeWidth="0.2" />
        </svg>
      );
    }

    if (type === "scan") {
      return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/60 border border-[#161719]/10 flex items-center justify-center p-4 shadow-inner">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-35" fill="none" stroke="#161719" strokeWidth="0.5">
            <defs>
              <pattern id="lens-grid-cammann" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#161719" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#lens-grid-cammann)" />
            <circle cx="50" cy="50" r="32" fill="#FAF8F5" stroke="#161719" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="22" stroke="#D13426" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="12" fill="#D13426" fillOpacity="0.15" />
            <circle cx="50" cy="50" r="3" fill="#D13426" />
            <line x1="50" y1="18" x2="50" y2="82" stroke="#D13426" strokeWidth="0.4" strokeDasharray="2 2" />
            <line x1="18" y1="50" x2="82" y2="50" stroke="#D13426" strokeWidth="0.4" strokeDasharray="2 2" />
          </svg>
          
          {/* Animated Biometric Center Target Pulse */}
          <div className="absolute w-12 h-12 rounded-full border border-[#D13426]/60 animate-ping pointer-events-none" />
          
          {/* Animated Laser Scanning Beam */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D13426] to-transparent animate-scan-line shadow-[0_0_12px_#D13426,0_0_4px_#D13426]" />
        </div>
      );
    }

    // wave graphic (optical waveform / wavefront signal)
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 bg-white/60 rounded-2xl border border-[#161719]/10 overflow-hidden shadow-inner">
        {/* Scoped Keyframes to guarantee 100% animation execution */}
        <style>{`
          @keyframes oscSweep {
            0% { left: -10%; opacity: 0; }
            10% { opacity: 1; }
            85% { opacity: 1; }
            100% { left: 105%; opacity: 0; }
          }
          @keyframes waveLinePulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(209,52,38,0.3)); opacity: 0.85; }
            50% { filter: drop-shadow(0 0 10px rgba(209,52,38,0.9)); opacity: 1; }
          }
        `}</style>

        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#161719 0.75px, transparent 0.75px)",
            backgroundSize: "12px 12px"
          }}
        />

        {/* Oscilloscope Sweeping Laser Cursor & Trail */}
        <div 
          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#D13426]/10 to-[#D13426]/25 pointer-events-none"
          style={{
            animation: "oscSweep 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            transform: "translateX(-100%)"
          }}
        />
        <div 
          className="absolute inset-y-0 w-[2px] bg-[#D13426] shadow-[0_0_12px_#D13426,0_0_4px_#D13426] pointer-events-none"
          style={{
            animation: "oscSweep 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite"
          }}
        />

        {/* Waveform SVG */}
        <svg viewBox="0 0 120 100" className="w-full h-full fill-none relative z-10" strokeLinecap="round" strokeLinejoin="round">
          {/* Static reference baseline */}
          <path
            d="M0 50 L20 50 L30 20 L40 80 L50 30 L60 70 L70 50 L90 50 L100 35 L110 65 L120 50"
            stroke="#161719"
            strokeWidth="1"
            opacity="0.15"
          />

          {/* Glowing Optical Waveform */}
          <path
            d="M0 50 L20 50 L30 20 L40 80 L50 30 L60 70 L70 50 L90 50 L100 35 L110 65 L120 50"
            stroke="#D13426"
            strokeWidth="2.2"
            style={{
              animation: "waveLinePulse 2s ease-in-out infinite"
            }}
          />

          {/* Active Measurement Signal Points */}
          <circle cx="40" cy="80" r="3" fill="#D13426" className="animate-ping" style={{ transformOrigin: "40px 80px" }} />
          <circle cx="40" cy="80" r="2" fill="#D13426" />
          <circle cx="50" cy="30" r="3" fill="#D13426" className="animate-ping" style={{ transformOrigin: "50px 30px" }} />
          <circle cx="50" cy="30" r="2" fill="#D13426" />
        </svg>

        {/* Live Signal Indicator Badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 font-mono text-[9px] text-[#D13426] tracking-wider font-semibold bg-white/80 px-2 py-0.5 rounded-full border border-[#D13426]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D13426] animate-ping" />
          <span>WAVEFORM AKTIV</span>
        </div>
      </div>
    );
  };

  return (
    <section id="leistungen" ref={containerRef} className="bg-[#FAF8F5] py-24 relative">
      {/* Heading */}
      <div className="text-center mb-12 px-6 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Leistungsspektrum
        </span>
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-[#161719]">
          Optometrische Expertise
        </h2>
        <p className="font-serif italic text-2xl text-[#D13426]">
          Das 3-Stufen Meisterprotokoll
        </p>
      </div>

      {/* Sticky Stacked Cards */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {protocolCards.map((card) => (
          <div
            key={card.id}
            className="stack-card sticky top-20 md:top-24 flex items-center justify-center py-4 sm:py-6 origin-top mb-8 md:mb-16 last:mb-0"
          >
            <div className="w-full bg-white rounded-3xl md:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#161719]/10">
              
              {/* Content Side */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-light text-[#161719]/20">
                    {card.id}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3 py-1 rounded-full font-bold">
                    {card.tag}
                  </span>
                </div>

                <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#161719]/70 font-semibold mb-1.5">
                  {card.subtitle}
                </h4>

                <h3 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-black text-[#161719] mb-3 sm:mb-4 leading-tight">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-[#161719]/75 leading-relaxed font-light mb-4 sm:mb-6">
                  {card.desc}
                </p>

                {/* Features checklist */}
                <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                  {card.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#161719]/85 font-medium">
                      <CheckCircle2 size={15} className="text-[#D13426] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => openBooking(card.id === "01" ? "basis" : card.id === "02" ? "meister" : "klinisch")}
                    className="luxury-btn px-6 py-3 bg-[#161719] text-white hover:bg-[#232529] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Dieses Protokoll buchen</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Graphic Side */}
              <div className="flex-1 bg-[#FAF8F5]/80 relative flex items-center justify-center p-6 sm:p-8 md:p-12 overflow-hidden border-t md:border-t-0 md:border-l border-[#161719]/10 min-h-[220px] md:min-h-0">
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#161719]/10 text-[10px] font-mono text-[#161719] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D13426] animate-pulse" />
                  <span>MODUL {card.id} AKTIV</span>
                </div>

                <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 relative">
                  {renderGraphic(card.graphicType)}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
