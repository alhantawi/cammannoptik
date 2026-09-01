"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, Award, UserCheck, Microscope, HeartHandshake } from "lucide-react";
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

      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: 80,
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: "Meisterbetreuung ohne Ausnahme",
      desc: "Jede Refraktion, Beratung und Anpassung erfolgt persönlich durch den Augenoptikermeister.",
      icon: <Award size={18} />
    },
    {
      title: "Modernste 3D-Wellenfront-Messtechnik",
      desc: "Wir erfassen die optische Beschaffenheit Ihrer Hornhaut auf 0.01 dpt genau.",
      icon: <Microscope size={18} />
    },
    {
      title: "Spezialisierung auf Binokularsehen & Myopie",
      desc: "Ganzheitliche Analysen zur Entlastung bei Bildschirmstress und gezielte Kinder-Optometrie.",
      icon: <UserCheck size={18} />
    },
    {
      title: "Fester Ansprechpartner & lebenslanger Service",
      desc: "Keine wechselnden Verkäufer – wir begleiten Ihre Sehkraft über Jahrzehnte hinweg.",
      icon: <HeartHandshake size={18} />
    }
  ];

  return (
    <section
      id="philosophie"
      ref={sectionRef}
      className="relative py-36 px-6 md:px-16 bg-[#1A1A1A] text-[#F2F0E9] overflow-hidden rounded-t-[3.5rem] -mt-[3rem] z-20"
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop"
          alt="Organische Textur & Handwerkskunst"
          className="parallax-bg absolute w-full h-[120%] object-cover -top-[10%]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Col: Brand Manifest */}
        <div className="flex-1">
          <div className="phil-text font-mono text-xs uppercase tracking-widest text-[#2E4036] mb-8 bg-[#2E4036]/30 border border-[#2E4036]/50 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Das Cammann Manifest</span>
          </div>

          <h2 className="phil-text font-outfit text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 text-white/50">
            Standard-Optik fragt: <br />
            <span className="font-semibold text-white">„Was ist Ihre Dioptrie?“</span>
          </h2>

          <h2 className="phil-text font-serif text-4xl sm:text-5xl md:text-6xl italic leading-tight text-[#CC5833] mb-8">
            Wir fragen: <br />
            „Was ist Ihr perfekter Sehkomfort?“
          </h2>

          <p className="phil-text text-white/70 text-base md:text-lg leading-relaxed font-light mb-8 max-w-lg">
            Wir glauben, dass gutes Sehen Zeit und echtes Handwerk erfordert. Bei Cammann Optik sind Sie nicht einfach nur ein Kunde – Sie sind unser Gast. Wir setzen auf individuelle Sehlösungen statt auf schnelle Massenabfertigung.
          </p>
        </div>

        {/* Right Col: 4 Quality Pillars */}
        <div className="flex-1 w-full">
          <div className="phil-text mb-8">
            <h3 className="text-2xl font-bold font-outfit text-white mb-2">
              Klasse statt Masse: Ihr Vorteil
            </h3>
            <p className="text-sm text-white/60 font-light">
              Vier Grundpfeiler, die jeden Besuch bei uns zu einem Erlebnis machen:
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((item, i) => (
              <div
                key={i}
                className="phil-text flex items-start gap-4 text-sm bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 hover:border-[#2E4036] hover:bg-white/[0.07] transition-all"
              >
                <div className="p-2.5 rounded-xl bg-[#2E4036]/60 text-[#CC5833] shrink-0 mt-0.5 border border-[#2E4036]">
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
