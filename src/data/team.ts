export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  image: string;
  quote: string;
  bio: string;
  specializations: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ismaeel Sheikh Ali",
    role: "Inhaber & Augenoptikermeister",
    credentials: "Staatlich geprüfter Augenoptiker & Meisterbrief der Handwerkskammer",
    image: "/2.jpeg", // Studio consultation desk atmosphere
    quote: "Gutes Sehen ist das Fundament für Lebensfreude. Bei uns zählt nicht das schnelle Geschäft, sondern die perfekte Sehlösung für Ihren Alltag.",
    bio: "Als Augenoptikermeister verbindet Ismaeel Sheikh Ali moderne biometrische Messtechnik mit handwerklicher Präzision und persönlicher Beratung. Jedes Brillenglas wird in unserer hauseigenen Werkstatt millimetergenau auf Ihre individuellen Sehachsen eingearbeitet.",
    specializations: [
      "Zertifizierter Rodenstock DNEye® Biometrie-Experte",
      "Spezialist für komplexe Freiform-Gleitsichtgläser",
      "Kontaktlinsen-Anpassung & Nachkontrollen",
      "Binokularsehen & Winkelfehlsichtigkeit (MKH)",
      "Typ- & Stilberatung für internationale Manufakturen",
      "Hauseigene Meisterwerkstatt & Reparaturen"
    ]
  }
];

export const trustBadges = [
  {
    title: "5.0 / 5.0 Sterne",
    subtitle: "26 Google Bewertungen",
    badge: "Höchste Kundenzufriedenheit"
  },
  {
    title: "Meisterbetrieb",
    subtitle: "Handwerkskammer Hannover",
    badge: "Geprüfte Qualität"
  },
  {
    title: "Rodenstock Partner",
    subtitle: "Zertifiziertes B.I.G. EXACT Zentrum",
    badge: "0,01-dpt-Messgenauigkeit"
  },
  {
    title: "Hauseigene Werkstatt",
    subtitle: "Vor-Ort Fertigung & Reparatur",
    badge: "Traditionelles Handwerk"
  }
];
