"use client";

import React, { useState, useEffect } from "react";
import { navigationLinks, contactInfo } from "@/data/navigation";
import { useAppointment } from "@/context/AppointmentContext";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { CammannLogo } from "@/components/ui/CammannLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useAppointment();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 ease-out rounded-full flex items-center justify-between gap-3 sm:gap-6 ${
            scrolled
              ? "bg-[#161719]/90 backdrop-blur-2xl shadow-2xl shadow-black/50 border border-white/15 py-2.5 px-4 sm:px-6"
              : "bg-[#161719]/70 backdrop-blur-xl shadow-xl shadow-black/30 border border-white/10 py-3 px-4 sm:px-7"
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#"
              className="flex items-center focus:outline-none group py-0.5"
              aria-label="Cammann Optik Startseite"
            >
              <CammannLogo className="h-6 sm:h-7.5 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-white/80 hover:text-white transition-colors py-1 relative group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D13426] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Link - Full on XL screens, Icon on sm/md */}
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-white/75 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              title="Jetzt anrufen"
            >
              <Phone size={13} className="text-[#D13426] shrink-0" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex xl:hidden w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white items-center justify-center border border-white/10 transition-colors shrink-0"
              title={`Anrufen: ${contactInfo.phone}`}
            >
              <Phone size={14} className="text-[#D13426]" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => openBooking("meister")}
              className="luxury-btn bg-gradient-to-r from-[#D62B28] to-[#B51E2B] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#D13426]/30 hover:shadow-xl hover:shadow-[#D13426]/40 transition-all cursor-pointer shrink-0"
            >
              <Calendar size={14} className="shrink-0" />
              <span>Termin buchen</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#161719]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white"
            aria-label="Menü schließen"
          >
            <X size={26} />
          </button>

          {/* Centered Logo in Drawer */}
          <div className="mb-8 flex items-center justify-center">
            <CammannLogo className="h-9 w-auto" />
          </div>

          {/* Links List */}
          <div className="flex flex-col items-center gap-5 text-lg font-outfit uppercase tracking-widest text-white/90">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#D13426] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom Actions inside Drawer */}
          <div className="mt-10 w-full max-w-xs space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking("meister");
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#D62B28] to-[#B51E2B] text-white font-semibold text-center shadow-xl uppercase text-xs tracking-wider"
            >
              Meister-Termin anfragen
            </button>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 text-white text-center text-xs font-mono"
            >
              <Phone size={13} className="text-[#D13426]" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
