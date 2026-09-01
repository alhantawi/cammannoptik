import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturesMicroUI } from "@/components/sections/FeaturesMicroUI";
import { Philosophy } from "@/components/sections/Philosophy";
import { VisionSimulator } from "@/components/sections/VisionSimulator";
import { ProtocolStack } from "@/components/sections/ProtocolStack";
import { Membership } from "@/components/sections/Membership";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#F2F0E9] overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesMicroUI />
      <Philosophy />
      <VisionSimulator />
      <ProtocolStack />
      <Membership />
      <FaqSection />
      <Footer />
    </main>
  );
}
