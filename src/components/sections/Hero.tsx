"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useAppointment();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden bg-[#161719]"
    >
      {/* Background with Real Cammann Studio Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/2.jpeg"
          alt="Cammann Optik Hannover Meisterstudio Interieur"
          className="w-full h-full object-cover scale-105 object-center"
        />
        {/* Luxury Vignette & Dark Studio Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161719] via-[#161719]/80 to-[#161719]/40" />
        <div className="absolute inset-0 bg-[#161719]/30 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl text-white pt-36">
        
        {/* Top Badges */}
        <div className="hero-anim flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-mono text-xs uppercase tracking-widest text-[#FAF8F5]">
            <span className="w-2 h-2 rounded-full bg-[#D13426] animate-pulse" />
            <span>Ihr Augenoptikermeister in Hannover</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D13426]/20 border border-[#D13426]/40 font-mono text-xs text-white">
            <Sparkles size={13} className="text-[#D13426]" />
            <span>Rodenstock DNEye® Biometrie-Zentrum</span>
          </div>
        </div>

        {/* Headlines */}
        <h1 className="hero-anim font-outfit text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-5 text-white">
          Persönliche Sehberatung, <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#FAF8F5]">
            biometrische Augenvermessung
          </span>{" "}
          <br className="hidden sm:inline" />
          & maßgefertigte Brillen.
        </h1>

        <p className="hero-anim text-base sm:text-lg md:text-xl font-light text-white/90 max-w-2xl leading-relaxed mb-10">
          Bei Cammann Optik werden Sie persönlich vom Augenoptikermeister betreut – von der ausführlichen Sehanalyse bis zur fertigen Brille. Individuell für Sie gefertigt in unserer hauseigenen Meisterwerkstatt.
        </p>

        {/* CTA Actions and Studio Pill */}
        <div className="hero-anim flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/15">
          <button
            onClick={() => openBooking("meister")}
            className="luxury-btn bg-[#D13426] hover:bg-[#B5281B] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 text-sm uppercase tracking-wider shadow-2xl shadow-[#D13426]/30 cursor-pointer"
          >
            <span>Persönlichen Meistertermin buchen</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#studio-tour"
            className="px-7 py-4 rounded-full font-medium text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-all text-center border border-white/15"
          >
            Studio entdecken
          </a>
        </div>

        {/* Bottom Trust & Feature Highlights */}
        <div className="hero-anim grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 text-xs text-white/75 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#D13426] shrink-0" />
            <span>100% Augenoptikermeister</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#D13426] shrink-0" />
            <span>Rodenstock DNEye® Biometrie</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#D13426] shrink-0" />
            <span>Lunor & Morel Manufakturen</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#D13426] shrink-0" />
            <span>Zentrale Lage Hannover</span>
          </div>
        </div>

      </div>
    </section>
  );
};
