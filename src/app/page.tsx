import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StudioTour } from "@/components/sections/StudioTour";
import { BrandGallery } from "@/components/sections/BrandGallery";
import { TeamSection } from "@/components/sections/TeamSection";
import { FeaturesMicroUI } from "@/components/sections/FeaturesMicroUI";
import { VisionSimulator } from "@/components/sections/VisionSimulator";
import { Philosophy } from "@/components/sections/Philosophy";
import { ProtocolStack } from "@/components/sections/ProtocolStack";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#FAF8F5] dark:bg-[#161719] text-[#161719] dark:text-[#FAF8F5] transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <Hero />
      <StudioTour />
      <TeamSection />
      <FeaturesMicroUI />
      {/* <VisionSimulator /> */}
      <BrandGallery />
      <ProtocolStack />
      {/* <Philosophy /> */}
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
