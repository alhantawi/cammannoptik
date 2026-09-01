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
          filter: "blur(12px)",
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
          stroke="#2E4036"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="42" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="18" strokeDasharray="2 4" strokeWidth="1.5" />
          <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.3" />
          <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.3" />
          <line x1="18" y1="18" x2="82" y2="82" strokeWidth="0.2" />
          <line x1="18" y1="82" x2="82" y2="18" strokeWidth="0.2" />
        </svg>
      );
    }

    if (type === "scan") {
      return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/40 border border-[#2E4036]/10 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-25" fill="none" stroke="#1A1A1A" strokeWidth="0.5">
            <defs>
              <pattern id="lens-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1A1A1A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#lens-grid)" />
            <circle cx="50" cy="50" r="28" fill="#F2F0E9" stroke="#2E4036" strokeWidth="1" />
            <circle cx="50" cy="50" r="14" fill="#2E4036" fillOpacity="0.1" />
          </svg>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#CC5833] animate-scan-line shadow-[0_0_12px_#CC5833]" />
        </div>
      );
    }

    // wave graphic
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 120 100" className="w-full h-full stroke-[#CC5833] fill-none" strokeWidth="1.5" strokeLinecap="round">
          <path
            d="M0 50 L20 50 L30 20 L40 80 L50 30 L60 70 L70 50 L90 50 L100 35 L110 65 L120 50"
            className="animate-laser-dash"
          />
        </svg>
      </div>
    );
  };

  return (
    <section id="leistungen" ref={containerRef} className="bg-[#F2F0E9] py-24 relative">
      {/* Heading */}
      <div className="text-center mb-12 px-6 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] bg-[#CC5833]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Leistungsspektrum
        </span>
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#1A1A1A]">
          Unsere Expertise für Ihre Augen
        </h2>
        <p className="font-serif italic text-2xl text-[#2E4036]">
          Das optometrische Protokoll in 3 Schritten
        </p>
      </div>

      {/* Sticky Stacked Cards */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {protocolCards.map((card) => (
          <div
            key={card.id}
            className="stack-card sticky top-24 min-h-[75vh] md:h-[80vh] flex items-center justify-center py-6 origin-top"
          >
            <div className="w-full h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#2E4036]/10">
              
              {/* Content Side */}
              <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-4xl sm:text-5xl font-light text-[#2E4036]/20">
                    {card.id}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] bg-[#CC5833]/10 px-3 py-1 rounded-full font-bold">
                    {card.tag}
                  </span>
                </div>

                <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#2E4036] font-semibold mb-2">
                  {card.subtitle}
                </h4>

                <h3 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-5 leading-tight">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light mb-8">
                  {card.desc}
                </p>

                {/* Features checklist */}
                <div className="space-y-2.5 mb-8">
                  {card.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1A1A]/85 font-medium">
                      <CheckCircle2 size={15} className="text-[#CC5833] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => openBooking(card.id === "01" ? "basis" : card.id === "02" ? "meister" : "klinisch")}
                    className="magnetic-btn px-6 py-3 bg-[#2E4036] text-white hover:bg-[#1E2B24] rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Dieses Protokoll anfragen</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Graphic Side */}
              <div className="flex-1 bg-[#F2F0E9]/60 relative flex items-center justify-center p-8 md:p-12 overflow-hidden border-t md:border-t-0 md:border-l border-[#2E4036]/10">
                {/* Tech Status Pill */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full border border-[#2E4036]/10 text-[10px] font-mono text-[#2E4036]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E4036] animate-pulse" />
                  <span>MODUL {card.id} AKTIV</span>
                </div>

                <div className="w-56 h-56 sm:w-72 sm:h-72 relative">
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
