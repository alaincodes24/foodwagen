"use client";
import { useAsync } from "react-async-hook";
import { getFeaturedFood } from "./api/food";
import FeaturedMeals from "./components/ui/FeaturedMeals";
import HeroSection from "./components/ui/HeroSection";

export default function Home() {
  const { result } = useAsync(getFeaturedFood, []);

  return (
    <main>
      <HeroSection />
      <FeaturedMeals />
    </main>
  );
}
