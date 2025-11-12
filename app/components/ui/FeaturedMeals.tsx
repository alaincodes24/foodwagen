"use client";

import rightArrow from "@/public/images/right-arrow.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAsync } from "react-async-hook";
import { getFeaturedFood, searchFoodByName } from "../../api/food";
import { useFoodStore } from "../../store/FoodStore";
import Button from "../Button";
import ConfirmFoodDeletionModal from "../ConfirmFoodDeletionModal";
import CenterContent from "../layout/CenterContent";
import FeaturedMealCard from "./FeaturedMealCard";
import FeaturedMealCardSkeleton from "./FeaturedMealSkeleton";

const FeaturedMeals = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name")?.trim() || "";
  const { isFoodStale } = useFoodStore();

  const { result, loading } = useAsync(
    () => (name ? searchFoodByName(name) : getFeaturedFood()),
    [name, isFoodStale]
  );

  return (
    <section className="flex flex-col items-center justify-center text-primary-light">
      <CenterContent className="w-full">
        <h2 className="mt-20 font-bold text-center text-black text-3xl sm:text-[43px] mb-22">
          Featured Meals
        </h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {loading &&
            Array.from({ length: 8 }).map((_, index) => <FeaturedMealCardSkeleton key={index} />)}

          {!loading &&
            result?.map((featuredMeal) => (
              <FeaturedMealCard key={featuredMeal.id} food={featuredMeal} />
            ))}
        </div>
        <div className="flex justify-center mb-20 mt-22">
          <Button className="flex items-center px-12 py-5 gap-x-2">
            <p>Load more</p>
            <Image src={rightArrow} alt="Right Arrow" className="" />
          </Button>
        </div>
        <ConfirmFoodDeletionModal />
      </CenterContent>
    </section>
  );
};

export default FeaturedMeals;
