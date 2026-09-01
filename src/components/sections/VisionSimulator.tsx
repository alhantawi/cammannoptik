"use client";

import React, { useState } from "react";
import { Sliders, Eye, CheckCircle2, Sparkles } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const VisionSimulator: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(55);
  const [activeMode, setActiveMode] = useState<"night" | "office" | "contrast">("night");
  const { openBooking } = useAppointment();

  const modeData = {
    night: {
      title: "Nacht- & Dämmerungssehen",
      standardText: "Standard-Glas: Störende Lichtkränze (Halos) um Autoscheinwerfer, unscharfe Straßenränder und Blendung.",
      wavefrontText: "Rodenstock B.I.G. EXACT: Optimierte Pupillen-Lichtbrechung für kristallklare Kontraste und blendfreie Nachtfahrten.",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop"
    },
    office: {
      title: "Bildschirm- & Gleitsichtbereiche",
      standardText: "Standard-Gleitsicht: Enge Sehkorridore, Schaukeleffekte und Zwangshaltungen des Nackens.",
      wavefrontText: "Biometrische Freiform: Maximale Sehbreite für Monitor, Notizen und Raum ohne spürbare Randverzerrungen.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop"
    },
    contrast: {
      title: "Detail- & Kontrastschärfe",
      standardText: "Standard-Korrektur: Flauere Konturen und schwächere Farbtiefe bei wechselndem Licht.",
      wavefrontText: "Biometrische Präzision: 100% Ausnutzung Ihres Sehpotenzials und spürbar lebendigere Farbbrillanz.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
    }
  };

  const currentMode = modeData[activeMode];

  return (
    <section id="vision-lab" className="py-28 px-6 md:px-16 bg-[#161719] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#D13426]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/15 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
              <Sparkles size={13} />
              <span>Biometrischer Sehtest-Simulator</span>
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-3">
              Standard-Glas vs. <span className="font-serif italic text-[#D13426] font-normal">Biometrische Gläser</span>
            </h2>
            <p className="text-white/70 max-w-xl text-base font-light">
              Verschieben Sie den Regler und sehen Sie den Unterschied zwischen statischen Standardgläsern und Rodenstock DNEye® Biometrie-Gläsern.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 shrink-0">
            {(["night", "office", "contrast"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeMode === mode
                    ? "bg-[#D13426] text-white shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {mode === "night" && "Nachtfahrt"}
                {mode === "office" && "Bildschirm"}
                {mode === "contrast" && "Kontrast"}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="relative w-full h-[440px] md:h-[520px] rounded-[3rem] overflow-hidden border border-white/15 shadow-2xl select-none group">
          
          {/* Background image (Biometric HD) */}
          <div className="absolute inset-0">
            <img
              src={currentMode.image}
              alt="Rodenstock Biometric Glass View"
              className="w-full h-full object-cover filter contrast-110 saturate-105"
            />
            <div className="absolute top-6 right-8 bg-[#161719]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D13426]/40 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
              <Sparkles size={14} className="text-[#D13426]" />
              <span>Rodenstock B.I.G. EXACT™ (Biometrisch)</span>
            </div>
          </div>

          {/* Foreground blurred overlay (Standard Optical Glass) */}
          <div
            className="absolute inset-0 overflow-hidden border-r-2 border-white"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="w-[100vw] h-[440px] md:h-[520px] relative max-w-7xl">
              <img
                src={currentMode.image}
                alt="Standard Optical Glass View"
                className="w-full h-full object-cover filter blur-[3.5px] brightness-90 contrast-90"
              />
              <div className="absolute top-6 left-8 bg-[#161719]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2 shadow-lg">
                <Sliders size={14} className="text-[#D13426]" />
                <span>Herkömmliche Standard-Gläser</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center -ml-0.5"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-[#161719] flex items-center justify-center shadow-2xl border-2 border-[#D13426] -ml-5">
              <Eye size={18} className="text-[#D13426]" />
            </div>
          </div>

          {/* Slider input for touch/mouse */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            aria-label="Glas-Vergleichsregler"
          />
        </div>

        {/* Comparison Details Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/50 mb-2">
              Konventionelle Brillengläser
            </h4>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              {currentMode.standardText}
            </p>
          </div>

          <div className="bg-[#D13426]/15 rounded-2xl p-6 border border-[#D13426]/40 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#D13426] font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 size={14} />
                Cammann Biometrie-Gläser
              </h4>
              <p className="text-sm text-white/95 font-light leading-relaxed">
                {currentMode.wavefrontText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => openBooking("meister")}
                className="text-xs font-mono uppercase tracking-wider text-[#D13426] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Eigenes Sehprofil im Studio ermitteln</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
