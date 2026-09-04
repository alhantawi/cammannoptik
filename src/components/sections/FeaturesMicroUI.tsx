"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAppointment } from "@/context/AppointmentContext";
import { Clock, Activity, CheckCircle2, Award } from "lucide-react";
import gsap from "gsap";

const BIOMETRIC_PHRASES = [
  "DNEye® Scanner erfasst die individuelle Anatomie Ihrer Augen...",
  "Berechne individuelles Rodenstock B.I.G. EXACT™ Glasprofil...",
  "Optimiere Freiform-Gleitsichtkanal für entspanntes Sehen...",
  "Sehanalyse abgeschlossen: Höchster Kontrast bei Tag und Nacht."
];

const BAR_HEIGHTS = [45, 85, 38, 92, 65, 42, 78, 88, 55, 75, 95, 68];

export const FeaturesMicroUI: React.FC = () => {
  const { openBooking } = useAppointment();

  // Card 1: Real Biometric Parameter Shuffler
  const [shufflerData, setShufflerData] = useState([
    { label: "Messgenauigkeit", value: "0,01 dpt", status: "DNEye® Exakt", score: 99 },
    { label: "Tag- & Nachtsehen", value: "Pupillen-Profil", status: "Optimiert", score: 98 },
    { label: "Beidäugiges Sehen (MKH)", value: "Binokular", status: "Harmonisch", score: 97 },
    { label: "Hornhaut-Geometrie", value: "3D-Erfasst", status: "Maßgefertigt", score: 99 }
  ]);

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

  // Card 2: Biometric Telemetry Typewriter
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = BIOMETRIC_PHRASES[currentPhraseIndex];

      if (!isDeleting && currentCharIndex <= currentPhrase.length) {
        setTypewriterText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex++;
        timeout = setTimeout(type, 40);
      } else if (isDeleting && currentCharIndex >= 0) {
        setTypewriterText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex--;
        timeout = setTimeout(type, 20);
      } else if (currentCharIndex > currentPhrase.length) {
        isDeleting = true;
        timeout = setTimeout(type, 2200);
      } else if (currentCharIndex < 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % BIOMETRIC_PHRASES.length;
        timeout = setTimeout(type, 400);
      }
    };

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Card 3: Simulated Cursor GSAP Animation
  const cursorRef = useRef<SVGSVGElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cursorRef.current) return;

      gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
        .to(cursorRef.current, { x: 95, y: 65, duration: 1.4, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".calendar-target-day", { backgroundColor: "#D13426", color: "#FFFFFF", duration: 0.2 }, "-=0.1")
        .to(cursorRef.current, { x: 185, y: 135, duration: 1, ease: "power2.inOut", delay: 0.4 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".calendar-save-btn", { backgroundColor: "#D13426", scale: 0.95, duration: 0.2, yoyo: true, repeat: 1 }, "-=0.1")
        .to(cursorRef.current, { opacity: 0, duration: 0.4 })
        .set(cursorRef.current, { x: 0, y: 0, opacity: 1 })
        .set(".calendar-target-day", { backgroundColor: "#FAF8F5", color: "#161719" });
    }, card3Ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#FAF8F5] text-[#161719] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <Award size={13} />
            <span>Biometrische Augenoptik</span>
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Präzise Sehanalyse statt <br />
            <span className="font-serif italic font-normal text-[#D13426]">
              pauschaler Standardwerte.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#161719]/70 leading-relaxed font-light">
            Weil jedes Auge so einzigartig ist wie ein Fingerabdruck, vermessen wir Ihre Augen mit dem Rodenstock DNEye® Scanner nicht nur statisch, sondern erfassen relevante biometrische Parameter für maßgefertigten Sehkomfort.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2.5rem] p-7 md:p-8 h-88 relative overflow-hidden shadow-sm border border-[#161719]/10 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/70 flex items-center gap-2">
                  <Activity size={14} className="text-[#D13426]" />
                  Biometrie Profil
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D13426] animate-pulse" />
              </div>
              <p className="text-xs text-[#161719]/60 mb-6">
                Rodenstock DNEye® Analyse-Parameter:
              </p>
            </div>

            <div className="relative h-44 w-full">
              {shufflerData.map((data, i) => (
                <div
                  key={data.label}
                  className="absolute w-full bg-[#FAF8F5] rounded-2xl p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-[#161719]/10 shadow-sm"
                  style={{
                    top: `${i * 0.9}rem`,
                    transform: `scale(${1 - i * 0.04})`,
                    opacity: 1 - i * 0.16,
                    zIndex: 4 - i,
                    pointerEvents: i === 0 ? "auto" : "none"
                  }}
                >
                  <div className={`transition-opacity duration-300 ${i === 0 ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex justify-between items-center mb-1.5">
                      <p className="text-xs font-semibold text-[#161719]">{data.label}</p>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#D13426] bg-[#D13426]/10 px-2 py-0.5 rounded-full">
                        {data.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-mono text-xl font-bold text-[#161719]">
                        {data.value}
                      </span>
                      <span className="text-[11px] font-mono text-[#161719]/60">
                        Biometrisch exakt
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161719] rounded-[2.5rem] p-7 md:p-8 h-88 relative overflow-hidden shadow-xl text-white flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                  Rodenstock DNEye® Messprotokoll
                </span>
                <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider">
                    CALIBRATED
                  </span>
                </div>
              </div>

              <div className="font-mono text-xs leading-relaxed text-[#FAF8F5]/85 border-l-2 border-[#D13426] pl-3.5 py-1 space-y-1.5">
                <p className="opacity-40">{">"} 3D-Aberrometer initialisiert</p>
                <p className="opacity-40">{">"} Lade biometrisches Augenmodell...</p>
                <p className="text-[#D13426] font-bold min-h-[40px]">
                  {">"} {typewriterText}
                  <span className="inline-block w-2 h-3.5 bg-[#D13426] ml-1 align-middle animate-pulse" />
                </p>
              </div>
            </div>

            <div className="relative w-full h-20 bg-gradient-to-t from-white/5 to-transparent flex items-end gap-1.5 px-2 pb-2 rounded-xl">
              {BAR_HEIGHTS.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#D13426] rounded-t-sm origin-bottom"
                  style={{
                    height: `${height}%`,
                    animation: `barPulse ${0.8 + i * 0.1}s infinite alternate ease-in-out`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className="bg-white rounded-[2.5rem] p-7 md:p-8 h-88 relative overflow-hidden shadow-sm border border-[#161719]/10 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => openBooking("meister")}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/70 flex items-center gap-2">
                  <Clock size={13} className="text-[#D13426]" />
                  Meistertermin wählen
                </span>
                <span className="font-mono text-[10px] uppercase text-[#D13426] font-semibold bg-[#D13426]/10 px-2 py-0.5 rounded-full">
                  Exklusiv
                </span>
              </div>
              <p className="text-xs text-[#161719]/60 mb-3">
                Wunschzeit für Ihre persönliche Beratung reservieren:
              </p>
            </div>

            <div className="grid grid-cols-7 gap-1.5 my-1">
              {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d, i) => (
                <div key={i} className="text-center font-mono text-[10px] text-gray-400 font-semibold">
                  {d}
                </div>
              ))}
              {[...Array(14)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold bg-[#FAF8F5] text-[#161719] transition-colors ${
                    i === 10 ? "calendar-target-day" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] font-mono text-[#161719]/60">Keine Wartezeiten</span>
              <button className="calendar-save-btn px-4 py-2 bg-[#161719] text-white text-[11px] font-mono uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                <span>Termin wählen</span>
                <CheckCircle2 size={12} className="text-[#D13426]" />
              </button>
            </div>

            <svg
              ref={cursorRef}
              className="absolute top-12 left-10 w-5 h-5 z-10 pointer-events-none drop-shadow-md"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.72 21.36L11.44 17.15C11.66 16.96 11.95 16.85 12.25 16.85H18.5C19.16 16.85 19.53 16.08 19.11 15.56L5.5 3.21Z"
                fill="#161719"
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
