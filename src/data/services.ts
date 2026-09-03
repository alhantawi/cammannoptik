import { ServiceTier } from "@/types";

export const serviceTiers: ServiceTier[] = [
  {
    id: "basis",
    title: "Basis Sehanalyse",
    subtitle: "Präzise Augenglasbestimmung & fachgerechte Fassungs- und Stilberatung.",
    priceLabel: "Basis",
    duration: "ca. 45 Min.",
    features: [
      { title: "Digitale Sehschärfenbestimmung", included: true },
      { title: "Refraktion für Ferne & Nähe", included: true },
      { title: "Ergonomische Fassungsberatung", included: true },
      { title: "Führerschein-Sehtest Option", included: true },
      { title: "3D-Wellenfront DNEye® Analyse", included: false },
      { title: "Bildschirmarbeitsplatz-Simulation", included: false }
    ],
    ctaText: "Termin anfragen"
  },
  {
    id: "meister",
    title: "Meister-Profil",
    subtitle: "Tiefgehende optometrische Sehanalyse inklusive biometrischer DNEye® Vermessung.",
    badge: "Meistgewählt",
    priceLabel: "Exklusiv",
    isPopular: true,
    duration: "ca. 75 Min.",
    features: [
      { title: "Ausführliche Anamnese & Sehprofil", included: true },
      { title: "3D-Wellenfront Augenglasbestimmung (0,01 dpt)", included: true },
      { title: "Binokular-Analyse & Stereosehtest (MKH)", included: true },
      { title: "Hornhaut-Topographie & Tag-/Nachtanalyse", included: true },
      { title: "Ergonomische Gleitsicht- & Arbeitsplatzberatung", included: true },
      { title: "Präzisions-Zentrierung mit digitaler Video-Vermessung", included: true }
    ],
    ctaText: "Meister-Termin buchen"
  },
  {
    id: "klinisch",
    title: "Kontaktlinsen & Spezial-Sehanalyse",
    subtitle: "Individuelle Kontaktlinsenanpassung, Myopie-Management & komplexe Sehlösungen.",
    priceLabel: "Spezial",
    duration: "ca. 90 Min.",
    features: [
      { title: "Kontaktlinsenanpassung (formstabil, weich, Ortho-K)", included: true },
      { title: "Torische & multifokale Gleitsicht-Kontaktlinsen", included: true },
      { title: "Speziallinsen bei trockenen & sensiblen Augen", included: true },
      { title: "Myopie-Management für Kinder & Jugendliche", included: true },
      { title: "Präzise Vorderabschnitt- & Hornhautanalyse", included: true },
      { title: "Regelmäßige Nachkontrollen & Pflegemittelberatung", included: true }
    ],
    ctaText: "Spezialberatung anfragen"
  }
];
