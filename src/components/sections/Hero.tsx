"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useAppointment();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-elem", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-end pb-20 md:pb-28 px-6 md:px-16 overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Image & Multi-layer cinematic overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470115636405-2099b22201b1?q=80&w=2070&auto=format&fit=crop"
          alt="Atmosphärischer Waldhintergrund Cammann Optik"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#2E4036]/80 to-[#1A1A1A]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#1A1A1A]/35" />
      </div>

      {/* Decorative Radial Grid / Precision Lens Circles */}
      <div className="absolute right-10 top-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]" fill="none" stroke="#F2F0E9" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="6 2" />
          <circle cx="100" cy="100" r="30" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.3" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl text-white pt-32">
        {/* Badge */}
        <div className="hero-elem inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-mono text-xs uppercase tracking-widest text-[#F2F0E9] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#CC5833] animate-[barPulse_1s_infinite_alternate]" />
          <span>Meisterbetrieb für ganzheitliche Augenoptik</span>
        </div>

        {/* Headlines */}
        <h1 className="hero-elem font-outfit text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.08] tracking-tight mb-3">
          Exzellentes Sehen ist keine <br className="hidden sm:inline" />
          Frage des Standards.
        </h1>
        <h2 className="hero-elem font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl italic text-[#F2F0E9]/95 leading-[1.08] mb-10 font-normal">
          Sondern der Persönlichkeit.
        </h2>

        {/* Subtitle & Actions Bar */}
        <div className="hero-elem flex flex-col lg:flex-row gap-8 lg:items-center justify-between border-t border-white/20 pt-8 mt-6">
          <p className="text-base sm:text-lg md:text-xl font-light max-w-xl text-white/85 leading-relaxed">
            Wir nehmen uns Zeit für präzise 3D-Wellenfrontanalysen, individuelle Beratung und Sehlösungen, die perfekt zu Ihrem Leben passen.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <button
              onClick={() => openBooking("meister")}
              className="magnetic-btn bg-[#CC5833] hover:bg-[#b04a29] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 whitespace-nowrap shadow-xl shadow-[#CC5833]/30 cursor-pointer"
            >
              <span>Jetzt Beratungstermin vereinbaren</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#philosophie"
              className="px-6 py-4 rounded-full font-medium text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors text-center border border-white/15"
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="hero-elem flex flex-wrap items-center gap-6 mt-8 pt-4 text-xs font-mono text-white/60">
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#CC5833]" />
            100% Meisterprüfung & Betreuung
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#CC5833]" />
            0.01 dpt Wellenfront-Präzision
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Hannover Mitte</span>
        </div>
      </div>
    </section>
  );
};
