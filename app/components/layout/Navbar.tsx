"use client";
import Image from "next/image";
import { useState } from "react";
import { useFoodStore } from "../../store/FoodStore";
import AddOrEditFoodModal from "../AddOrEditFoodModal";
import Button from "../Button";
import CenterContent from "./CenterContent";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isEditModalOpen, setIsEditModalOpen } = useFoodStore();

  const openAddMealModal = () => setIsModalOpen(true);
  const closeAddMealModal = () => {
    setIsModalOpen(false);
    if (isEditModalOpen) setIsEditModalOpen(false);
  };

  return (
    <header className="p-4">
      <CenterContent className="flex justify-between items-center">
        <Image src="/images/logo.png" alt="FoodWagen logo" width="200" height="200" />
        <Button onClick={openAddMealModal}>Add Meal</Button>
        <AddOrEditFoodModal isOpen={isModalOpen || isEditModalOpen} onClose={closeAddMealModal} />
      </CenterContent>
    </header>
  );
};

export default Navbar;
