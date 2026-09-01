"use client";

import React, { useState, useEffect, useRef } from "react";
import { initialDiagnosticItems, telemetryPhrases } from "@/data/telemetry";
import { useAppointment } from "@/context/AppointmentContext";
import { Clock, Activity, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

export const FeaturesMicroUI: React.FC = () => {
  const { openBooking } = useAppointment();

  // Card 1: Diagnostic Shuffler State
  const [shufflerData, setShufflerData] = useState(initialDiagnosticItems.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerData((prev) => {
        const next = [...prev];
        const last = next.pop()!;
        next.unshift(last);
        return next;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Card 2: Telemetry Typewriter
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = telemetryPhrases[currentPhraseIndex];

      if (!isDeleting && currentCharIndex <= currentPhrase.length) {
        setTypewriterText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex++;
        timeout = setTimeout(type, 45);
      } else if (isDeleting && currentCharIndex >= 0) {
        setTypewriterText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex--;
        timeout = setTimeout(type, 25);
      } else if (currentCharIndex > currentPhrase.length) {
        isDeleting = true;
        timeout = setTimeout(type, 2200); // pause when completed
      } else if (currentCharIndex < 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % telemetryPhrases.length;
        timeout = setTimeout(type, 400); // pause before next
      }
    };

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Heights for the visualizer
  const barHeights = useRef([45, 82, 35, 95, 60, 40, 75, 88, 55, 70, 90, 65]);

  // Card 3: Simulated Cursor GSAP Animation
  const cursorRef = useRef<SVGSVGElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cursorRef.current) return;

      gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
        .to(cursorRef.current, { x: 100, y: 70, duration: 1.4, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".calendar-target-day", { backgroundColor: "#2E4036", color: "#F2F0E9", duration: 0.2 }, "-=0.1")
        .to(cursorRef.current, { x: 190, y: 140, duration: 1, ease: "power2.inOut", delay: 0.4 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".calendar-save-btn", { backgroundColor: "#CC5833", scale: 0.95, duration: 0.2, yoyo: true, repeat: 1 }, "-=0.1")
        .to(cursorRef.current, { opacity: 0, duration: 0.4 })
        .set(cursorRef.current, { x: 0, y: 0, opacity: 1 })
        .set(".calendar-target-day", { backgroundColor: "#F2F0E9", color: "#1A1A1A" });
    }, card3Ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-28 px-6 md:px-16 bg-[#F2F0E9] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] bg-[#CC5833]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Optometrische Spitzentechnologie
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-[#1A1A1A] leading-tight">
            Mehr als nur eine Brille. <br />
            <span className="font-serif italic text-[#2E4036] font-normal">
              Ihr individueller Sehkomfort im Fokus.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
            Jeder Mensch sieht die Welt mit anderen Augen. Deshalb beginnt bei uns gutes Sehen mit Zuhören. Wir verbinden modernste Messtechnik mit handwerklicher Meisterqualität.
          </p>
        </div>

        {/* 3 Interactive Micro-UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Diagnostic Shuffler */}
          <div className="bg-white rounded-[2.5rem] p-7 md:p-8 h-88 relative overflow-hidden shadow-sm border border-[#2E4036]/10 flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2E4036]/70 flex items-center gap-2">
                  <Activity size={14} className="text-[#CC5833]" />
                  Sehprofil Analyse
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E4036] animate-pulse" />
              </div>
              <p className="text-xs text-[#1A1A1A]/60 mb-6">
                Echtzeit-Parameter der 3D-Augenglasbestimmung:
              </p>
            </div>

            {/* Stacked Interactive Cards */}
            <div className="relative h-44 w-full">
              {shufflerData.map((data, i) => (
                <div
                  key={data.label}
                  className="absolute w-full bg-[#F2F0E9] rounded-2xl p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-[#2E4036]/10 shadow-sm"
                  style={{
                    top: `${i * 1.35}rem`,
                    transform: `scale(${1 - i * 0.05})`,
                    opacity: 1 - i * 0.18,
                    zIndex: 4 - i
                  }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-xs font-semibold text-[#1A1A1A]">{data.label}</p>
                    <span className="font-mono text-[10px] uppercase font-bold text-[#CC5833] bg-[#CC5833]/10 px-2 py-0.5 rounded-full">
                      {data.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-mono text-2xl font-bold text-[#2E4036]">
                      {data.value}
                    </span>
                    <span className="text-[11px] font-mono text-[#1A1A1A]/50">
                      Score {data.score}/100
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter & Visualizer */}
          <div className="bg-[#1A1A1A] rounded-[2.5rem] p-7 md:p-8 h-88 relative overflow-hidden shadow-xl text-white flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                  Live Messdaten
                </span>
                <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[barPulse_1s_infinite_alternate]" />
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider">
                    ONLINE
                  </span>
                </div>
              </div>

              <div className="font-mono text-xs leading-relaxed text-[#F2F0E9]/85 border-l-2 border-[#2E4036] pl-3.5 py-1 space-y-1.5">
                <p className="opacity-40">{">"} 3D-Aberrometer kalibriert</p>
                <p className="opacity-40">{">"} Lade Brechungs-Profile...</p>
                <p className="text-[#CC5833] font-bold min-h-[40px]">
                  {">"} {typewriterText}
                  <span className="inline-block w-2 h-3.5 bg-[#CC5833] ml-1 align-middle animate-[barPulse_0.5s_infinite_alternate]" />
                </p>
              </div>
            </div>

            {/* Abstract visualizer equalizer */}
            <div className="relative w-full h-20 bg-gradient-to-t from-[#2E4036]/30 to-transparent flex items-end gap-1.5 px-2 pb-2 rounded-xl">
              {barHeights.current.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#2E4036] rounded-t-sm origin-bottom transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    animation: `barPulse ${0.8 + i * 0.1}s infinite alternate ease-in-out`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card 3: Adaptive Calendar Booking Micro-UI */}
          <div
            ref={card3Ref}
            className="bg-white rounded-[2.5rem] p-7 md:p-8 h-88 relative overflow-hidden shadow-sm border border-[#2E4036]/10 flex flex-col justify-between group hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => openBooking("basis")}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2E4036]/70 flex items-center gap-2">
                  <Clock size={13} className="text-[#CC5833]" />
                  Terminplanung
                </span>
                <span className="font-mono text-[10px] uppercase text-[#CC5833] font-semibold bg-[#CC5833]/10 px-2 py-0.5 rounded-full">
                  Freie Slots
                </span>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 mb-3">
                Wählen Sie Ihren Wunschtermin ohne Wartezeit:
              </p>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1.5 my-1">
              {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d, i) => (
                <div key={i} className="text-center font-mono text-[10px] text-gray-400 font-semibold">
                  {d}
                </div>
              ))}
              {[...Array(14)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold bg-[#F2F0E9] text-[#1A1A1A] transition-colors ${
                    i === 10 ? "calendar-target-day" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] font-mono text-[#2E4036]">Klicken zum Reservieren</span>
              <button className="calendar-save-btn px-4 py-2 bg-[#1A1A1A] text-white text-[11px] font-mono uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                <span>Termin wählen</span>
                <CheckCircle2 size={12} className="text-[#CC5833]" />
              </button>
            </div>

            {/* Simulated Animated Cursor */}
            <svg
              ref={cursorRef}
              className="absolute top-12 left-10 w-5 h-5 z-10 pointer-events-none drop-shadow-md"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.72 21.36L11.44 17.15C11.66 16.96 11.95 16.85 12.25 16.85H18.5C19.16 16.85 19.53 16.08 19.11 15.56L5.5 3.21Z"
                fill="#1A1A1A"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};
