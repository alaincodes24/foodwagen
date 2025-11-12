import more from "@/public/images/More.png";
import starIcon from "@/public/images/star.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { FC } from "react";
import { useFoodStore } from "../../store/FoodStore";
import { Food } from "../../types/food";

type FeaturedMealCardProps = {
  food: Food;
};

const FeaturedMealCard: FC<FeaturedMealCardProps> = ({ food }) => {
  const { setSelectedFood, setIsEditModalOpen, setIsDeleteModalOpen } = useFoodStore();

  const handleDelete = async () => {
    setSelectedFood(food);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="flex w-full flex-col gap-y-6">
      <div className="w-full">
        {food.image && (
          <Image
            src={food.image}
            alt={food.name}
            className="h-52 w-full rounded-2xl object-cover md:h-[200px]"
            width={357}
            height={200}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
      </div>
      <div className="flex items-start justify-between gap-x-4">
        <div className="flex gap-x-3">
          <div className="shrink-0">
            <Image
              src={food.logo}
              alt={`${food.name} Logo`}
              className="h-16 w-16 object-cover"
              width={64}
              height={64}
            />
          </div>
          <div className="min-w-0">
            <p className="max-w-40 overflow-hidden text-black line-clamp-1">{food.name}</p>
            <div className="flex items-center gap-x-2">
              <Image src={starIcon} alt="Star Icon" className="h-4 w-4" />
              <p className="text-primary">{food.rating}</p>
            </div>
          </div>
        </div>
        <Menu>
          <MenuButton className="inline-flex items-center justify-center h-fit p-2 -m-2 rounded-full cursor-pointer focus:outline-none">
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
                onClick={() => handleDelete()}
                className="group cursor-pointer text-accent flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-accent/10"
              >
                Delete
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
