import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { AppointmentProvider } from "@/context/AppointmentContext";
import { ThemeProvider } from "@/context/ThemeContext";
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
  metadataBase: new URL("https://www.cammannoptik.de"),
  title: "Cammann Optik Hannover | Ihr Augenoptikermeister für biometrisches Sehen",
  description:
    "Ihr inhabergeführter Augenoptikermeister in Hannover. Persönliche Sehberatung, biometrische DNEye® Augenvermessung, maßgefertigte Gleitsichtbrillen, Kontaktlinsen und handverlesene Manufakturfassungen von Lunor, Morel & Maui Jim.",
  keywords: [
    "Optiker Hannover",
    "Augenoptikermeister Ismaeel Sheikh Ali",
    "Cammann Optik Hannover",
    "Rodenstock DNEye Scanner",
    "Lunor Brillen Hannover",
    "Biometrische Brillengläser",
    "Gleitsichtbrille Meister",
    "Kontaktlinsen Anpassung Hannover",
    "Führerschein Sehtest Hannover",
    "Königstraße Hannover Optiker"
  ],
  authors: [{ name: "Ismaeel Sheikh Ali - Cammann Optik" }],
  alternates: {
    canonical: "https://www.cammannoptik.de/"
  },
  openGraph: {
    title: "Cammann Optik Hannover | Ihr Augenoptikermeister",
    description:
      "Persönliche Sehberatung, biometrische 3D-Augenvermessung und hochwertige Brillen – individuell für Sie gefertigt in Hannover.",
    url: "https://www.cammannoptik.de",
    siteName: "Cammann Optik Hannover",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/2.jpeg",
        width: 1200,
        height: 630,
        alt: "Cammann Optik Hannover – Meisterstudio für biometrische Augenoptik"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cammann Optik Hannover | Ihr Augenoptikermeister",
    description: "Persönliche Sehberatung, biometrische Augenvermessung & handwerkliche Präzision in Hannover.",
    images: ["/2.jpeg"]
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg"
  }
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["Optician", "LocalBusiness"],
  "@id": "https://www.cammannoptik.de/#optician",
  name: "Cammann Optik",
  image: "https://www.cammannoptik.de/2.jpeg",
  url: "https://www.cammannoptik.de",
  telephone: "+49511343628",
  email: "kundenservice@cammannoptik.de",
  priceRange: "€€",
  founder: {
    "@type": "Person",
    name: "Ismaeel Sheikh Ali",
    jobTitle: "Augenoptikermeister"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Königstraße 44",
    addressLocality: "Hannover",
    postalCode: "30175",
    addressRegion: "Niedersachsen",
    addressCountry: "DE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3759,
    longitude: 9.7490
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      description: "Termine ausschließlich nach vorheriger Vereinbarung"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Biometrische Sehanalyse (Rodenstock DNEye®)"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Freiform-Gleitsichtgläser & Bildschirmarbeitsplatzbrillen"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Individuelle Kontaktlinsenanpassung & Nachkontrollen"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Führerschein-Sehtest (amtlich anerkannt)"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hauseigene Meisterwerkstatt & Brillenreparaturen"
        }
      }
    ]
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
      suppressHydrationWarning
      className={`${outfit.variable} ${cormorant.variable} ${plusJakarta.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('cammann_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#FAF8F5] dark:bg-[#161719] text-[#161719] dark:text-[#FAF8F5] font-jakarta selection:bg-[#D13426] selection:text-white min-h-screen relative transition-colors duration-300">
        <ThemeProvider>
          <AppointmentProvider>
            <NoiseOverlay />
            {children}
            <AppointmentModal />
            <WhatsAppButton />
          </AppointmentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
