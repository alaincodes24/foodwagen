import Image from "next/image";
import starIcon from "@/public/images/star.png";
import more from "@/public/images/More.png";

const FeaturedMealCard = ({ featuredMeal }) => {
	return (
		<div className="max-w-[357px] flex flex-col gap-y-6">
			<div className="">
				<Image src={featuredMeal.mainImage} alt="Bow Lasagna" className="rounded-2xl" />
			</div>
			<div className="flex justify-between">
				<div className="flex gap-x-3">
					<div>
						<Image
							src={featuredMeal.logoImage}
							alt="Bow Lasagna Logo"
							className=""
							width={64}
							height={64}
						/>
					</div>
					<div>
						<p className="text-black">{featuredMeal.title}</p>
						<div className="flex gap-x-2">
							<Image src={starIcon} alt="Star Icon" className="" />
							<p className="text-primary">{featuredMeal.starCount}</p>
						</div>
					</div>
				</div>
				<div>
					<Image src={more} alt="More Icon" className="" />
				</div>
			</div>
			<div>
				<button className={`py-2 px-4 rounded-2xl ${featuredMeal.isOpen ? 'bg-[#79b93c33] text-[#79b93c]' : 'bg-primary text-[#f17228]'}`}>
					{featuredMeal.isOpen ? 'Open' : 'Closed'}
				</button>
			</div>
		</div>
	);
};

export default FeaturedMealCard;
