"use client";

import React, { useState, useEffect } from "react";
import { navigationLinks } from "@/data/navigation";
import { useAppointment } from "@/context/AppointmentContext";
import { Menu, X, Calendar } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useAppointment();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "w-[92%] max-w-5xl bg-white/75 backdrop-blur-xl shadow-xl shadow-black/5 border border-[#2E4036]/15 text-[#2E4036] py-3.5 px-6 md:px-8"
            : "w-[95%] max-w-6xl bg-black/20 backdrop-blur-sm border border-white/10 text-white py-4 px-6 md:px-10"
        } rounded-full flex justify-between items-center`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-baseline focus:outline-none group">
          <span className="font-outfit font-extrabold text-xl tracking-tight uppercase group-hover:opacity-90 transition-opacity">
            CAMMANN
          </span>
          <span className="font-serif italic font-normal text-xl ml-1 text-[#CC5833]">
            Optik
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-all duration-200 relative hover:text-[#CC5833] ${
                scrolled ? "text-[#1A1A1A]/80 hover:text-[#CC5833]" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openBooking("meister")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              scrolled
                ? "bg-[#CC5833] text-white hover:bg-[#b04a29] shadow-md shadow-[#CC5833]/25"
                : "bg-white text-[#1A1A1A] hover:bg-[#F2F0E9] shadow-md"
            }`}
          >
            <Calendar size={13} className={scrolled ? "text-white" : "text-[#CC5833]"} />
            <span className="hidden sm:inline">Termin vereinbaren</span>
            <span className="sm:hidden">Termin</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full ${
              scrolled ? "text-[#1A1A1A] hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1A1A]/90 backdrop-blur-xl md:hidden flex flex-col justify-center items-center gap-6 p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white"
            aria-label="Menü schließen"
          >
            <X size={24} />
          </button>
          
          <div className="font-outfit font-bold text-2xl tracking-tight text-white mb-4">
            CAMMANN<span className="font-serif italic font-normal text-[#CC5833] ml-1">Optik</span>
          </div>

          <div className="flex flex-col items-center gap-5 text-base font-outfit uppercase tracking-widest text-white/90">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#CC5833] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 w-full max-w-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking("meister");
              }}
              className="w-full py-4 rounded-full bg-[#CC5833] text-white font-semibold text-center shadow-lg"
            >
              Jetzt Meister-Termin anfragen
            </button>
          </div>
        </div>
      )}
    </>
  );
};
