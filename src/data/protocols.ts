import { ProtocolCard } from "@/types";

export const protocolCards: ProtocolCard[] = [
  {
    id: "01",
    title: "Präzise Sehprüfung",
    subtitle: "Individuelle Sehberatung",
    desc: "Die Basis für entspanntes Sehen ist eine absolut exakte Bestimmung Ihrer Sehstärke. Bei Cammann Optik ist die Sehprüfung Chefsache – mit modernster 3D-Wellenfront-Diagnostik und der nötigen Ruhe für eine sorgfältige optometrische Analyse.",
    tag: "Diagnostik & Anamnese",
    features: [
      "Wellenfront-Refraktion mit 0.01 dpt Präzision",
      "Erfassung von Tag- und Nachtkurzsichtigkeit",
      "Hornhauttopographie in Mikrometer-Auflösung"
    ],
    graphicType: "radial"
  },
  {
    id: "02",
    title: "Maßgeschneiderte Linsen",
    subtitle: "Brillen & Kontaktlinsen",
    desc: "Ihre Brille ist ein Statement und Ihr wichtigstes Präzisionswerkzeug. Wir führen handverlesene Manufaktur-Fassungen und berechnen hochkomplexe Gleitsichtgläser abgestimmt auf Ihre Kopf- und Blickneigung im Alltag.",
    tag: "Handwerk & Maßanfertigung",
    features: [
      "Individuelle Freiform-Gleitsichtglasberechnung",
      "Manufaktur-Brillenfassungen aus Titan, Büffelhorn & Acetat",
      "Präzisionszentrierung mit digitaler Video-Vermessung"
    ],
    graphicType: "scan"
  },
  {
    id: "03",
    title: "Myopie & Binokular",
    subtitle: "Klinisches Management",
    desc: "Kopfschmerzen, brennende Augen oder schnelle Ermüdung bei Bildschirmarbeit? Mit einer fundierten MKH-Analyse decken wir Winkelfehlsichtigkeiten auf. Zudem bieten wir klinisch fundierte Myopie-Prävention für Kinder und Jugendliche.",
    tag: "Spezial-Optometrie",
    features: [
      "Mess- und Korrektionsmethodik nach Haase (MKH)",
      "Myopie-Progressionskontrolle & Orthokeratologie",
      "Spezifische Bildschirmarbeitsplatz-Optimierung"
    ],
    graphicType: "wave"
  }
];
