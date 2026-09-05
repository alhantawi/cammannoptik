"use client";

import React, { useEffect, useRef } from "react";
import { Award, Microscope, HeartHandshake, Wrench, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppointment } from "@/context/AppointmentContext";

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { openBooking } = useAppointment();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".phil-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(".parallax-store", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: 60,
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: "Persönliche Beratung",
      desc: "Wir nehmen uns Zeit für Sie, Ihre Augen und Ihre Wünsche. Bei uns stehen Sie und Ihr Alltag im Mittelpunkt.",
      icon: <Award size={18} />
    },
    {
      title: "Meisterliches Handwerk",
      desc: "Als meistergeführter Betrieb verbinden wir traditionelle Handwerkskunst mit Sorgfalt in unserer hauseigenen Werkstatt.",
      icon: <Wrench size={18} />
    },
    {
      title: "Moderne Technik",
      desc: "Mit zeitgemäßer Messtechnik erfassen wir Ihre exakten Sehwerte als Grundlage für perfekt abgestimmte Gläser.",
      icon: <Microscope size={18} />
    },
    {
      title: "Service, der bleibt",
      desc: "Wir sind auch nach dem Kauf für Sie da: Ob Anpassung, Reinigung, Reparatur oder eine kleine Schraube.",
      icon: <HeartHandshake size={18} />
    }
  ];

  return (
    <section
      id="philosophie"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#FAF8F5] dark:bg-[#161719] text-[#161719] dark:text-[#FAF8F5] overflow-hidden rounded-t-[3.5rem] -mt-[3rem] z-20 transition-colors duration-500 border-t border-[#161719]/5 dark:border-white/5"
    >
      {/* Background with studio photo overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/1.jpeg"
          alt="Cammann Optik Studio Hintergrund"
          className="parallax-store absolute w-full h-[120%] object-cover -top-[10%] filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5] dark:from-[#161719] dark:via-[#161719]/90 dark:to-[#161719]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column */}
        <div className="flex-1">
          <div className="phil-text font-mono text-xs uppercase tracking-widest text-[#D13426] mb-6 bg-[#D13426]/15 border border-[#D13426]/30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D13426]" />
            <span>Unser Versprechen</span>
          </div>

          <h2 className="phil-text font-outfit text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 text-[#161719] dark:text-white">
            Seit 1949. <br />
            <span className="font-bold text-[#161719] dark:text-white">Mit Leidenschaft für gutes Sehen.</span>
          </h2>

          <h3 className="phil-text font-serif text-2xl sm:text-3xl italic leading-tight text-[#161719] dark:text-[#FAF8F5] mb-6 border-l-2 border-[#D13426] pl-4">
            „Persönliche Beratung. Meisterliches Handwerk. Moderne Technik.“
          </h3>

          <p className="phil-text text-[#161719]/80 dark:text-white/80 text-base md:text-lg leading-relaxed font-light mb-6 max-w-lg">
            Bei Cammann Optik stehen Sie im Mittelpunkt. Und vor allem: die Freude daran, für Sie die bestmögliche Lösung zu finden.
          </p>

          <p className="phil-text text-[#D13426] font-outfit text-xl font-bold mb-8">
            Wir freuen uns auf Ihren Besuch.
          </p>

          <div className="phil-text pt-4 border-t border-[#161719]/10 dark:border-white/10">
            <span className="font-mono text-xs text-[#161719]/60 dark:text-white/60 uppercase tracking-widest block mb-1">
              Cammann Optik
            </span>
            <span className="font-outfit text-sm text-[#161719]/90 dark:text-white/90 font-medium">
              Meistergeführte Augenoptik in Hannover seit 1949.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
          <div className="phil-text mb-8">
            <h3 className="text-2xl font-bold font-outfit text-[#161719] dark:text-white mb-2">
              Wofür wir jeden Tag stehen
            </h3>
            <p className="text-sm text-[#161719]/60 dark:text-white/60 font-light">
              Vier Grundpfeiler für Ihr bestes Seherlebnis:
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {pillars.map((item, i) => (
              <div
                key={i}
                className="phil-text flex items-start gap-4 text-sm bg-white dark:bg-white/5 p-4 md:p-5 rounded-2xl border border-[#161719]/10 dark:border-white/10 hover:border-[#D13426]/40 dark:hover:bg-white/[0.08] transition-all shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-[#D13426]/15 text-[#D13426] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#161719] dark:text-white mb-1 font-outfit text-base">
                    {item.title}
                  </h4>
                  <p className="text-[#161719]/70 dark:text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => openBooking("meister")}
            className="phil-text w-full py-4 bg-[#D13426] hover:bg-[#B5281B] text-white rounded-full font-mono text-xs uppercase tracking-wider font-semibold shadow-lg shadow-[#D13426]/20 transition-all cursor-pointer"
          >
            Persönlichen Termin vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
};
