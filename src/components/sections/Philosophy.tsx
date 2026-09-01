"use client";

import React, { useEffect, useRef } from "react";
import { Award, Microscope, HeartHandshake, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      title: "Meisterbetreuung ohne Kompromisse",
      desc: "Jede Refraktion, Glasberechnung und Zentrierung erfolgt persönlich durch den Augenoptikermeister.",
      icon: <Award size={18} />
    },
    {
      title: "Rodenstock Biometrie-Zentrum",
      desc: "Mit dem DNEye® Scanner erfassen wir die individuelle Anatomie Ihrer Augen für schärfste Kontraste bei Tag und Nacht.",
      icon: <Microscope size={18} />
    },
    {
      title: "Hauseigene Meisterwerkstatt",
      desc: "Wir schleifen, reparieren und veredeln Ihre Brillengläser mit handwerklicher Präzision direkt vor Ort.",
      icon: <Wrench size={18} />
    },
    {
      title: "Fester Ansprechpartner & Service",
      desc: "Kostenlose Brilleninspektionen, Ultraschallreinigungen und Feinanpassungen für die gesamte Lebensdauer Ihrer Brille.",
      icon: <HeartHandshake size={18} />
    }
  ];

  return (
    <section
      id="philosophie"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-16 bg-[#161719] text-[#FAF8F5] overflow-hidden rounded-t-[3.5rem] -mt-[3rem] z-20"
    >
      {/* Background with real studio photo overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/1.jpeg"
          alt="Cammann Optik Studio Hintergrund"
          className="parallax-store absolute w-full h-[120%] object-cover -top-[10%] filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161719] via-[#161719]/90 to-[#161719]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column */}
        <div className="flex-1">
          <div className="phil-text font-mono text-xs uppercase tracking-widest text-[#D13426] mb-6 bg-[#D13426]/15 border border-[#D13426]/30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D13426]" />
            <span>Unsere Handwerks-Philosophie</span>
          </div>

          <h2 className="phil-text font-outfit text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 text-white/50">
            Große Ketten verkaufen Brillen. <br />
            <span className="font-bold text-white">Wir schaffen Lebensqualität.</span>
          </h2>

          <h2 className="phil-text font-serif text-3xl sm:text-4xl md:text-5xl italic leading-tight text-[#D13426] mb-8">
            „Sehen ist Vertrauenssache.“
          </h2>

          <p className="phil-text text-white/75 text-base md:text-lg leading-relaxed font-light mb-8 max-w-lg">
            In Zeiten schneller Online-Shops und unpersönlicher Filialisten setzen wir bei Cammann Optik auf das, was wirklich zählt: Zeit, fundiertes Fachwissen, modernste DNEye® Messtechnik und Brillenunikate mit Seele.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
          <div className="phil-text mb-8">
            <h3 className="text-2xl font-bold font-outfit text-white mb-2">
              Warum Sie bei uns in besten Händen sind
            </h3>
            <p className="text-sm text-white/60 font-light">
              Vier Qualitätsversprechen für Ihren optimalen Sehkomfort:
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((item, i) => (
              <div
                key={i}
                className="phil-text flex items-start gap-4 text-sm bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 hover:border-[#D13426]/40 hover:bg-white/[0.08] transition-all"
              >
                <div className="p-2.5 rounded-xl bg-[#D13426]/20 text-[#D13426] shrink-0 mt-0.5 border border-[#D13426]/30">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-white text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
