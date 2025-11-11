import { create } from "zustand";
import { Food } from "../types/food";

type FoodStore = {
  foods: Food[];
  setFoods: (foods: Food[]) => void;
  addFood: (food: Food) => void;
  removeFood: (id: string) => void;
};

export const useFoodStore = create<FoodStore>((set) => ({
  foods: [],
  setFoods: (foods: Food[]) => set({ foods }),
  addFood: (food: Food) => set((state) => ({ foods: [...state.foods, food] })),
  removeFood: (id: string) =>
    set((state) => ({ foods: state.foods.filter((food) => food.id !== id) })),
}));
