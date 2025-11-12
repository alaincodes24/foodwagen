"use client";
import { Suspense } from "react";
import Footer from "./components/layout/Footer";
import FeaturedMeals from "./components/ui/FeaturedMeals";
import HeroSection from "./components/ui/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={<div className="py-20 text-center text-primary-light">Loading featured meals...</div>}>
        <FeaturedMeals />
      </Suspense>
      <Footer />
    </main>
  );
}
