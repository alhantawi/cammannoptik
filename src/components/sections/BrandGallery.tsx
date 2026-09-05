"use client";

import React from "react";
import { eyewearBrands } from "@/data/brands";
import { Sparkles, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { LogoLoop, LogoItem } from "@/components/ui/LogoLoop";

export const BrandGallery: React.FC = () => {
  const { openBooking } = useAppointment();

  const brandLogos: LogoItem[] = [
    {
      src: "/Maui_Jim_logo.svg",
      alt: "Maui Jim Sunglasses & Polarized Eyewear",
      title: "Maui Jim"
    },
    {
      src: "/lunor_logo_white.png",
      alt: "Lunor Brillenmanufaktur Deutschland",
      title: "Lunor"
    },
    {
      src: "/Rodenstock_(Unternehmen)_Logo.svg.webp",
      alt: "Rodenstock B.I.G. EXACT Biometrie",
      title: "Rodenstock"
    },
    {
      src: "/escada_logo.svg",
      alt: "ESCADA Haute Couture Eyewear",
      title: "ESCADA"
    },
    {
      src: "/morel_logo.svg",
      alt: "MOREL Paris 1880 Manufaktur",
      title: "MOREL Paris"
    }
  ];

  return (
    <section id="marken" className="py-24 px-6 md:px-16 bg-[#FAF8F5] dark:bg-[#161719] text-[#161719] dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D13426]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D13426] bg-[#D13426]/15 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-3">
            <Sparkles size={13} />
            <span>Brillen & Fassungen • Persönliche Stilberatung & Manufakturen</span>
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Ihre Brille. <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#161719] dark:text-[#FAF8F5]">
              Ihr Stil.
            </span>
          </h2>
          <p className="text-[#161719]/75 dark:text-white/75 text-base sm:text-lg font-light leading-relaxed">
            Eine Brille soll nicht nur gutes Sehen ermöglichen – sie soll auch zu Ihnen passen. Bei uns finden Sie sorgfältig ausgewählte Fassungen: von klassisch und zeitlos bis modern, farbenfroh und außergewöhnlich. Gemeinsam finden wir die Brille, mit der Sie sich wohlfühlen.
          </p>
        </div>

        {/* Logo Loop Marquee Banner */}
        <div className="py-6 px-0 mb-16 rounded-3xl bg-white dark:bg-white/[0.03] border border-[#161719]/10 dark:border-white/10 backdrop-blur-sm overflow-hidden relative shadow-sm transition-colors duration-500">
          <div className="text-center mb-4 px-4">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#161719]/60 dark:text-white/50">
              Kuratierte Manufakturmarken im Meisterstudio
            </span>
          </div>
          <div className="[&_img]:brightness-0 [&_img]:opacity-75 hover:[&_img]:opacity-100 dark:[&_img]:invert dark:[&_img]:opacity-75 dark:hover:[&_img]:opacity-100 [&_svg]:text-[#161719] dark:[&_svg]:text-white transition-opacity">
            <LogoLoop
              logos={brandLogos}
              speed={45}
              direction="left"
              logoHeight={32}
              gap={54}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeWidth={140}
              blurStrength={8}
              ariaLabel="Partner-Manufakturen von Cammann Optik"
            />
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {eyewearBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-[#161719]/10 dark:border-white/10 hover:border-[#D13426]/60 dark:hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#D13426] font-bold bg-[#D13426]/15 px-3 py-1 rounded-full">
                    {brand.origin}
                  </span>
                  <span className="font-mono text-xs text-[#161719]/50 dark:text-white/40">
                    {brand.category}
                  </span>
                </div>

                <h3 className="font-outfit text-3xl font-extrabold text-[#161719] dark:text-white mb-2 group-hover:text-[#D13426] transition-colors">
                  {brand.name}
                </h3>

                <p className="font-serif italic text-lg text-[#161719]/90 dark:text-white/90 mb-4">
                  „{brand.tagline}“
                </p>

                <p className="text-sm text-[#161719]/70 dark:text-white/70 font-light leading-relaxed mb-6">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#161719]/10 dark:border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono text-[#161719]/50 dark:text-white/50">Im Studio vorrätig</span>
                <button
                  onClick={() => openBooking("basis")}
                  className="text-xs font-mono uppercase tracking-wider text-[#D13426] group-hover:text-[#161719] dark:group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Modelle anprobieren</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}

          {/* Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-[#D13426] to-[#A32215] rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full inline-block mb-6">
                Persönliche Stil- & Typberatung
              </span>
              <h3 className="font-outfit text-3xl font-extrabold mb-3">
                Gemeinsam zur Wohlfühl-Brille.
              </h3>
              <p className="text-sm text-white/90 font-light leading-relaxed mb-6">
                Welche Fassungsform unterstreicht Ihre Persönlichkeit und passt zu Ihren Gesichtszügen? Wir nehmen uns Zeit und beraten Sie entspannt bei einer Tasse Espresso in unserer Studio-Lounge.
              </p>
            </div>

            <button
              onClick={() => openBooking("basis")}
              className="w-full py-3.5 bg-white text-[#161719] hover:bg-[#FAF8F5] rounded-full text-xs font-semibold uppercase tracking-wider font-mono shadow-lg transition-colors cursor-pointer"
            >
              Fassungsberatung buchen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
