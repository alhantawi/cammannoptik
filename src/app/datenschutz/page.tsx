import type { Metadata } from "next";
import { LegalHeader } from "@/components/layout/LegalHeader";
import { Footer } from "@/components/layout/Footer";
import { contactInfo } from "@/data/navigation";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Cammann Optik Hannover",
  description: "Ausführliche Datenschutzerklärung gemäß DSGVO für Cammann Optik Hannover. Transparente Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  alternates: {
    canonical: "https://www.cammannoptik.de/datenschutz"
  }
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#161719] flex flex-col justify-between">
      <LegalHeader />

      <main className="max-w-4xl mx-auto px-6 py-16 sm:py-20 w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
            <Shield size={13} />
            <span>DSGVO-Konformität</span>
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl font-black text-[#161719] mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-[#161719]/70 text-sm sm:text-base font-light">
            Transparente Information über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* 1. Überblick */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <Eye size={20} className="text-[#D13426]" />
              <span>1. Datenschutz auf einen Blick</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#161719]/80 font-light">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (insbesondere der EU-Datenschutz-Grundverordnung DSGVO) sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
              </p>
            </div>
          </section>

          {/* 2. Verantwortliche Stelle */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <FileText size={20} className="text-[#D13426]" />
              <span>2. Verantwortliche Stelle</span>
            </h2>

            <div className="text-sm leading-relaxed text-[#161719]/80 space-y-2">
              <p className="font-semibold text-[#161719]">
                Cammann Optik
              </p>
              <p>
                Inhaber: Ismaeel Sheikh Ali (Augenoptikermeister)<br />
                Königstraße 44<br />
                30175 Hannover<br />
                Deutschland
              </p>
              <p className="pt-2">
                Telefon: <a href={`tel:${contactInfo.phone}`} className="text-[#D13426] font-mono hover:underline">{contactInfo.phoneDisplay}</a><br />
                E-Mail: <a href={`mailto:${contactInfo.email}`} className="text-[#D13426] hover:underline">{contactInfo.email}</a>
              </p>
            </div>
          </section>

          {/* 3. Datenerfassung auf dieser Website */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <Lock size={20} className="text-[#D13426]" />
              <span>3. Datenerfassung & Verarbeitungszwecke</span>
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-[#161719]/80 font-light">
              
              {/* Server Logs */}
              <div>
                <h3 className="font-outfit font-bold text-base text-[#161719] mb-2">
                  Server-Log-Dateien & Hosting
                </h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                </p>
                <p className="text-xs text-[#161719]/60 mt-1">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung der Website).
                </p>
              </div>

              <div className="h-px bg-[#161719]/10" />

              {/* Terminbuchung Formular */}
              <div>
                <h3 className="font-outfit font-bold text-base text-[#161719] mb-2">
                  Online-Terminanfrage & Buchungsformular
                </h3>
                <p>
                  Wenn Sie uns per Online-Formular eine Terminanfrage zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer, Wunschtermin, gewählte Beratungsleistung und optionale Notizen) zwecks Bearbeitung der Terminanfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-xs text-[#161719]/60 mt-1">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).
                </p>
              </div>

              <div className="h-px bg-[#161719]/10" />

              {/* Kontaktaufnahme per Telefon, E-Mail oder WhatsApp */}
              <div>
                <h3 className="font-outfit font-bold text-base text-[#161719] mb-2">
                  Kontaktaufnahme per E-Mail, Telefon oder WhatsApp
                </h3>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder über den WhatsApp-Button kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Telefonnummer, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns verarbeitet.
                </p>
                <p className="mt-1">
                  <strong>Hinweis zu WhatsApp:</strong> Durch das Anklicken des WhatsApp-Buttons verlassen Sie unsere Website und werden zur Anwendung von WhatsApp (WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) weitergeleitet. Erst mit dem Klick erfolgt eine Verbindung zu den Servern von WhatsApp.
                </p>
              </div>

              <div className="h-px bg-[#161719]/10" />

              {/* Cookies */}
              <div>
                <h3 className="font-outfit font-bold text-base text-[#161719] mb-2">
                  Hinweis zu Cookies & Tracking
                </h3>
                <p>
                  Unsere Website setzt keine zustimmungspflichtigen Tracking- oder Werbe-Cookies ein. Es werden lediglich technisch notwendige Session-Informationen zur fehlerfreien Funktion der Benutzerführung verwendet.
                </p>
              </div>

            </div>
          </section>

          {/* 4. Ihre Rechte */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <CheckCircle2 size={20} className="text-[#D13426]" />
              <span>4. Ihre Rechte als betroffene Person</span>
            </h2>

            <div className="space-y-3 text-sm leading-relaxed text-[#161719]/80 font-light">
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Auskunft (Art. 15 DSGVO):</strong> Kostenlose Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und Zweck der Datenverarbeitung.</li>
                <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger oder unvollständiger Daten.</li>
                <li><strong>Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Datenverarbeitung.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Aushändigung Ihrer Daten in einem gängigen, maschinenlesbaren Format.</li>
                <li><strong>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine bereits erteilte Einwilligung zur Datenverarbeitung jederzeit mit Wirkung für die Zukunft widerrufen.</li>
                <li><strong>Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie haben das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover (<a href="https://lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-[#D13426] hover:underline">www.lfd.niedersachsen.de</a>).</li>
              </ul>
            </div>
          </section>

          {/* 5. SSL / TLS Verschlüsselung */}
          <section className="bg-white rounded-3xl p-8 border border-[#161719]/10 shadow-sm">
            <h2 className="font-outfit font-bold text-xl text-[#161719] mb-4 flex items-center gap-2.5">
              <Lock size={20} className="text-[#D13426]" />
              <span>5. SSL- bzw. TLS-Verschlüsselung</span>
            </h2>

            <div className="text-sm leading-relaxed text-[#161719]/80 font-light">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Terminanfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
