import Image from "next/image";
import CenterContent from "../layout/CenterContent";
import FeaturedMealCard from "./FeaturedMealCard";
import rightArrow from "@/public/images/right-arrow.png";
import bowLasagna from "@/public/images/bow-lasagna.png";
import bowLasagnaLogo from "@/public/images/bow-lasagna-logo.png";
import Button from "../Button";


const featuredMealsData = [
  {
    id: 1,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Bow Lasagna",
    starCount: 4.6,
    isOpen: false
  },
   {
    id: 2,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Mixed Avocado Smoothy",
    starCount: 4.0,
    isOpen: false
  },
   {
    id: 3,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Pancake",
    starCount: 5,
    isOpen: true
  },
   {
    id: 4,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Cupcake",
    starCount: 4.6,
    isOpen: true
  },
   {
    id: 5,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Creamy Stake",
    starCount: 4.5,
    isOpen: true
  },
   {
    id: 6,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Stake with Potatos",
    starCount: 5,
    isOpen: true
  },
   {
    id: 7,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Indian Spicy Soup",
    starCount: 4.5,
    isOpen: true
  },
   {
    id: 8,
    mainImage: bowLasagna,
    logoImage: bowLasagnaLogo,
    title: "Stake Omlet",
    starCount: 4.9,
    isOpen: true
  }
];

const FeaturedMeals = () => {
	return (
		<section className="bg-primary-  flex flex-col  items-center justify-center text-white">
			<CenterContent className="w-full">
				<h2 className="text-[43px] text-black font-bold mb-22 mt-20 text-center">
					Featured Meals
				</h2>
				<div className="grid grid-cols-4 gap-x-4 gap-y-16">
					{featuredMealsData.map(featuredMeal => (
						<FeaturedMealCard key={featuredMeal.id} featuredMeal={featuredMeal} />
					))}
				</div>
				<div className="flex justify-center mt-22 mb-20">
					<Button className="px-12 py-5 flex items-center gap-x-2">
						<p>Load more</p>
						<Image src={rightArrow} alt="Right Arrow" className="" />
					</Button>
				</div>
			</CenterContent>
		</section>
	);
};

export default FeaturedMeals;
