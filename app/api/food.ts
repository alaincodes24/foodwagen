import apiClient from "../lib/axios";
import { Food } from "../types/food";

export const getFeaturedFood = async () => {
  try {
    const response = await apiClient.get<Food[]>("/Food");
    return response.data;
  } catch (error) {
    console.error("Error during fetching food:", error);
    throw error;
  }
};

export const createFood = async (foodData: Omit<Food, "id">) => {
  try {
    const response = await apiClient.post("/Food", foodData);
    return response.data;
  } catch (error) {
    console.error("Error during creating food:", error);
    throw error;
  }
};

export const updateFood = async (id: string, foodData: Omit<Food, "id">) => {
  try {
    const response = await apiClient.put(`/Food/${id}`, foodData);
    return response.data;
  } catch (error) {
    console.error("Error during updating food:", error);
    throw error;
  }
};

export const deleteFood = async (id: string) => {
  try {
    const response = await apiClient.delete(`/Food/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error during deleting food:", error);
    throw error;
  }
};

export const searchFoodByName = async (name: string) => {
  try {
    const response = await apiClient.get<Food[]>(`/Food?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error during searching food:", error);
    throw error;
  }
};
