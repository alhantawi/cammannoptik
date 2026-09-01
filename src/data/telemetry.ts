import { DiagnosticItem } from "@/types";

export const initialDiagnosticItems: DiagnosticItem[] = [
  { label: "Binokulares Sehen", value: "99.2%", status: "Optimiert", score: 99 },
  { label: "Wellenfront-Aberration", value: "0.04 µm", status: "Kompensiert", score: 96 },
  { label: "Myopie-Progression", value: "Stabil", status: "Kontrolliert", score: 94 },
  { label: "Hornhaut-Topographie", value: "Symm. 43.2D", status: "Erfasst", score: 98 },
  { label: "Tränenfilm-Stabilität (NIBUT)", value: "14.8 s", status: "Ideal", score: 97 }
];

export const telemetryPhrases: string[] = [
  "Analysiere individuelle Sehgewohnheiten & Kopfhaltung...",
  "Optimiere Freiform-Gleitsicht Parameter auf 0.01 dpt...",
  "Kalibriere binokulares Fusions- und Stereoprofil...",
  "Erfasse Nachtmyopie & Kontrastempfindlichkeit...",
  "System bereit für optometrische Meisterprüfung."
];
