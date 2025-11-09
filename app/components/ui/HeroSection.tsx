import CenterContent from "../layout/CenterContent";
import Image from "next/image";
import heroImage from "@/public/images/food-hero.png";

const HeroSection = () => {
	return (
		<section className="bg-primary  flex flex-col  items-center justify-center text-white">
			<CenterContent className="flex items-center relative h-[628px] w-full">
				<div className="flex-1 relative">
					<h1 className="text-7xl font-bold">Are you starving?</h1>
					<p className="mt-3 text-2xl">
						Within a few clicks, find meals that are accessible near you
					</p>
					<div className="mt-8 max-w-[856px] bg-primary-light py-6 rounded-2xl"></div>
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
