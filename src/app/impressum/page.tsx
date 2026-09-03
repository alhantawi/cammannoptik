import type { Metadata } from "next";
import { LegalHeader } from "@/components/layout/LegalHeader";
import { Footer } from "@/components/layout/Footer";
import { contactInfo } from "@/data/navigation";
import { Building2, Phone, MapPin, ShieldCheck, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Cammann Optik Hannover",
  description: "Rechtliche Angaben und Impressum gemäß § 5 DDG für Cammann Optik Hannover, Inhaber Ismaeel Sheikh Ali (Augenoptikermeister).",
  alternates: {
    canonical: "https://www.cammannoptik.de/impressum"
  }
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#161719] flex flex-col justify-between">
      <LegalHeader />

      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-20 w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
            <Scale size={13} />
            <span>Rechtliche Informationen</span>
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-black text-[#161719] mb-4">
            Impressum
          </h1>
          <p className="text-[#161719]/70 text-sm sm:text-base font-light">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Angaben zum Unternehmen & Inhaber */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-6 flex items-center gap-2.5">
              <Building2 size={20} className="text-[#D13426]" />
              <span>Diensteanbieter / Inhaber</span>
            </h2>

            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-[#161719]/80">
              <p className="font-bold text-[#161719] text-lg">
                Cammann Optik
              </p>
              <p>
                <strong className="text-[#161719]">Inhaber:</strong> Ismaeel Sheikh Ali<br />
                <span className="text-xs text-[#161719]/60 font-mono">(Augenoptikermeister)</span>
              </p>
              <p className="flex items-start gap-2 pt-2">
                <MapPin size={16} className="text-[#D13426] shrink-0 mt-1" />
                <span>
                  Königstraße 44<br />
                  30175 Hannover<br />
                  Deutschland
                </span>
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-6 flex items-center gap-2.5">
              <Phone size={20} className="text-[#D13426]" />
              <span>Kontaktmöglichkeiten</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#161719]/5">
                <span className="font-mono text-xs uppercase text-[#161719]/50 block mb-1">Telefon</span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="font-bold text-[#161719] hover:text-[#D13426] transition-colors"
                >
                  {contactInfo.phoneDisplay} ({contactInfo.phone})
                </a>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#161719]/5">
                <span className="font-mono text-xs uppercase text-[#161719]/50 block mb-1">E-Mail</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-bold text-[#161719] hover:text-[#D13426] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#161719]/5 sm:col-span-2">
                <span className="font-mono text-xs uppercase text-[#161719]/50 block mb-1">Website</span>
                <a
                  href="https://www.cammannoptik.de"
                  className="font-bold text-[#161719] hover:text-[#D13426] transition-colors"
                >
                  https://www.cammannoptik.de
                </a>
              </div>
            </div>
          </section>

          {/* Berufsbezeichnung & Kammer */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-6 flex items-center gap-2.5">
              <ShieldCheck size={20} className="text-[#D13426]" />
              <span>Berufsbezeichnung & berufsrechtliche Regelungen</span>
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-[#161719]/80">
              <div>
                <strong className="text-[#161719] block mb-1">Gesetzliche Berufsbezeichnung:</strong>
                <p>
                  Augenoptikermeister (verliehen in der Bundesrepublik Deutschland)
                </p>
              </div>

              <div>
                <strong className="text-[#161719] block mb-1">Zuständige Handwerkskammer:</strong>
                <p>
                  Handwerkskammer Hannover<br />
                  Berliner Allee 17<br />
                  30175 Hannover<br />
                  Website:{" "}
                  <a
                    href="https://www.hwk-hannover.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D13426] hover:underline"
                  >
                    www.hwk-hannover.de
                  </a>
                </p>
              </div>

              <div>
                <strong className="text-[#161719] block mb-1">Berufsrechtliche Regelungen:</strong>
                <p>
                  Handwerksordnung (HwO) in der jeweils gültigen Fassung.<br />
                  Gesetzestext einsehbar unter:{" "}
                  <a
                    href="https://www.gesetze-im-internet.de/hwo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D13426] hover:underline break-all"
                  >
                    https://www.gesetze-im-internet.de/hwo/
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Streitbeilegung */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <FileText size={20} className="text-[#D13426]" />
              <span>Verbraucherstreitbeilegung</span>
            </h2>

            <div className="text-sm leading-relaxed text-[#161719]/80 space-y-3">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D13426] hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Haftung für Inhalte & Links */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4">
              Haftung für Inhalte und Links
            </h2>

            <div className="text-xs sm:text-sm leading-relaxed text-[#161719]/75 space-y-3 font-light">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
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
