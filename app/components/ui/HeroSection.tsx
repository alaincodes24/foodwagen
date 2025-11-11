import CenterContent from "../layout/CenterContent";
import Image from "next/image";
import heroImage from "@/public/images/food-hero.png";
import deliveryIcon from "@/public/images/delivery.png";
import pickupIcon from "@/public/images/pickup.png";
import searchIcon from "@/public/images/meal-search.png";
import findMealIcon from "@/public/images/meal-search.png";
import { useState } from "react";

const HeroSection = () => {
	const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
	const [searchedMeal, setSearchedMeal] = useState("");
	
	return (
		<section className="bg-primary  flex flex-col  items-center justify-center text-white">
			<CenterContent className="flex items-center relative h-[628px] w-full">
				<div className="flex-1 relative">
					<h1 className="text-7xl font-bold">Are you starving?</h1>
					<p className="mt-3 text-2xl">
						Within a few clicks, find meals that are accessible near you
					</p>
					<div className="mt-8 max-w-[856px] bg-primary-light py-6 rounded-2xl">
						<div className="px-6">
							<div className="inline-flex gap-x-2 bg-white/10 rounded-lg overflow-hidden">
								<button
									type="button"
									onClick={() => setMode("delivery")}
									className={`px-6 py-3 flex items-center gap-x-2 text-lg rounded-lg transition ${
										mode === "delivery"
											? "bg-[#fce3d6] text-[#f17228]"
											: "text-[#757575]"
									}`}
								>
									<Image src={deliveryIcon} alt="Delivery Icon" width={23} height={18} />
									<span>Delivery</span>
								</button>
								<button
									type="button"
									onClick={() => setMode("pickup")}
									className={`px-6 py-3 flex items-center gap-x-2 text-lg rounded-lg transition ${
										mode === "pickup" ? "bg-[#fce3d6] text-[#f17228]" : "text-[#757575]"
									}`}
								>
									<Image src={pickupIcon} alt="Pickup Icon" width={16} height={18} />
									<span>Pickup</span>
								</button>
							</div>
						</div>
						<div className="mt-6 px-6">
							<div className="flex items-center gap-x-4 rounded-2xl pr-3 h-[72px]">
								<div className="flex items-center gap-x-3 flex-1 bg-app-gray rounded-lg h-[56px] px-4">
									<Image src={searchIcon} alt="Search Icon" width={24} height={24} />
									<input
										type="text"
										value={searchedMeal}
										onChange={(e) => setSearchedMeal(e.target.value)}
										placeholder="What do you like to eat today?"
										className="w-full outline-none text-black placeholder:text-black/50 bg-transparent h-12 rounded-xl"
									/>
								</div>
								<button
									type="button"
									className="bg-[#ff7a50] hover:bg-[#ff6a3a] transition text-white h-[56px] px-6 rounded-lg flex items-center gap-x-2"
								>
									<Image src={findMealIcon} alt="Find Meal Icon" width={18} height={18} color="white" />
									<span className="font-semibold">Find Meal</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<Image
					src={heroImage}
					alt="Hero image"
					className="absolute h-[500px] object-contain -bottom-6 right-[60px]"
				/>
			</CenterContent>
		</section>
	);
};

export default HeroSection;
