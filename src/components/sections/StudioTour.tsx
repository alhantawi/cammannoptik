"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const StudioTour: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<0 | 1 | 2>(0);
  const { openBooking } = useAppointment();

  const studioViews = [
    {
      id: 0,
      title: "Das Meister-Studio & Markenwelten",
      subtitle: "Elegante Raumarchitektur für entspannte Sehanalysen",
      image: "/1.jpeg",
      desc: "Unser Studio verbindet moderne Architektur mit gemütlicher Wohnfühlatmosphäre. Entdecken Sie handgefertigte Brillenunikate von Lunor, Escada, Maui Jim und Rodenstock an maßgefertigten Präsentationswänden mit stimmungsvoller Hintergrundbeleuchtung.",
      highlights: [
        "Integrierter DNEye® 3D-Messarbeitsplatz",
        "Eigene Lunor- & Manufaktur-Präsentation",
        "Ruhige Beratungstische mit ergonomischen Komfortsesseln"
      ]
    },
    {
      id: 1,
      title: "Der persönliche Beratungsplatz",
      subtitle: "Exklusivzeit für Ihre individuellen Sehwünsche",
      image: "/2.jpeg",
      desc: "Gutes Sehen beginnt mit echtem Zuhören. An unseren Beratungstischen nehmen wir uns Zeit für Ihre Sehanforderungen – ob am PC-Arbeitsplatz, beim Autofahren oder im Alltag.",
      highlights: [
        "Digitale Video-Zentrierung auf den Zehntelmillimeter",
        "Farb- und Stilberatung abgestimmt auf Ihre Gesichtsform",
        "Ausführliche Erklärung aller Glasoptionen ohne Fachchinesisch"
      ]
    },
    {
      id: 2,
      title: "Unser Ladenlokal & Schaufenster",
      subtitle: "Ihr Meisterbetrieb im Herzen von Hannover",
      image: "/3.jpeg",
      desc: "Zentral gelegen und leicht erreichbar. Unsere Schaufenster geben Ihnen stets einen Einblick in die neuesten Kollektionen internationaler Brillenmanufakturen und aktuelle Trends der Haute Couture Eyewear.",
      highlights: [
        "Offiziell zertifizierter Rodenstock Biometrie-Experte",
        "Saisonal wechselnde Kollektions-Highlights",
        "Barrierefreier Zugang und reservierte Parkmöglichkeiten"
      ]
    }
  ];

  const current = studioViews[activePhoto];

  return (
    <section id="studio-tour" className="py-28 px-6 md:px-16 bg-[#FAF8F5] text-[#161719] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
              <Sparkles size={13} />
              <span>Authentische Einblicke</span>
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#161719]">
              Willkommen bei <span className="font-serif italic font-normal text-[#D13426]">Cammann Optik</span>
            </h2>
            <p className="text-[#161719]/70 max-w-xl text-base font-light mt-2">
              Erleben Sie unser Fachgeschäft in Hannover. Hier verschmelzen meisterliche Handwerkskunst, High-End Messtechnik und familiäre Gastfreundschaft.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 bg-[#ECE7DF] p-1.5 rounded-2xl border border-[#161719]/5">
            {studioViews.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActivePhoto(idx as 0 | 1 | 2)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activePhoto === idx
                    ? "bg-[#161719] text-white shadow-md"
                    : "text-[#161719]/70 hover:text-[#161719]"
                }`}
              >
                {idx === 0 && "1. Das Studio"}
                {idx === 1 && "2. Beratung"}
                {idx === 2 && "3. Eingang & Fassade"}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Showcase Card */}
        <div className="bg-white rounded-[3rem] p-6 sm:p-10 md:p-12 shadow-xl border border-[#161719]/5 flex flex-col lg:flex-row gap-10 items-center">
          
          {/* Real Photo */}
          <div className="w-full lg:w-3/5 h-[380px] sm:h-[480px] rounded-[2.5rem] overflow-hidden relative group shadow-lg">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest bg-[#D13426] px-3 py-1 rounded-full text-white font-bold inline-block mb-1.5 shadow-md">
                  Original Cammann Optik Studio
                </span>
                <p className="font-outfit font-bold text-xl sm:text-2xl drop-shadow-md">
                  {current.title}
                </p>
              </div>
            </div>
          </div>

          {/* Content & Highlights */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] font-semibold">
                {current.subtitle}
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#161719] mt-2 mb-4 leading-tight">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#161719]/75 font-light leading-relaxed mb-6">
                {current.desc}
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#161719]/90 font-medium">
                    <CheckCircle size={17} className="text-[#D13426] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#161719]/10 flex items-center justify-between">
              <button
                onClick={() => openBooking("meister")}
                className="luxury-btn bg-[#161719] hover:bg-[#232529] text-white px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Termin vor Ort vereinbaren</span>
                <ArrowRight size={14} />
              </button>

              <span className="font-mono text-xs text-[#161719]/50">
                0{activePhoto + 1} / 03
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
