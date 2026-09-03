"use client";

import React, { useState } from "react";
import { GoogleReview, googleReviewsData } from "@/data/reviews";
import { Star, CheckCircle, Quote, ArrowRight, ExternalLink, RefreshCw } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

const GoogleLogoSvg: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

export const ReviewsSection: React.FC = () => {
  const { openBooking } = useAppointment();
  const [reviews, setReviews] = useState<GoogleReview[]>(googleReviewsData.reviews);
  const [rating, setRating] = useState<number>(googleReviewsData.averageRating);
  const [totalCount, setTotalCount] = useState<number>(googleReviewsData.totalReviews);
  const [recommendation, setRecommendation] = useState<string>(googleReviewsData.recommendationRate);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const GOOGLE_SEARCH_URL =
    "https://www.google.com/search?q=cammann+optik+hannover&sca_esv=c894b1b53fb75601";

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        setReviews(data.reviews || googleReviewsData.reviews);
        setRating(data.averageRating || 5.0);
        setTotalCount(data.totalReviews || 26);
        setRecommendation(data.recommendationRate || "Ausgezeichnet");
      }
    } catch (err) {
      console.error("Fehler beim Laden der Google-Rezensionen:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredReviews = reviews.filter((rev) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "gleitsicht")
      return rev.text.toLowerCase().includes("gleitsicht") || rev.serviceUsed.toLowerCase().includes("rodenstock");
    if (activeFilter === "fassungen")
      return rev.text.toLowerCase().includes("fassung") || rev.text.toLowerCase().includes("lunor");
    if (activeFilter === "service")
      return rev.text.toLowerCase().includes("beratung") || rev.text.toLowerCase().includes("service");
    return true;
  });

  return (
    <section id="bewertungen" className="py-28 px-6 md:px-16 bg-[#FAF8F5] text-[#161719] relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#161719]/10 shadow-sm text-xs font-mono mb-3">
              <GoogleLogoSvg />
              <span className="font-bold text-[#161719]"> Google Feed</span>
              <span className="text-[#D13426] font-bold">• 4.6 Sterne</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black text-[#161719] leading-tight">
              Was unsere Kunden auf Google sagen
            </h2>
            <p className="text-[#161719]/70 max-w-xl text-base font-light mt-2">
              Echte, verifizierte Rezensionen unserer Gäste im Cammann Optik Meisterstudio Hannover.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#161719]/10 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
            <div className="flex flex-col items-center justify-center sm:pr-6 sm:border-r border-[#161719]/10">
              <span className="font-outfit font-black text-4xl sm:text-5xl text-[#161719] leading-none">
                {rating.toFixed(1)}
              </span>
              <div className="flex gap-1 text-amber-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-1">
              <div className="flex items-center gap-2">
                <GoogleLogoSvg />
                <span className="font-outfit font-bold text-base text-[#161719]">
                  {totalCount} Google Bewertungen
                </span>
              </div>
              <span className="font-mono text-xs text-[#D13426] font-bold">
                {recommendation === "100%" || recommendation === "Ausgezeichnet"
                  ? "Höchste Kundenzufriedenheit"
                  : `${recommendation} Weiterempfehlung`}
              </span>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono uppercase font-bold text-[#D13426] hover:underline flex items-center gap-1"
                >
                  <span>Google Suche öffnen</span>
                  <ExternalLink size={11} />
                </a>

                <button
                  onClick={fetchReviews}
                  disabled={loading}
                  className="text-[11px] font-mono text-[#161719]/60 hover:text-[#161719] flex items-center gap-1 cursor-pointer"
                  title="Rezensionen neu laden"
                >
                  <RefreshCw size={11} className={loading ? "animate-spin" : ""} />
                  <span>{loading ? "Lade..." : "Aktualisieren"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono uppercase text-[#161719]/60 mr-2">Filtern nach:</span>
          {[
            { id: "all", label: "Alle Bewertungen" },
            { id: "gleitsicht", label: "Gleitsicht & DNEye®" },
            { id: "fassungen", label: "Fassungen & Lunor" },
            { id: "service", label: "Meisterberatung" }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${activeFilter === f.id
                ? "bg-[#161719] text-white shadow-sm"
                : "bg-white text-[#161719]/70 hover:text-[#161719] border border-[#161719]/10"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Dynamic Reviews Grid */}
        {loading && reviews.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-16 bg-gray-100 rounded w-full" />
                <div className="h-8 bg-gray-200 rounded w-1/3 pt-4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-[#161719]/40">{rev.date}</span>
                  </div>

                  {/* Highlight */}
                  <h3 className="font-outfit font-bold text-lg text-[#161719] mb-3 leading-snug">
                    „{rev.highlight}“
                  </h3>

                  {/* Text */}
                  <p className="text-sm text-[#161719]/75 font-light leading-relaxed mb-6">
                    {rev.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#161719]/10 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#D13426]/10 text-[#D13426] font-bold text-xs flex items-center justify-center font-outfit">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-outfit font-bold text-sm text-[#161719]">
                          {rev.author}
                        </span>
                        {rev.verified && (
                          <CheckCircle size={13} className="text-[#D13426]" />
                        )}
                      </div>
                      <span className="text-[11px] text-[#161719]/50 block">
                        {rev.role}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold text-[#D13426] bg-[#D13426]/10 px-2.5 py-1 rounded-full">
                    {rev.serviceUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Bar */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-[#161719]/10 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D13426]/10 text-[#D13426] flex items-center justify-center shrink-0">
              <Quote size={22} />
            </div>
            <div>
              <p className="font-outfit font-bold text-base text-[#161719]">
                Waren Sie bereits Gast in unserem Meisterstudio?
              </p>
              <p className="text-xs text-[#161719]/60 font-light">
                Wir freuen uns über Ihr ehrliches Feedback auf Google!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-[#161719]/20 hover:bg-[#161719]/5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <span>Auf Google bewerten</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={() => openBooking("meister")}
              className="luxury-btn px-7 py-3.5 bg-[#D13426] hover:bg-[#B5281B] text-white rounded-full text-xs font-semibold uppercase tracking-wider font-mono shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Termin vereinbaren</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
