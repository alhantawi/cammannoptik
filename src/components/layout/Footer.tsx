"use client";

import React from "react";
import { contactInfo } from "@/data/navigation";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { CammannLogo } from "@/components/ui/CammannLogo";

export const Footer: React.FC = () => {
  const { openBooking } = useAppointment();

  return (
    <footer id="kontakt" className="bg-[#161719] text-white pt-20 pb-12 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D13426]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top Booking Banner */}
        <div className="bg-gradient-to-r from-[#232529] to-[#1A1B1E] rounded-[2.5rem] p-8 md:p-12 mb-20 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-2xl">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/15 px-3 py-1 rounded-full inline-block mb-3 font-bold">
              Terminvereinbarung
            </span>
            <h3 className="font-outfit text-3xl md:text-4xl font-black text-white mb-2">
              Bereit für Ihr neues Seherlebnis?
            </h3>
            <p className="text-white/70 max-w-xl text-sm md:text-base font-light">
              Vereinbaren Sie Ihren persönlichen Termin beim Augenoptikermeister im Cammann Studio Hannover.
            </p>
          </div>
          <button
            onClick={() => openBooking("meister")}
            className="luxury-btn px-8 py-4 bg-[#D13426] text-white font-semibold rounded-full flex items-center gap-3 shrink-0 shadow-xl shadow-[#D13426]/30 hover:bg-[#B5281B] cursor-pointer uppercase text-xs tracking-wider"
          >
            <span>Jetzt Termin sichern</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <CammannLogo className="h-8 sm:h-9 w-auto" />
            </div>

            <p className="text-white/65 mb-6 max-w-md font-light leading-relaxed text-sm">
              Ihr Meisterbetrieb für biometrische 3D-Augenglasbestimmung, handgefertigte Designerfassungen von Lunor, Escada, Maui Jim, Morel und persönliche augenoptische Beratung in Hannover.
            </p>

            <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 font-mono text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Rodenstock DNEye® Mess-System Aktiv</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4 text-white/75 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D13426] group-hover:bg-[#D13426] group-hover:text-white transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="font-mono text-xs">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D13426] group-hover:bg-[#D13426] group-hover:text-white transition-colors">
                    <Mail size={14} />
                  </div>
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.945.555 3.766 1.516 5.312L2 22l4.828-1.5c1.484.844 3.203 1.344 5.203 1.344 5.516 0 10-4.484 10-10S17.547 2 12.031 2zm0 18.281c-1.75 0-3.375-.484-4.781-1.328l-.344-.203-2.859.89.906-2.781-.219-.36c-.953-1.469-1.469-3.172-1.469-4.969 0-4.562 3.719-8.281 8.281-8.281 4.562 0 8.281 3.719 8.281 8.281 0 4.562-3.719 8.281-8.281 8.281zm4.531-6.203c-.25-.125-1.469-.719-1.703-.797-.234-.094-.406-.141-.578.125-.172.266-.672.797-.828.969-.156.172-.313.187-.563.063-.25-.125-1.047-.391-2-1.234-.734-.656-1.234-1.469-1.375-1.719-.141-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.234.25-.391.078-.156.031-.313-.016-.438-.047-.125-.578-1.391-.797-1.906-.219-.516-.438-.438-.578-.438h-.5c-.172 0-.453.063-.688.313-.234.25-.906.89-.906 2.172 0 1.281.938 2.516 1.063 2.688.125.172 1.844 2.812 4.469 3.938.625.266 1.109.438 1.484.563.625.203 1.203.172 1.656.109.516-.078 1.469-.609 1.672-1.203.203-.594.203-1.094.141-1.203-.063-.109-.234-.172-.484-.297z" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-[#25D366]">WhatsApp Chat</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D13426] shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span className="text-xs leading-relaxed">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6 text-white flex items-center gap-2">
              <Clock size={16} className="text-[#D13426]" />
              <span>Öffnungszeiten</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.openingHours.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex justify-between border-b border-white/10 pb-2 text-xs ${
                    item.days.includes("Sonntag") ? "text-white/40" : "text-white/80"
                  }`}
                >
                  <span>{item.days}</span>
                  <span className="font-mono">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-white/50 mt-4 italic">
              Termine nach persönlicher Vereinbarung auch außerhalb der regulären Zeiten möglich.
            </p>
          </div>

        </div>

        {/* Bottom */}
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
              Barrierefreiheit
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
