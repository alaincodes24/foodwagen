import more from "@/public/images/More.png";
import starIcon from "@/public/images/star.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { FC } from "react";
import { useAsyncCallback } from "react-async-hook";
import { deleteFood } from "../../api/food";
import { useFoodStore } from "../../store/FoodStore";
import { Food } from "../../types/food";

type FeaturedMealCardProps = {
  food: Food;
};

const FeaturedMealCard: FC<FeaturedMealCardProps> = ({ food }) => {
  const { execute, loading } = useAsyncCallback(deleteFood);
  const { setSelectedFood, setIsEditModalOpen, setIsFoodStale, isFoodStale } = useFoodStore();

  const handleDelete = async () => {
    await execute(food.id);
    setIsFoodStale(!isFoodStale);
  };

  return (
    <div className="max-w-[357px] flex flex-col gap-y-6">
      <div className="">
        {food.image && (
          <Image
            src={food.image}
            alt="Bow Lasagna"
            className="rounded-2xl object-cover w-[357px] h-[200px]"
            width={357}
            height={200}
          />
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div>
            <Image
              src={food.logo}
              alt="Bow Lasagna Logo"
              className="w-16 h-16 object-cover"
              width={64}
              height={64}
            />
          </div>
          <div>
            <p className="text-black line-clamp-1 max-w-40 overflow-hidden">{food.name}</p>
            <div className="flex gap-x-2">
              <Image src={starIcon} alt="Star Icon" className="" />
              <p className="text-primary">{food.rating}</p>
            </div>
          </div>
        </div>
        <Menu>
          <MenuButton className="h-fit">
            <Image src={more} alt="More Icon" />
          </MenuButton>
          <MenuItems
            transition
            anchor="left start"
            className="w-20 outline-none bg-white mt-5  z-10 origin-top-right rounded-xl border border-slate-200 p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:--spacing(1)]"
          >
            <MenuItem>
              <button
                className="flex cursor-pointer w-full items-center rounded-lg px-3 py-1.5 hover:bg-primary/10"
                onClick={() => {
                  setIsEditModalOpen(true);
                  setSelectedFood(food);
                }}
              >
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button
                disabled={loading}
                onClick={() => handleDelete()}
                className="group cursor-pointer text-accent flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-accent/10"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div>
        <button
          className={`py-2 px-4 rounded-2xl ${
            food.open ? "bg-[#79b93c33] text-app-green" : "bg-primary text-[#f17228]"
          }`}
        >
          {food.open ? "Open" : "Closed"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedMealCard;
