"use client";

import React from "react";
import { teamMembers, trustBadges } from "@/data/team";
import { Award, ShieldCheck, CheckCircle2, UserCheck, Sparkles, HeartHandshake } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export const TeamSection: React.FC = () => {
  const { openBooking } = useAppointment();
  const founder = teamMembers[0];

  return (
    <section id="ueber-uns" className="py-28 px-6 md:px-16 bg-[#161719] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#D13426]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/15 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
            <Award size={13} />
            <span>Persönliche Betreuung</span>
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Das Gesicht hinter Cammann Optik
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
            Bei uns sind Sie keine anonyme Nummer. Ihr Seherlebnis wird von Anfang bis Ende persönlich vom Augenoptikermeister betreut.
          </p>
        </div>

        {/* Founder & Master Profile Card */}
        <div className="bg-white/5 rounded-[3rem] p-8 sm:p-12 border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-12 items-center mb-16">
          
          {/* Photo & Meister Badge */}
          <div className="w-full lg:w-5/12 relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-[4/5] relative border border-white/15 shadow-xl">
              <img
                src={founder.image}
                alt={`${founder.name} - ${founder.role}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161719] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[11px] uppercase tracking-widest bg-[#D13426] px-3 py-1 rounded-full text-white font-bold inline-block mb-1.5 shadow-md">
                  Augenoptikermeister
                </span>
                <h3 className="font-outfit font-extrabold text-2xl text-white">
                  {founder.name}
                </h3>
                <p className="text-xs text-white/70 font-light">
                  {founder.role}
                </p>
              </div>
            </div>

            {/* Meisterbrief floating tag */}
            <div className="absolute -top-4 -right-4 bg-[#161719] border border-[#D13426] p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5">
              <Award size={20} className="text-[#D13426]" />
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-white/50 block">Qualifikation</span>
                <span className="text-xs font-bold text-white font-outfit">Meisterbrief HWK</span>
              </div>
            </div>
          </div>

          {/* Biography & Qualifications */}
          <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-6">
            <div>
              <div className="font-serif italic text-xl sm:text-2xl text-[#FAF8F5] leading-relaxed mb-6 border-l-2 border-[#D13426] pl-4">
                „{founder.quote}“
              </div>

              <h4 className="font-outfit font-bold text-xl text-white mb-2">
                Leidenschaft für Präzisionsoptik & Manufakturdesign
              </h4>
              
              <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed mb-8">
                {founder.bio}
              </p>

              {/* Specializations Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 mb-8">
                {founder.specializations.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 size={16} className="text-[#D13426] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-white/50 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D13426]" />
                <span>100% Persönliche Chefbetreuung</span>
              </div>

              <button
                onClick={() => openBooking("meister")}
                className="luxury-btn bg-[#D13426] hover:bg-[#B5281B] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono shadow-lg cursor-pointer"
              >
                <span>Beratungsgespräch reservieren</span>
              </button>
            </div>
          </div>

        </div>

        {/* 4 Trust Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center flex flex-col justify-center items-center hover:border-[#D13426]/50 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase font-bold text-[#D13426] bg-[#D13426]/10 px-2.5 py-0.5 rounded-full mb-2">
                {badge.badge}
              </span>
              <h4 className="font-outfit font-extrabold text-lg sm:text-xl text-white">
                {badge.title}
              </h4>
              <p className="text-xs text-white/60 font-light mt-0.5">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
