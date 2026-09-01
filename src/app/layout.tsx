import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { AppointmentProvider } from "@/context/AppointmentContext";
import { AppointmentModal } from "@/components/ui/AppointmentModal";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Cammann Optik Hannover | Meisterbetrieb für biometrische Augenoptik",
  description:
    "Inhabergeführter Meisterbetrieb für biometrische 3D-Augenglasbestimmung (Rodenstock DNEye®), handgefertigte Designerfassungen (Lunor, Maui Jim, Escada, Morel) und persönliche Sehanalysen in Hannover.",
  keywords: [
    "Optiker Hannover",
    "Augenoptikermeister Shaikh Ali",
    "Cammann Optik Hannover",
    "Rodenstock DNEye Scanner",
    "Lunor Brillen Hannover",
    "Biometrische Brillengläser",
    "Gleitsichtbrille Meister"
  ],
  authors: [{ name: "Cammann Optik" }],
  openGraph: {
    title: "Cammann Optik Hannover | Meisterbetrieb für biometrische Augenoptik",
    description:
      "Wir verbinden modernste 3D-Messtechnik mit handwerklicher Meisterqualität für Ihr perfektes Seherlebnis.",
    url: "https://cammann-optik.de",
    siteName: "Cammann Optik",
    locale: "de_DE",
    type: "website"
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${outfit.variable} ${cormorant.variable} ${plusJakarta.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#FAF8F5] text-[#161719] font-jakarta selection:bg-[#D13426] selection:text-white min-h-screen relative">
        <AppointmentProvider>
          <NoiseOverlay />
          {children}
          <AppointmentModal />
          <WhatsAppButton />
        </AppointmentProvider>
      </body>
    </html>
  );
}
