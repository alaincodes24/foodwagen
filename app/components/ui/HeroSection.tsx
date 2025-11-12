import deliveryIcon from "@/public/images/delivery.png";
import heroImage from "@/public/images/food-hero.png";
import searchIcon from "@/public/images/meal-search.png";
import pickupIcon from "@/public/images/pickup.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import CenterContent from "../layout/CenterContent";

const HeroSection = () => {
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [searchedMeal, setSearchedMeal] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
    const q = searchedMeal.trim();
    if (q) {
      router.push(`${pathname}?name=${encodeURIComponent(q)}`);
    } else {
      router.push(pathname);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-white bg-primary">
      <CenterContent className="relative flex items-center w-full h-[628px]">
        <div className="relative flex-1">
          <h1 className="font-bold text-7xl">Are you starving?</h1>
          <p className="mt-3 text-2xl">
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className="py-6 mt-8 max-w-[856px] bg-primary-light rounded-2xl">
            <div className="px-6">
              <div className="inline-flex overflow-hidden rounded-lg gap-x-2 bg-white/10">
                <button
                  type="button"
                  onClick={() => setMode("delivery")}
                  className={`px-6 py-3 flex items-center gap-x-2 text-lg rounded-lg transition ${
                    mode === "delivery" ? "bg-[#fce3d6] text-[#f17228]" : "text-[#757575]"
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
            <div className="px-6 mt-6">
              <div className="flex items-center pr-3 gap-x-4 rounded-2xl h-[72px]">
                <div className="flex items-center flex-1 px-4 rounded-lg gap-x-3 bg-app-gray h-14">
                  <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
                  <input
                    type="text"
                    value={searchedMeal}
                    onChange={(e) => setSearchedMeal(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSearch();
                      }
                    }}
                    placeholder="What do you like to eat today?"
                    className="w-full h-12 text-black bg-transparent outline-none placeholder:text-black/50 rounded-xl"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="bg-[#ff7a50] hover:bg-[#ff6a3a] transition text-white h-14 px-6 rounded-lg flex items-center gap-x-2"
                >
                  <Image
                    src={searchIcon}
                    alt="Find Meal Icon"
                    width={18}
                    height={18}
                    color="white"
                  />
                  <span className="font-semibold">Find Meal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Hero image"
          className="absolute object-contain h-[500px] -bottom-6 right-[60px]"
        />
      </CenterContent>
    </section>
  );
};

export default HeroSection;
