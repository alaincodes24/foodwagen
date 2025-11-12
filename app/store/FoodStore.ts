import { create } from "zustand";
import { Food } from "../types/food";

type FoodStore = {
  isFoodStale: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
  foods: Food[];
  selectedFood?: Food | null;
  setFoods: (foods: Food[]) => void;
  addFood: (food: Food) => void;
  removeFood: (id: string) => void;
  setSelectedFood: (food: Food | null) => void;
  setIsEditModalOpen: (isOpen: boolean) => void;
  setIsFoodStale: (isStale: boolean) => void;
  setIsDeleteModalOpen: (isOpen: boolean) => void;
};

export const useFoodStore = create<FoodStore>((set) => ({
  foods: [],
  selectedFood: null,
  isEditModalOpen: false,
  isDeleteModalOpen: false,
  isFoodStale: false,
  setIsEditModalOpen: (isOpen: boolean) => set({ isEditModalOpen: isOpen }),
  setFoods: (foods: Food[]) => set({ foods }),
  addFood: (food: Food) => set((state) => ({ foods: [...state.foods, food] })),
  setSelectedFood: (food: Food | null) => set({ selectedFood: food }),
  removeFood: (id: string) =>
    set((state) => ({ foods: state.foods.filter((food) => food.id !== id) })),
  setIsFoodStale: (isStale: boolean) => set({ isFoodStale: isStale }),
  setIsDeleteModalOpen: (isOpen: boolean) => set({ isDeleteModalOpen: isOpen }),
}));
