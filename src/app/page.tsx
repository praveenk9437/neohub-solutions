import type { Metadata } from "next";
import HeroSection from "@/sections/home/HeroSection";
import MetricsBar from "@/sections/home/MetricsBar";
import WhoWeAre from "@/sections/home/WhoWeAre";
import ServicesOverview from "@/sections/home/ServicesOverview";
import IndustriesSection from "@/sections/home/IndustriesSection";
import TechEcosystem from "@/sections/home/TechEcosystem";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import SuccessStories from "@/sections/home/SuccessStories";
import CTASection from "@/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Neohub Solutions | AI, Data, Cloud & Digital Transformation Consulting",
  description:
    "Neohub Solutions empowers enterprises with intelligent AI, Data, Cloud, and Digital Transformation solutions. Headquartered in Cary, NC, serving clients globally.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <WhoWeAre />
      <ServicesOverview />
      <IndustriesSection />
      <TechEcosystem />
      <WhyChooseUs />
      <SuccessStories />
      <CTASection />
    </>
  );
}
