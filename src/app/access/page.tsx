import type { Metadata } from "next";
import Link from "next/link";
import { CammannLogo } from "@/components/ui/CammannLogo";
import { AccessForm } from "./AccessForm";
import { contactInfo } from "@/data/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Interner Zugang | Cammann Optik Hannover",
  description: "Cammann Optik Hannover – Ihr Augenoptikermeister in der Königstraße 44.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#161719] text-[#161719] dark:text-[#FAF8F5] flex flex-col justify-between relative overflow-hidden transition-colors duration-500">
      {/* Ambient subtle background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D13426]/10 dark:bg-[#D13426]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D13426]/10 dark:bg-[#D13426]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="w-full px-6 py-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <CammannLogo className="h-9 sm:h-11 w-auto" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#161719]/50 dark:text-white/50">
            Hannover · Meisterbetrieb seit 1949
          </span>
        </div>
      </header>

      {/* Main Gate Card */}
      <main className="w-full max-w-lg mx-auto px-6 py-4 z-10 flex flex-col items-center">
        <div className="w-full bg-white dark:bg-[#1F2126] rounded-3xl sm:rounded-[2rem] p-7 sm:p-10 border border-[#161719]/10 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/40 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161719]/5 dark:bg-white/5 border border-[#161719]/10 dark:border-white/10 text-[#161719]/80 dark:text-white/80 text-xs font-mono font-medium mb-6">
            <MapPin size={13} className="text-[#D13426]" />
            <span>Königstraße 44 · 30175 Hannover</span>
          </div>

          <h1 className="font-outfit text-2xl sm:text-3xl font-black text-[#161719] dark:text-white mb-3 tracking-tight">
            Cammann Optik Hannover
          </h1>
          
          <p className="text-[#161719]/75 dark:text-white/75 text-xs sm:text-sm font-light leading-relaxed mb-8">
            Unser Augenoptik-Fachgeschäft ist wie gewohnt persönlich vor Ort für Sie geöffnet. Unsere neue Website befindet sich aktuell im Aufbau und ist vorübergehend passwortgeschützt.
          </p>

          {/* Form */}
          <AccessForm />

          {/* Local Store Contact & Opening Hours */}
          <div className="mt-8 pt-6 border-t border-[#161719]/10 dark:border-white/10 text-left space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#161719] dark:text-white mb-2">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#D13426]" />
                <span>Öffnungszeiten Geschäft:</span>
              </span>
              <span className="font-mono font-normal text-[#161719]/70 dark:text-white/70">
                Mo–Fr 10:00 – 18:00 Uhr
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#161719]/60 border border-[#161719]/5 dark:border-white/5 hover:border-[#D13426]/30 text-[#161719] dark:text-white transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-[#D13426]/10 text-[#D13426] flex items-center justify-center shrink-0">
                  <Phone size={12} />
                </div>
                <span className="font-mono">{contactInfo.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#161719]/60 border border-[#161719]/5 dark:border-white/5 hover:border-[#D13426]/30 text-[#161719] dark:text-white transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-[#D13426]/10 text-[#D13426] flex items-center justify-center shrink-0">
                  <Mail size={12} />
                </div>
                <span className="truncate">{contactInfo.email}</span>
              </a>
            </div>

            <p className="text-[11px] text-[#161719]/50 dark:text-white/50 text-center pt-1 italic">
              Termine nach Vereinbarung auch außerhalb der regulären Zeiten möglich.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-6 text-center text-xs text-[#161719]/50 dark:text-white/50 z-10">
        <div className="flex justify-center items-center gap-6 mb-2">
          <Link href="/impressum" className="hover:text-[#161719] dark:hover:text-white transition-colors underline-offset-4 hover:underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-[#161719] dark:hover:text-white transition-colors underline-offset-4 hover:underline">
            Datenschutz
          </Link>
          <Link href="/barrierefreiheit" className="hover:text-[#161719] dark:hover:text-white transition-colors underline-offset-4 hover:underline">
            Barrierefreiheit
          </Link>
        </div>
        <p className="text-[11px]">
          © {new Date().getFullYear()} Cammann Optik e. K. Hannover · Inhaber: Ismaeel Sheikh Ali
        </p>
      </footer>
    </div>
  );
}
