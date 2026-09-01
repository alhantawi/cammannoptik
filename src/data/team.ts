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
    name: "Shaikh Ali",
    role: "Inhaber & Augenoptikermeister",
    credentials: "Staatlich geprüfter Augenoptiker & Meisterbrief der Handwerkskammer",
    image: "/2.jpeg", // Studio consultation desk atmosphere
    quote: "Gutes Sehen ist das Fundament für Lebensfreude. Bei uns zählt nicht das schnelle Geschäft, sondern die perfekte Sehlösung für Ihren Alltag.",
    bio: "Mit über 15 Jahren Erfahrung in der klinischen Optometrie und Refraktion verbindet Herr Ali modernste biometrische 3D-Messtechnik mit klassischer handwerklicher Präzision. Jedes Brillenglas wird in unserer hauseigenen Werkstatt millimetergenau auf die individuellen Sehachsen eingearbeitet.",
    specializations: [
      "Zertifizierter Rodenstock DNEye® Biometrie-Experte",
      "Spezialist für komplexe Freiform-Gleitsichtgläser",
      "Binokularsehen & Winkelfehlsichtigkeit (MKH)",
      "Typ- & Stilberatung für internationale Manufakturen"
    ]
  }
];

export const trustBadges = [
  {
    title: "5.0 / 5.0 Sterne",
    subtitle: "26 Google Bewertungen",
    badge: "100% Weiterempfehlung"
  },
  {
    title: "Meisterbetrieb",
    subtitle: "Handwerkskammer Hannover",
    badge: "Geprüfte Qualität"
  },
  {
    title: "Rodenstock Partner",
    subtitle: "Zertifiziertes B.I.G. EXACT Zentrum",
    badge: "0.01 dpt Präzision"
  },
  {
    title: "Hauseigene Werkstatt",
    subtitle: "Vor-Ort Fertigung & Reparatur",
    badge: "Traditionelles Handwerk"
  }
];
