import { DiagnosticItem } from "@/types";

export const initialDiagnosticItems: DiagnosticItem[] = [
  { label: "Messgenauigkeit", value: "0,01 dpt", status: "DNEye® Exakt", score: 99 },
  { label: "Tag- & Nachtsehen", value: "Pupillengröße", status: "Optimiert", score: 98 },
  { label: "Beidäugiges Sehen (MKH)", value: "Binokular", status: "Harmonisch", score: 97 },
  { label: "Hornhaut-Geometrie", value: "3D-Erfasst", status: "Maßgefertigt", score: 98 },
  { label: "Tränenfilm- & Kontaktlinsenprofil", value: "Individuell", status: "Abgestimmt", score: 96 }
];

export const telemetryPhrases: string[] = [
  "Erfasse individuelle Augenparameter & Hornhautgeometrie...",
  "Berechne Rodenstock B.I.G. EXACT™ Freiform-Gleitsichtprofil...",
  "Optimiere Kontrast- und Nachtsehen für blendfreie Fahrten...",
  "Passe torische & multifokale Kontaktlinsen exakt an...",
  "Meisterlabor bereit für handwerkliche Präzisionsfertigung."
];
