"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import { CammannLogo } from "@/components/ui/CammannLogo";
import { useAppointment } from "@/context/AppointmentContext";
import { contactInfo } from "@/data/navigation";

export const LegalHeader: React.FC = () => {
  const { openBooking } = useAppointment();

  return (
    <header className="sticky top-0 z-50 bg-[#161719]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Back Link & Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-full border border-white/10"
            title="Zurück zur Startseite"
          >
            <ArrowLeft size={14} className="text-[#D13426]" />
            <span className="hidden sm:inline">Zur Startseite</span>
            <span className="sm:hidden">Zurück</span>
          </Link>

          <Link href="/" className="flex items-center">
            <CammannLogo className="h-6 sm:h-7 w-auto" />
          </Link>
        </div>

        {/* Right: Phone & Appointment CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
          >
            <Phone size={13} className="text-[#D13426]" />
            <span>{contactInfo.phoneDisplay}</span>
          </a>

          <button
            onClick={() => openBooking("meister")}
            className="luxury-btn bg-[#D13426] hover:bg-[#B5281B] text-white px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer transition-all"
          >
            <Calendar size={13} />
            <span>Termin buchen</span>
          </button>
        </div>
      </div>
    </header>
  );
};
