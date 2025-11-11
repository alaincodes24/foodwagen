import rightArrow from "@/public/images/right-arrow.png";
import Image from "next/image";
import { useAsync } from "react-async-hook";
import { getFeaturedFood } from "../../api/food";
import Button from "../Button";
import CenterContent from "../layout/CenterContent";
import FeaturedMealCard from "./FeaturedMealCard";
import FeaturedMealCardSkeleton from "./FeaturedMealSkeleton";

const FeaturedMeals = () => {
  const { result, loading } = useAsync(getFeaturedFood, []);

  return (
    <section className="flex flex-col items-center justify-center text-primary-light">
      <CenterContent className="w-full">
        <h2 className="mt-20 font-bold text-center text-black text-[43px] mb-22">Featured Meals</h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-16">
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
      </CenterContent>
    </section>
  );
};

export default FeaturedMeals;
