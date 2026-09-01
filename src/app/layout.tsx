import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { AppointmentProvider } from "@/context/AppointmentContext";
import { AppointmentModal } from "@/components/ui/AppointmentModal";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

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
  title: "CAMMANN Optik | Meisterbetrieb für Augenoptik & 3D-Wellenfront",
  description:
    "Exzellentes Sehen ist keine Frage des Standards, sondern der Persönlichkeit. Modernste 3D-Wellenfront-Refraktion, Binokularanalyse und handgefertigte Brillenfassungen in Hannover.",
  keywords: [
    "Optiker Hannover",
    "Augenoptikermeister",
    "Wellenfront Sehprüfung",
    "Binokularsehen MKH",
    "Myopie Management",
    "Gleitsichtbrillen Manufaktur",
    "Cammann Optik"
  ],
  authors: [{ name: "CAMMANN Optik" }],
  openGraph: {
    title: "CAMMANN Optik | Meisterbetrieb für ganzheitliche Augenoptik",
    description:
      "Wir verbinden modernste 3D-Messtechnik mit handwerklicher Meisterqualität für Ihr perfektes Seherlebnis.",
    url: "https://cammann-optik.de",
    siteName: "CAMMANN Optik",
    locale: "de_DE",
    type: "website"
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
      <body className="bg-[#F2F0E9] text-[#1A1A1A] font-jakarta selection:bg-[#2E4036] selection:text-white min-h-screen relative">
        <AppointmentProvider>
          <NoiseOverlay />
          {children}
          <AppointmentModal />
        </AppointmentProvider>
      </body>
    </html>
  );
}
