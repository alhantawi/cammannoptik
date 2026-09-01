"use client";

import React, { useState, useEffect } from "react";
import { useAppointment } from "@/context/AppointmentContext";
import { serviceTiers } from "@/data/services";
import { X, CheckCircle, Calendar, Clock, User, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const AVAILABLE_TIMES = ["09:30", "11:00", "14:00", "15:30", "17:00"];

export const AppointmentModal: React.FC = () => {
  const { isOpen, closeBooking, selectedServiceId } = useAppointment();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState<string>("meister");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("11:00");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setService(selectedServiceId);
    }
  }, [selectedServiceId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBooking();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  const currentServiceObj = serviceTiers.find((s) => s.id === service) || serviceTiers[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    closeBooking();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={closeBooking}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#F2F0E9] rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-[#2E4036]/15 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={closeBooking}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1A1A1A] flex items-center justify-center transition-colors border border-[#2E4036]/10 shadow-sm"
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#2E4036]/10 text-[#2E4036] mx-auto flex items-center justify-center mb-6">
              <CheckCircle size={36} className="text-[#CC5833]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#2E4036]">
              Reservierungsbestätigung
            </span>
            <h3 className="font-outfit text-3xl font-bold text-[#1A1A1A] mt-2 mb-4">
              Ihr Meister-Termin ist angefragt!
            </h3>
            <p className="text-[#1A1A1A]/70 max-w-md mx-auto mb-8 font-light">
              Vielen Dank, <strong className="font-semibold">{formData.fullName || "geschätzter Gast"}</strong>. Wir haben Ihre Terminanfrage für <span className="font-medium text-[#2E4036]">{currentServiceObj.title}</span> am <span className="font-medium text-[#2E4036]">{selectedDate}</span> um <span className="font-medium text-[#2E4036]">{selectedTime} Uhr</span> vorgemerkt.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-[#2E4036]/10 max-w-md mx-auto mb-8 text-left text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Leistung:</span>
                <span className="font-semibold text-[#1A1A1A]">{currentServiceObj.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Dauer:</span>
                <span className="font-mono text-[#CC5833]">{currentServiceObj.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">E-Mail:</span>
                <span className="text-[#1A1A1A]">{formData.email}</span>
              </div>
            </div>
            <MagneticButton onClick={handleResetAndClose} variant="moss">
              <span>Fertig & Schließen</span>
            </MagneticButton>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#CC5833] mb-2">
                <Sparkles size={14} />
                <span>Exklusive Terminvereinbarung</span>
              </div>
              <h3 className="font-outfit text-3xl font-bold text-[#1A1A1A]">
                Wählen Sie Ihre Sehanalyse
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 font-light mt-1">
                Persönlich betreut durch den Augenoptikermeister. Ohne Hektik und Wartezeiten.
              </p>
            </div>

            {/* Stepper Indicator */}
            <div className="flex items-center justify-between gap-2 mb-8 bg-white/60 p-2 rounded-2xl border border-[#2E4036]/10">
              {[
                { s: 1, title: "1. Leistung" },
                { s: 2, title: "2. Datum & Zeit" },
                { s: 3, title: "3. Kontaktdaten" }
              ].map((item) => (
                <button
                  key={item.s}
                  onClick={() => setStep(item.s as 1 | 2 | 3)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                    step === item.s
                      ? "bg-[#2E4036] text-white shadow-sm"
                      : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {serviceTiers.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => setService(s.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                          service === s.id
                            ? "bg-[#2E4036] text-white border-[#2E4036] shadow-md ring-2 ring-[#CC5833]"
                            : "bg-white text-[#1A1A1A] border-[#2E4036]/10 hover:border-[#2E4036]/30"
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                              service === s.id ? "bg-white/20 text-white" : "bg-[#2E4036]/10 text-[#2E4036]"
                            }`}>
                              {s.priceLabel}
                            </span>
                            <span className={`text-[10px] font-mono ${service === s.id ? "text-white/80" : "text-[#CC5833]"}`}>
                              {s.duration}
                            </span>
                          </div>
                          <h4 className="font-outfit font-bold text-base mb-1">{s.title}</h4>
                          <p className={`text-xs line-clamp-2 ${service === s.id ? "text-white/80" : "text-[#1A1A1A]/60"}`}>
                            {s.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <MagneticButton
                      type="button"
                      onClick={() => setStep(2)}
                      variant="clay"
                      className="text-sm px-6 py-3"
                    >
                      <span>Weiter zur Terminauswahl</span>
                      <ArrowRight size={16} />
                    </MagneticButton>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="bg-white p-6 rounded-2xl border border-[#2E4036]/10">
                    <label className="block text-xs font-mono uppercase text-[#2E4036] mb-3 flex items-center gap-2">
                      <Calendar size={14} className="text-[#CC5833]" />
                      Wunschdatum wählen
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#F2F0E9] border border-[#2E4036]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E4036]"
                      required
                    />
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-[#2E4036]/10">
                    <label className="block text-xs font-mono uppercase text-[#2E4036] mb-3 flex items-center gap-2">
                      <Clock size={14} className="text-[#CC5833]" />
                      Verfügbare Uhrzeit
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {AVAILABLE_TIMES.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-3 rounded-xl font-mono text-xs transition-all ${
                            selectedTime === time
                              ? "bg-[#2E4036] text-white font-bold shadow-sm"
                              : "bg-[#F2F0E9] text-[#1A1A1A] hover:bg-[#E5E1D5]"
                          }`}
                        >
                          {time} Uhr
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                    >
                      Zurück
                    </button>
                    <MagneticButton
                      type="button"
                      onClick={() => setStep(3)}
                      variant="clay"
                      className="text-sm px-6 py-3"
                    >
                      <span>Weiter zu Kontaktdaten</span>
                      <ArrowRight size={16} />
                    </MagneticButton>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Info & Confirm */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#2E4036] mb-1.5 flex items-center gap-1.5">
                        <User size={13} className="text-[#CC5833]" />
                        Vollständiger Name *
                      </label>
                      <input
                        type="text"
                        placeholder="z.B. Dr. Maximilian Weber"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="w-full bg-white border border-[#2E4036]/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E4036]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#2E4036] mb-1.5 flex items-center gap-1.5">
                        <Mail size={13} className="text-[#CC5833]" />
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        placeholder="ihre.email@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-white border border-[#2E4036]/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E4036]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#2E4036] mb-1.5 flex items-center gap-1.5">
                      <Phone size={13} className="text-[#CC5833]" />
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 170 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-white border border-[#2E4036]/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E4036]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#2E4036] mb-1.5">
                      Besondere Hinweise (z.B. Gleitsicht-Wunsch, Kopfschmerzen)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Optional: Haben Sie bereits Brillenwerte oder konkrete Beschwerden?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border border-[#2E4036]/15 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E4036] resize-none"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-[#2E4036]/10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                    >
                      Zurück
                    </button>
                    <MagneticButton type="submit" variant="clay" className="text-sm px-6 py-3">
                      <span>Terminanfrage verbindlich absenden</span>
                      <CheckCircle size={16} />
                    </MagneticButton>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
