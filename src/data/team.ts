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
    image: "/Ismaeel_Sheikh_Ali.jpeg",
    quote: "Als heutiger Inhaber und Augenoptikermeister ist es mir eine Herzensangelegenheit, diese lange Tradition weiterzuführen – mit persönlicher Beratung, ehrlichem Handwerk und neuen Ideen.",
    bio: "Cammann Optik gehört seit 1949 zur Augenoptik in Hannover. Wir verbinden traditionelles Handwerk mit moderner Technik und nehmen uns Zeit für Sie, Ihre Augen und Ihre Wünsche. Jede Sehlösung wird bei uns mit meisterlicher Sorgfalt und Leidenschaft geschaffen.",
    specializations: [
      "Augenoptikermeister & Inhaber",
      "Präzise 3D-Augenvermessung & DNEye® Biometrie",
      "Individuelle Gleitsicht-, Arbeitsplatz- & Einstärkengläser",
      "Kontaktlinsenanpassung für Alltag & Sport",
      "Kuratierte Fassungen & Manufakturen (Lunor, Morel, Escada, etc.)",
      "Hauseigene Meisterwerkstatt, Service & Reparaturen"
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
