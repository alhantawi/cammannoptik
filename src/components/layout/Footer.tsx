"use client";

import React from "react";
import { contactInfo } from "@/data/navigation";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const Footer: React.FC = () => {
  const { openBooking } = useAppointment();

  return (
    <footer id="kontakt" className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E4036]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Call to Action Banner inside footer */}
        <div className="bg-gradient-to-r from-[#2E4036] to-[#1E2B24] rounded-[2.5rem] p-8 md:p-12 mb-20 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-2xl">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CC5833] bg-[#CC5833]/15 px-3 py-1 rounded-full inline-block mb-3">
              Individuelle Beratung
            </span>
            <h3 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-2">
              Bereit für Ihr neues Seherlebnis?
            </h3>
            <p className="text-white/70 max-w-xl text-sm md:text-base font-light">
              Vereinbaren Sie Ihren persönlichen Meistertermin und erleben Sie optometrische Präzision in ruhiger Atmosphäre.
            </p>
          </div>
          <button
            onClick={() => openBooking("meister")}
            className="magnetic-btn px-8 py-4 bg-[#CC5833] text-white font-semibold rounded-full flex items-center gap-3 shrink-0 shadow-xl shadow-[#CC5833]/30 hover:bg-[#b04a29] cursor-pointer"
          >
            <span>Jetzt Termin sichern</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2">
            <div className="font-outfit font-extrabold text-3xl tracking-tight mb-4 flex items-baseline">
              {contactInfo.brandName}
              <span className="font-serif italic font-normal text-[#CC5833] ml-1">
                {contactInfo.brandSuffix}
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-md font-light leading-relaxed text-sm">
              Wir verbinden modernste 3D-Wellenfront-Messtechnik mit traditioneller optischer Handwerkskunst für ein Seherlebnis, das optimal auf Ihre Lebensgewohnheiten abgestimmt ist.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 font-mono text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-[barPulse_1s_infinite_alternate]" />
              <span>{contactInfo.status}</span>
            </div>
          </div>

          {/* Col 2: Contact Details */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span>Kontakt</span>
            </h4>
            <ul className="space-y-4 text-white/75 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#CC5833] group-hover:bg-[#CC5833] group-hover:text-white transition-colors">
                    <Phone size={14} />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#CC5833] group-hover:bg-[#CC5833] group-hover:text-white transition-colors">
                    <Mail size={14} />
                  </div>
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#CC5833] shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Opening Hours */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white flex items-center gap-2">
              <Clock size={16} className="text-[#CC5833]" />
              <span>Öffnungszeiten</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.openingHours.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex justify-between border-b border-white/10 pb-2 ${
                    item.days.includes("Sonntag") ? "text-white/40" : "text-white/75"
                  }`}
                >
                  <span>{item.days}</span>
                  <span className="font-mono text-xs">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50 mt-4 italic">
              Individuelle Meister-Termine auch außerhalb der Öffnungszeiten möglich.
            </p>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 border-t border-white/10 pt-8 gap-4">
          <p>© {new Date().getFullYear()} Cammann Optik Hannover. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie-Einstellungen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
