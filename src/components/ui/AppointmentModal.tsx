"use client";

import React, { useState, useEffect } from "react";
import { useAppointment } from "@/context/AppointmentContext";
import { serviceTiers } from "@/data/services";
import { X, CheckCircle, Calendar, Clock, User, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import { CammannLogo } from "./CammannLogo";

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

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split("T")[0]);
  }, []);

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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={closeBooking}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-[#161719]/15 z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={closeBooking}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white hover:bg-[#ECE7DF] text-[#161719] flex items-center justify-center transition-colors border border-[#161719]/10 shadow-sm cursor-pointer"
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#D13426]/10 text-[#D13426] mx-auto flex items-center justify-center mb-6">
              <CheckCircle size={36} className="text-[#D13426]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] font-bold">
              Reservierung erfolgreich vorgemerkt
            </span>
            <h3 className="font-outfit text-3xl font-black text-[#161719] mt-2 mb-4">
              Vielen Dank für Ihre Terminanfrage!
            </h3>
            <p className="text-[#161719]/70 max-w-md mx-auto mb-8 font-light text-sm leading-relaxed">
              Sehr geehrte/r <strong className="font-semibold text-[#161719]">{formData.fullName || "Gast"}</strong>, wir haben Ihren Wunschtermin für <span className="font-semibold text-[#D13426]">{currentServiceObj.title}</span> am <span className="font-semibold text-[#161719]">{selectedDate}</span> um <span className="font-semibold text-[#161719]">{selectedTime} Uhr</span> erhalten.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-[#161719]/10 max-w-md mx-auto mb-8 text-left text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-[#161719]/60">Leistung:</span>
                <span className="font-semibold text-[#161719]">{currentServiceObj.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#161719]/60">Dauer:</span>
                <span className="font-mono text-[#D13426] font-bold">{currentServiceObj.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#161719]/60">E-Mail:</span>
                <span className="text-[#161719]">{formData.email}</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="luxury-btn px-8 py-3.5 bg-[#161719] text-white hover:bg-[#232529] rounded-full text-xs font-semibold uppercase tracking-wider font-mono shadow-md cursor-pointer"
            >
              <span>Fertig & Schließen</span>
            </button>
          </div>
        ) : (
          <div>
            {/* Header with Logo */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 mb-3">
                <CammannLogo className="h-7 w-auto" />
                <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#D13426] font-bold bg-[#D13426]/10 px-3 py-1 rounded-full">
                  <Sparkles size={12} />
                  <span>Meistertermin</span>
                </div>
              </div>
              <h3 className="font-outfit text-2xl sm:text-3xl font-black text-[#161719]">
                Termin im Studio Hannover
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1">
                <p className="text-sm text-[#161719]/70 font-light">
                  Betreuung persönlich durch den Augenoptikermeister. Ohne Wartezeit.
                </p>
                <a
                  href="https://wa.me/495118974320?text=Hallo%20Cammann%20Optik%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#25D366] hover:underline font-bold shrink-0"
                >
                  <span>💬 Per WhatsApp anfragen</span>
                </a>
              </div>
            </div>

            {/* Stepper Tabs */}
            <div className="flex items-center justify-between gap-2 mb-8 bg-white p-1.5 rounded-2xl border border-[#161719]/10">
              {[
                { s: 1, title: "1. Beratungswahl" },
                { s: 2, title: "2. Datum & Zeit" },
                { s: 3, title: "3. Kontaktdaten" }
              ].map((item) => (
                <button
                  key={item.s}
                  onClick={() => setStep(item.s as 1 | 2 | 3)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    step === item.s
                      ? "bg-[#161719] text-white shadow-sm"
                      : "text-[#161719]/60 hover:text-[#161719]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {serviceTiers.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => setService(s.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                          service === s.id
                            ? "bg-[#161719] text-white border-[#161719] shadow-md ring-2 ring-[#D13426]"
                            : "bg-white text-[#161719] border-[#161719]/10 hover:border-[#161719]/30"
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                              service === s.id ? "bg-white/20 text-white" : "bg-[#D13426]/10 text-[#D13426] font-bold"
                            }`}>
                              {s.priceLabel}
                            </span>
                            <span className={`text-[10px] font-mono ${service === s.id ? "text-white/80" : "text-[#D13426]"}`}>
                              {s.duration}
                            </span>
                          </div>
                          <h4 className="font-outfit font-bold text-base mb-1">{s.title}</h4>
                          <p className={`text-xs line-clamp-2 ${service === s.id ? "text-white/80" : "text-[#161719]/60"}`}>
                            {s.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="luxury-btn bg-[#D13426] hover:bg-[#B5281B] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>Weiter zur Terminauswahl</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="bg-white p-6 rounded-2xl border border-[#161719]/10">
                    <label className="block text-xs font-mono uppercase text-[#161719] mb-3 flex items-center gap-2 font-bold">
                      <Calendar size={14} className="text-[#D13426]" />
                      Wunschdatum im Studio Hannover
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#161719]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D13426]"
                      required
                    />
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-[#161719]/10">
                    <label className="block text-xs font-mono uppercase text-[#161719] mb-3 flex items-center gap-2 font-bold">
                      <Clock size={14} className="text-[#D13426]" />
                      Verfügbare Uhrzeit
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {AVAILABLE_TIMES.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-3 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                            selectedTime === time
                              ? "bg-[#D13426] text-white font-bold shadow-sm"
                              : "bg-[#FAF8F5] text-[#161719] hover:bg-[#ECE7DF]"
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
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#161719]/70 hover:text-[#161719] cursor-pointer"
                    >
                      Zurück
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="luxury-btn bg-[#D13426] hover:bg-[#B5281B] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>Weiter zu Kontaktdaten</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#161719] mb-1.5 flex items-center gap-1.5 font-bold">
                        <User size={13} className="text-[#D13426]" />
                        Vollständiger Name *
                      </label>
                      <input
                        type="text"
                        placeholder="z.B. Dr. Maximilian Weber"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="w-full bg-white border border-[#161719]/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D13426]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#161719] mb-1.5 flex items-center gap-1.5 font-bold">
                        <Mail size={13} className="text-[#D13426]" />
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        placeholder="ihre.email@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-white border border-[#161719]/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D13426]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#161719] mb-1.5 flex items-center gap-1.5 font-bold">
                      <Phone size={13} className="text-[#D13426]" />
                      Telefonnummer für Terminbestätigung *
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 170 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-white border border-[#161719]/15 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D13426]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#161719] mb-1.5 font-bold">
                      Besondere Wünsche (z.B. Gleitsichtglas, Lunor-Fassung, Sonnenbrille)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Optional: Haben Sie bereits Brillenwerte oder konkrete Fassungswünsche?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border border-[#161719]/15 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D13426] resize-none"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-[#161719]/10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#161719]/70 hover:text-[#161719] cursor-pointer"
                    >
                      Zurück
                    </button>
                    <button
                      type="submit"
                      className="luxury-btn bg-[#D13426] hover:bg-[#B5281B] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>Termin verbindlich anfragen</span>
                      <CheckCircle size={16} />
                    </button>
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
