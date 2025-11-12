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
    <section className="flex flex-col items-center justify-center bg-primary text-white">
      <CenterContent className="relative flex w-full flex-col items-center gap-12 py-16 lg:h-[628px] lg:flex-row lg:items-center lg:gap-0">
        <div className="relative flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">Are you starving?</h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className="mt-8 w-full max-w-[856px] rounded-2xl bg-primary-light py-6">
            <div className="px-6">
              <div className="inline-flex gap-x-2 overflow-hidden rounded-lg bg-white/10">
                <button
                  type="button"
                  onClick={() => setMode("delivery")}
                  className={`flex items-center gap-x-2 rounded-lg px-6 py-3 text-base sm:text-lg transition ${
                    mode === "delivery" ? "bg-[#fce3d6] text-[#f17228]" : "text-[#757575]"
                  }`}
                >
                  <Image src={deliveryIcon} alt="Delivery Icon" width={23} height={18} />
                  <span>Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode("pickup")}
                  className={`flex items-center gap-x-2 rounded-lg px-6 py-3 text-base sm:text-lg transition ${
                    mode === "pickup" ? "bg-[#fce3d6] text-[#f17228]" : "text-[#757575]"
                  }`}
                >
                  <Image src={pickupIcon} alt="Pickup Icon" width={16} height={18} />
                  <span>Pickup</span>
                </button>
              </div>
            </div>
            <div className="px-6 mt-6">
              <div className="flex flex-col items-stretch gap-4 pr-0 sm:flex-row sm:items-center sm:gap-4 sm:pr-3">
                <div className="flex h-14 flex-1 items-center gap-x-3 rounded-lg bg-app-gray px-4">
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
                    className="h-12 w-full rounded-xl bg-transparent text-black outline-none placeholder:text-black/50"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex h-14 w-full items-center justify-center gap-x-2 rounded-lg bg-[#ff7a50] px-6 text-base font-semibold transition hover:bg-[#ff6a3a] sm:w-auto sm:text-lg"
                >
                  <Image
                    src={searchIcon}
                    alt="Find Meal Icon"
                    width={18}
                    height={18}
                    color="white"
                  />
                  <span>Find Meal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Hero image"
          className="hidden h-[480px] max-w-none object-contain lg:absolute lg:-bottom-6 lg:right-[60px] lg:block xl:h-[500px]"
          priority
        />
      </CenterContent>
    </section>
  );
};

export default HeroSection;
