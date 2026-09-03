import { ProtocolCard } from "@/types";

export const protocolCards: ProtocolCard[] = [
  {
    id: "01",
    title: "Präzise Sehanalyse",
    subtitle: "Biometrische Vermessung",
    desc: "Die Basis für entspanntes Sehen ist eine absolut exakte Bestimmung Ihrer Sehstärke. Bei Cammann Optik ist die Sehanalyse Chefsache – mit modernster Rodenstock DNEye® Wellenfront-Technologie und der nötigen Ruhe für Ihre persönliche Beratung.",
    tag: "Sehanalyse & Beratung",
    features: [
      "Hochpräzise Messung in 0,01-dpt-Schritten",
      "Erfassung von Tag- und Nachtsehen (Pupillengröße)",
      "Individuelle Analyse relevanter Augenparameter"
    ],
    graphicType: "radial"
  },
  {
    id: "02",
    title: "Maßgefertigte Sehlösungen",
    subtitle: "Brillengläser & Kontaktlinsen",
    desc: "Ihre Sehlösung ist so individuell wie Sie. Wir führen handverlesene Manufaktur-Fassungen, berechnen biometrische Gleitsichtgläser und passen weiche sowie formstabile Kontaktlinsen maßgeschneidert an Ihre Augen an.",
    tag: "Handwerk & Maßanfertigung",
    features: [
      "Individuelle Freiform-Gleitsichtglasberechnung",
      "Kontaktlinsenanpassung (auch bei Hornhautverkrümmung)",
      "Manufaktur-Fassungen von Lunor, Morel, Escada & Maui Jim",
      "Präzisionszentrierung mit digitaler Video-Vermessung"
    ],
    graphicType: "scan"
  },
  {
    id: "03",
    title: "Sehkomfort & Spezialanpassung",
    subtitle: "Arbeitsplatz & Myopie",
    desc: "Kopfschmerzen, brennende Augen oder schnelle Ermüdung bei Bildschirmarbeit? Mit einer fundierten MKH-Analyse optimieren wir das beidäugige Sehen. Zudem bieten wir Myopie-Vorsorge für Kinder und Jugendliche sowie Linsen bei trockenen Augen.",
    tag: "Spezial-Sehanalyse",
    features: [
      "Mess- und Korrektionsmethodik nach Haase (MKH)",
      "Spezifische Bildschirmarbeitsplatz-Optimierung",
      "Kontaktlinsen-Lösungen bei trockenen Augen",
      "Hauseigene Werkstatt für sofortige Reparaturen & Service"
    ],
    graphicType: "wave"
  }
];
