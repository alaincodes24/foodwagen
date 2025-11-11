import more from "@/public/images/More.png";
import starIcon from "@/public/images/star.png";
import Image from "next/image";
import { FC } from "react";
import { Food } from "../../types/food";

type FeaturedMealCardProps = {
  food: Food;
};

const FeaturedMealCard: FC<FeaturedMealCardProps> = ({ food }) => {
  return (
    <div className="max-w-[357px] flex flex-col gap-y-6">
      <div className="">
        {food.image && (
          <Image
            src={food.image}
            alt="Bow Lasagna"
            className="rounded-2xl"
            width={357}
            height={200}
          />
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div>
            <Image src={food.logo} alt="Bow Lasagna Logo" className="" width={64} height={64} />
          </div>
          <div>
            <p className="text-black">{food.name}</p>
            <div className="flex gap-x-2">
              <Image src={starIcon} alt="Star Icon" className="" />
              <p className="text-primary">{food.rating}</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={more} alt="More Icon" className="" />
        </div>
      </div>
      <div>
        <button
          className={`py-2 px-4 rounded-2xl ${
            food.open ? "bg-[#79b93c33] text-[#79b93c]" : "bg-primary text-[#f17228]"
          }`}
        >
          {food.open ? "Open" : "Closed"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedMealCard;
