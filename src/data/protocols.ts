import { ProtocolCard } from "@/types";

export const protocolCards: ProtocolCard[] = [
  {
    id: "01",
    title: "So individuell wie Ihre Augen.",
    subtitle: "Hochwertige Gläser • Präzise Anpassung • Persönliche Beratung",
    desc: "Kein Sehen ist wie das andere. Ob Einstärkengläser für den Alltag, moderne Gleitsichtgläser, spezielle Arbeitsplatzbrillen oder Sonnenschutz – wir finden das Glas, das perfekt zu Ihren Sehgewohnheiten passt.",
    tag: "Brillengläser",
    features: [
      "Hochwertige Gläser für Alltag & Gleitsicht",
      "Spezielle Arbeitsplatzbrillen & Blaulichtfilter",
      "Zuverlässiger Sonnenschutz mit 100% UV-Schutz",
      "Präzise Zentrierung & persönliche Beratung"
    ],
    graphicType: "radial"
  },
  {
    id: "02",
    title: "Gutes Sehen ohne Brille.",
    subtitle: "Individuell angepasst für besten Tragekomfort",
    desc: "Kontaktlinsen bieten Freiheit – im Alltag, beim Sport oder zu besonderen Anlässen. Wir finden die passenden Linsen für Ihre Augen und begleiten Sie von der ersten Anpassung bis zur regelmäßigen Kontrolle.",
    tag: "Kontaktlinsen",
    features: [
      "Freiheit im Alltag, Sport & zu besonderen Anlässen",
      "Individuelle Anpassung an Ihre Hornhaut-Geometrie",
      "Tages-, Monats- und formstabile Speziallinsen",
      "Begleitung von der Erstanpassung bis zur Kontrolle"
    ],
    graphicType: "scan"
  },
  {
    id: "03",
    title: "Wir sind auch nach dem Kauf für Sie da.",
    subtitle: "Eigener Werkstattservice für Ihre Brille",
    desc: "Guter Service endet nicht mit dem Kauf. Ob Brillenanpassung, professionelle Reinigung, kleinere Reparaturen oder einfach eine Schraube nachziehen – wir sind für Sie da. Schnell, unkompliziert und meisterhaft.",
    tag: "Service & Werkstatt",
    features: [
      "Eigener Werkstattservice direkt in Hannover",
      "Kostenlose Ultraschallreinigung & anatomischer Sitzcheck",
      "Kleinere Reparaturen & Schrauben nachziehen",
      "Schnell, unkompliziert und meisterhaft"
    ],
    graphicType: "wave"
  }
];
