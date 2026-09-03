import type { Metadata } from "next";
import { LegalHeader } from "@/components/layout/LegalHeader";
import { Footer } from "@/components/layout/Footer";
import { contactInfo } from "@/data/navigation";
import { Accessibility, CheckCircle2, HeartHandshake, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Erklärung zur Barrierefreiheit | Cammann Optik Hannover",
  description: "Erklärung zur digitalen und physischen Barrierefreiheit bei Cammann Optik Hannover. Unser Engagement für uneingeschränkten Zugang zu gutem Sehen.",
  alternates: {
    canonical: "https://www.cammannoptik.de/barrierefreiheit"
  }
};

export default function BarrierefreiheitPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#161719] flex flex-col justify-between">
      <LegalHeader />

      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-20 w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
            <Accessibility size={13} />
            <span>Zugänglichkeit</span>
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-black text-[#161719] mb-4">
            Erklärung zur Barrierefreiheit
          </h1>
          <p className="text-[#161719]/70 text-sm sm:text-base font-light">
            Unser Anspruch ist es, gutes Sehen und erstklassigen Service für alle Menschen zugänglich zu machen.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Digitale Barrierefreiheit */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <CheckCircle2 size={20} className="text-[#D13426]" />
              <span>Digitale Barrierefreiheit dieser Website</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#161719]/80 font-light">
              <p>
                Wir bemühen uns kontinuierlich, diese Website im Einklang mit den Richtlinien der Web Content Accessibility Guidelines (WCAG 2.1, Konformitätsstufe AA) und den Vorgaben der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) zu gestalten.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Semantische HTML5-Strukturierung für Screenreader",
                  "Hohe Kontrastverhältnisse bei Texten und Elementen",
                  "Vollständige Tastaturnavigation aller Bedienelemente",
                  "Skalierbare Schriftgrößen ohne Layoutverlust",
                  "Verzicht auf störende automatische Ton- oder Medienwiedergabe",
                  "Eindeutige Beschriftungen und Alternativtexte für Bilder"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#FAF8F5] p-3 rounded-xl border border-[#161719]/5 text-xs sm:text-sm">
                    <CheckCircle2 size={15} className="text-[#D13426] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Physische Barrierefreiheit vor Ort */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <MapPin size={20} className="text-[#D13426]" />
              <span>Zugänglichkeit in unserem Meisterstudio Hannover</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#161719]/80 font-light">
              <p>
                Auch in unserem Ladengeschäft in der <strong>Königstraße 44, 30175 Hannover</strong> legen wir großen Wert auf angenehme, barrierearme Rahmenbedingungen:
              </p>
              
              <ul className="space-y-2 list-disc pl-5">
                <li>Ebenerdiger bzw. stufenarmer Zugang zu unserem Beratungs- und Anpassbereich.</li>
                <li>Ausreichend breite Gänge für Gehhilfen, Rollatoren und Kinderwagen.</li>
                <li>Ergonomische Beratungssessel und ruhige Gesprächsatmosphäre ohne Hektik.</li>
                <li>Persönliche Hilfestellung und Begleitung durch unser Team vor Ort.</li>
              </ul>
            </div>
          </section>

          {/* Feedback & Ansprechpartner */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <HeartHandshake size={20} className="text-[#D13426]" />
              <span>Feedback und Kontakt bei Barrieren</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#161719]/80 font-light">
              <p>
                Sollten Sie auf unserer Website oder in unserem Geschäft auf Barrieren stoßen oder Anregungen zur Verbesserung der Zugänglichkeit haben, kontaktieren Sie uns bitte gerne:
              </p>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#161719]/5 space-y-2 text-sm">
                <p className="font-bold text-[#161719]">Cammann Optik – Inhaber Ismaeel Sheikh Ali</p>
                <p>Königstraße 44, 30175 Hannover</p>
                <p>
                  Telefon: <a href={`tel:${contactInfo.phone}`} className="text-[#D13426] font-mono hover:underline">{contactInfo.phoneDisplay}</a>
                </p>
                <p>
                  E-Mail: <a href={`mailto:${contactInfo.email}`} className="text-[#D13426] hover:underline">{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
