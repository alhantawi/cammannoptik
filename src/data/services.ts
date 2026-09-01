import { ServiceTier } from "@/types";

export const serviceTiers: ServiceTier[] = [
  {
    id: "basis",
    title: "Basis Analyse",
    subtitle: "Klassische Augenglasbestimmung & fachgerechte Fassungsberatung.",
    priceLabel: "Basis",
    duration: "ca. 45 Min.",
    features: [
      { title: "Digitale Sehschärfenbestimmung", included: true },
      { title: "Refraktion für Ferne & Nähe", included: true },
      { title: "Ergonomische Fassungsberatung", included: true },
      { title: "Binokular- & Stereosehen Test", included: false },
      { title: "3D-Wellenfront-Aberrometrie", included: false },
      { title: "Bildschirmarbeitsplatz-Simulation", included: false }
    ],
    ctaText: "Termin anfragen"
  },
  {
    id: "meister",
    title: "Meister-Profil",
    subtitle: "Tiefgehende optometrische Analyse inklusive Binokular-Diagnostik.",
    badge: "Meistgewählt",
    priceLabel: "Exklusiv",
    isPopular: true,
    duration: "ca. 75 Min.",
    features: [
      { title: "Ausführliche Anamnese & Sehprofil", included: true },
      { title: "3D-Wellenfront Augenglasbestimmung", included: true },
      { title: "Binokular-Analyse (Winkelfehlsichtigkeit)", included: true },
      { title: "Hornhaut-Topographie & Tränenfilmanalyse", included: true },
      { title: "Ergonomische Arbeitsplatz-Simulation", included: true },
      { title: "Präzisions-Zentrierung mit Video-Infrarot", included: true }
    ],
    ctaText: "Meister-Termin buchen"
  },
  {
    id: "klinisch",
    title: "Klinisches Management",
    subtitle: "Spezialisiert auf komplexe Sehbedürfnisse, Kinder-Myopie & Speziallinsen.",
    priceLabel: "Spezial",
    duration: "ca. 90 Min.",
    features: [
      { title: "Myopie-Management & Risikoprofiling", included: true },
      { title: "Anpassung formstabiler & Ortho-K Linsen", included: true },
      { title: "Erweiterte Augenvorderabschnitt-Diagnostik", included: true },
      { title: "Begleitung bei visuellen Wahrnehmungsstörungen", included: true },
      { title: "Langzeit-Monitoring & Kontrollintervalle", included: true },
      { title: "Direkter Austausch mit Augenärzten", included: true }
    ],
    ctaText: "Spezialberatung anfragen"
  }
];
