"use client";
import Image from "next/image";
import { useState } from "react";
import AddFoodModal from "../AddFoodModal";
import Button from "../Button";
import CenterContent from "./CenterContent";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddMealModal = () => setIsModalOpen(true);
  const closeAddMealModal = () => setIsModalOpen(false);

  return (
    <header className="p-4">
      <CenterContent className="flex justify-between items-center">
        <Image src="/images/logo.png" alt="FoodWagen logo" width="200" height="200" />
        <Button onClick={openAddMealModal}>Add Meal</Button>
        <AddFoodModal isOpen={isModalOpen} onClose={closeAddMealModal} />
      </CenterContent>
    </header>
  );
};

export default Navbar;
