"use client";

import HeroSection from "@/app/components/home/HeroSection";
import MissionSection from "@/app/components/home/MissionSection";
import AboutSection from "@/app/components/home/AboutSection";
import ProgramsSection from "@/app/components/home/ProgramsSection";
import GallerySection from "@/app/components/home/GallerySection";
import TestimonialSection from "@/app/components/home/TestimonialSection";
import CTASection from "@/app/components/home/CTASection";
import FooterSection from "@/app/components//Footer";
import Header from "@/app/components/Header";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden bg-white text-neutralDark">
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
