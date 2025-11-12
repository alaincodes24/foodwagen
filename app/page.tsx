"use client";
import Footer from "./components/layout/Footer";
import FeaturedMeals from "./components/ui/FeaturedMeals";
import HeroSection from "./components/ui/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedMeals />
      <Footer />
    </main>
  );
}
