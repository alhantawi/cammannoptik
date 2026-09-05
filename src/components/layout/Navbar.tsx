"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationLinks, contactInfo } from "@/data/navigation";
import { useAppointment } from "@/context/AppointmentContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Calendar, Phone, Sun, Moon } from "lucide-react";
import { CammannLogo } from "@/components/ui/CammannLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useAppointment();
  const { theme, toggleTheme } = useTheme();

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
              ? "bg-[#FAF8F5]/90 dark:bg-[#161719]/90 backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50 border border-[#161719]/10 dark:border-white/15 py-2.5 px-4 sm:px-6"
              : "bg-[#FAF8F5]/80 dark:bg-[#161719]/70 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/30 border border-[#161719]/10 dark:border-white/10 py-3 px-4 sm:px-7"
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/"
              className="flex items-center focus:outline-none group py-0.5"
              aria-label="Cammann Optik Startseite"
            >
              <CammannLogo className="h-6 sm:h-7.5 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-[#161719]/75 dark:text-white/80 hover:text-[#161719] dark:hover:text-white transition-colors py-1 relative group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D13426] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer shrink-0 group bg-black/5 hover:bg-black/10 border-black/10 text-[#161719] dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/15 dark:text-amber-300 shadow-sm"
              aria-label={theme === "dark" ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"}
              title={theme === "dark" ? "Heller Modus" : "Dunkler Modus"}
            >
              {theme === "dark" ? (
                <Sun size={15} className="transition-transform duration-500 group-hover:rotate-90 text-amber-300" />
              ) : (
                <Moon size={15} className="transition-transform duration-500 group-hover:-rotate-12 text-[#161719]" />
              )}
            </button>

            {/* Phone Link - Full on XL screens, Icon on sm/md */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-[#161719]/75 dark:text-white/75 hover:text-[#161719] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
              title="Jetzt anrufen"
            >
              <Phone size={13} className="text-[#D13426] shrink-0" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden sm:inline-flex xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/15 text-[#161719] dark:text-white items-center justify-center border border-black/10 dark:border-white/10 transition-colors shrink-0"
              title={`Anrufen: ${contactInfo.phoneDisplay}`}
            >
              <Phone size={14} className="text-[#D13426]" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => openBooking("meister")}
              className="luxury-btn bg-gradient-to-r from-[#D62B28] to-[#B51E2B] text-white px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#D13426]/30 hover:shadow-xl hover:shadow-[#D13426]/40 transition-all cursor-pointer shrink-0"
            >
              <Calendar size={14} className="shrink-0" />
              <span className="hidden xs:inline">Termin buchen</span>
              <span className="xs:hidden">Termin</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#161719]/90 dark:text-white/90 hover:text-[#161719] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5]/98 dark:bg-[#161719]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-3 text-[#161719]/80 dark:text-white/80 hover:text-[#161719] dark:hover:text-white"
            aria-label="Menü schließen"
          >
            <X size={26} />
          </button>

          {/* Centered Logo in Drawer */}
          <div className="mb-6 flex items-center justify-center">
            <CammannLogo className="h-9 w-auto" />
          </div>

          {/* Theme Switcher inside Mobile Drawer */}
          <button
            onClick={toggleTheme}
            className="mb-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono tracking-wider uppercase text-[#161719] dark:text-white transition-all shadow-sm"
          >
            {theme === "dark" ? (
              <>
                <Sun size={15} className="text-amber-300" />
                <span>Heller Modus</span>
              </>
            ) : (
              <>
                <Moon size={15} className="text-[#161719]" />
                <span>Dunkler Modus</span>
              </>
            )}
          </button>

          {/* Links List */}
          <div className="flex flex-col items-center gap-5 text-lg font-outfit uppercase tracking-widest text-[#161719]/90 dark:text-white/90">
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
          <div className="mt-8 w-full max-w-xs space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking("meister");
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#D62B28] to-[#B51E2B] text-white font-semibold text-center shadow-xl uppercase text-xs tracking-wider cursor-pointer"
            >
              Meister-Termin anfragen
            </button>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-black/5 dark:bg-white/10 text-[#161719] dark:text-white text-center text-xs font-mono"
            >
              <Phone size={13} className="text-[#D13426]" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
