import type { Metadata } from "next";
import { LegalHeader } from "@/components/layout/LegalHeader";
import { Footer } from "@/components/layout/Footer";
import { contactInfo } from "@/data/navigation";
import {
  Building2,
  Phone,
  Mail,
  Globe,
  MapPin,
  ShieldCheck,
  Scale,
  FileCheck2,
  Receipt,
  FileText,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Cammann Optik e. K. Hannover",
  description:
    "Rechtliche Angaben und Impressum gemäß § 5 DDG für Cammann Optik e. K. Hannover, Inhaber Ismaeel Sheikh Ali (Augenoptikermeister).",
  alternates: {
    canonical: "https://www.cammannoptik.de/impressum"
  }
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#161719] text-[#161719] dark:text-[#FAF8F5] flex flex-col justify-between transition-colors duration-300">
      <LegalHeader />

      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-20 w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3 font-semibold">
            <Scale size={13} />
            <span>Rechtliche Informationen · § 5 DDG</span>
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-black text-[#161719] dark:text-white mb-4 tracking-tight">
            Impressum
          </h1>
          <p className="text-[#161719]/70 dark:text-white/70 text-sm sm:text-base font-light">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          
          {/* 1. Angaben zum Unternehmen & Inhaber */}
          <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
            <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-6 flex items-center gap-2.5">
              <Building2 size={20} className="text-[#D13426]" />
              <span>Diensteanbieter / Inhaber</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#161719]/85 dark:text-white/85">
              <div>
                <p className="font-outfit font-bold text-2xl text-[#161719] dark:text-white">
                  Cammann Optik e. K.
                </p>
                <p className="text-sm text-[#161719]/65 dark:text-white/65 mt-0.5">
                  Inhaber: <strong className="text-[#161719] dark:text-white font-semibold">Ismaeel Sheikh Ali</strong>{" "}
                  <span className="font-mono text-xs text-[#161719]/60 dark:text-white/60">(Augenoptikermeister)</span>
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-2 text-[#161719]/80 dark:text-white/80">
                <MapPin size={18} className="text-[#D13426] shrink-0 mt-1" />
                <span>
                  Königstraße 44<br />
                  30175 Hannover<br />
                  Deutschland
                </span>
              </div>
            </div>
          </section>

          {/* 2. Kontakt */}
          <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
            <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-6 flex items-center gap-2.5">
              <Phone size={20} className="text-[#D13426]" />
              <span>Kontakt</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-[#FAF8F5] dark:bg-[#161719]/60 p-5 rounded-2xl border border-[#161719]/5 dark:border-white/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <Phone size={14} className="text-[#D13426]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/60 dark:text-white/60 font-semibold">
                    Telefon
                  </span>
                </div>
                <a
                  href="tel:0511343628"
                  className="font-bold text-base text-[#161719] dark:text-white hover:text-[#D13426] dark:hover:text-[#D13426] transition-colors"
                >
                  0511 343628
                </a>
                <span className="block text-xs text-[#161719]/50 dark:text-white/50 mt-1 font-mono">
                  (International: +49 511 343628)
                </span>
              </div>

              <div className="bg-[#FAF8F5] dark:bg-[#161719]/60 p-5 rounded-2xl border border-[#161719]/5 dark:border-white/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <Mail size={14} className="text-[#D13426]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/60 dark:text-white/60 font-semibold">
                    E-Mail
                  </span>
                </div>
                <a
                  href="mailto:kundenservice@cammannoptik.de"
                  className="font-bold text-base text-[#161719] dark:text-white hover:text-[#D13426] dark:hover:text-[#D13426] transition-colors break-all"
                >
                  kundenservice@cammannoptik.de
                </a>
              </div>

              <div className="bg-[#FAF8F5] dark:bg-[#161719]/60 p-5 rounded-2xl border border-[#161719]/5 dark:border-white/5 sm:col-span-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <Globe size={14} className="text-[#D13426]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/60 dark:text-white/60 font-semibold">
                    Internet
                  </span>
                </div>
                <a
                  href="https://www.cammannoptik.de"
                  className="font-bold text-base text-[#161719] dark:text-white hover:text-[#D13426] dark:hover:text-[#D13426] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>www.cammannoptik.de</span>
                  <ExternalLink size={14} className="opacity-60" />
                </a>
              </div>
            </div>
          </section>

          {/* 3. Registereintrag & Umsatzsteuer-ID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registereintrag */}
            <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
              <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-4 flex items-center gap-2.5">
                <FileCheck2 size={20} className="text-[#D13426]" />
                <span>Registereintrag</span>
              </h2>

              <div className="space-y-3 text-sm leading-relaxed text-[#161719]/80 dark:text-white/80">
                <p>
                  Eingetragen im Handelsregister des Amtsgerichts Hannover.
                </p>
                <div className="bg-[#FAF8F5] dark:bg-[#161719]/60 p-4 rounded-2xl border border-[#161719]/5 dark:border-white/5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/60 dark:text-white/60 block mb-1">
                    Handelsregisternummer
                  </span>
                  <span className="font-mono font-bold text-lg text-[#161719] dark:text-white">
                    HRA 207023
                  </span>
                </div>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
              <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-4 flex items-center gap-2.5">
                <Receipt size={20} className="text-[#D13426]" />
                <span>Umsatzsteuer-ID</span>
              </h2>

              <div className="space-y-3 text-sm leading-relaxed text-[#161719]/80 dark:text-white/80">
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                </p>
                <div className="bg-[#FAF8F5] dark:bg-[#161719]/60 p-4 rounded-2xl border border-[#161719]/5 dark:border-white/5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#161719]/60 dark:text-white/60 block mb-1">
                    USt-IdNr.
                  </span>
                  <span className="font-mono font-bold text-lg text-[#161719] dark:text-white">
                    DE463950654
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* 4. Berufsrechtliche Angaben */}
          <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
            <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-6 flex items-center gap-2.5">
              <ShieldCheck size={20} className="text-[#D13426]" />
              <span>Berufsrechtliche Angaben</span>
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-[#161719]/80 dark:text-white/80">
              <div className="bg-[#FAF8F5] dark:bg-[#161719]/60 p-4 rounded-2xl border border-[#161719]/5 dark:border-white/5">
                <strong className="text-[#161719] dark:text-white block font-semibold mb-1">
                  Gesetzliche Berufsbezeichnung:
                </strong>
                <p className="font-medium text-[#161719] dark:text-white">
                  Augenoptikermeister
                </p>
                <p className="text-xs text-[#161719]/65 dark:text-white/65 mt-0.5">
                  Verliehen in der Bundesrepublik Deutschland
                </p>
              </div>

              <div>
                <strong className="text-[#161719] dark:text-white block font-semibold mb-1">
                  Zuständige Kammer und Aufsichtsbehörde:
                </strong>
                <p>
                  Handwerkskammer Hannover<br />
                  Berliner Allee 17<br />
                  30175 Hannover<br />
                  Website:{" "}
                  <a
                    href="https://www.hwk-hannover.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D13426] hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>www.hwk-hannover.de</span>
                    <ExternalLink size={12} />
                  </a>
                </p>
              </div>

              <div>
                <strong className="text-[#161719] dark:text-white block font-semibold mb-1">
                  Berufsrechtliche Regelungen:
                </strong>
                <p className="mb-1">
                  Es gelten insbesondere die Bestimmungen der Handwerksordnung (HwO).
                </p>
                <p>
                  Diese sind unter{" "}
                  <a
                    href="https://www.gesetze-im-internet.de/hwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D13426] hover:underline break-all inline-flex items-center gap-1 font-medium"
                  >
                    <span>www.gesetze-im-internet.de/hwo</span>
                    <ExternalLink size={12} />
                  </a>{" "}
                  abrufbar.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Verbraucherstreitbeilegung */}
          <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
            <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-4 flex items-center gap-2.5">
              <Scale size={20} className="text-[#D13426]" />
              <span>Verbraucherstreitbeilegung</span>
            </h2>

            <div className="text-sm leading-relaxed text-[#161719]/80 dark:text-white/80 space-y-3">
              <p className="font-medium text-[#161719] dark:text-white">
                Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <p className="text-xs text-[#161719]/65 dark:text-white/65 pt-2 border-t border-[#161719]/10 dark:border-white/10">
                Hinweis gemäß EU-Verordnung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D13426] hover:underline break-all inline-flex items-center gap-1 font-medium"
                >
                  <span>https://ec.europa.eu/consumers/odr</span>
                  <ExternalLink size={11} />
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          {/* 6. Haftung für Inhalte & Links */}
          <section className="bg-white dark:bg-[#1F2126] rounded-3xl p-7 sm:p-9 border border-[#161719]/10 dark:border-white/10 shadow-sm transition-colors">
            <h2 className="font-outfit font-bold text-xl text-[#161719] dark:text-white mb-4 flex items-center gap-2.5">
              <FileText size={20} className="text-[#D13426]" />
              <span>Haftung für Inhalte und Links</span>
            </h2>

            <div className="text-xs sm:text-sm leading-relaxed text-[#161719]/75 dark:text-white/75 space-y-3 font-light">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
