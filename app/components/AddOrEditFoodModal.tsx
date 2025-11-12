import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import { useAsyncCallback } from "react-async-hook";
import { createFood, updateFood } from "../api/food";
import { useFoodStore } from "../store/FoodStore";
import { Food } from "../types/food";
import Button from "./Button";
import Input from "./Input";

type AddOrEditFoodModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const emptyFormValues = {
  name: "",
  rating: "",
  image: "",
  restaurantName: "",
  logo: "",
  status: "",
};

const AddOrEditFoodModal: FC<AddOrEditFoodModalProps> = ({ isOpen, onClose }) => {
  const { selectedFood, setIsFoodStale, isFoodStale } = useFoodStore();
  const { execute: createNewFood, loading: isCreating } = useAsyncCallback(createFood);
  const { execute: updateSelectedFood } = useAsyncCallback(updateFood);
  const [mealFormValues, setMealFormValues] = useState<Partial<Food>>(emptyFormValues);
  const [mealFormErrors, setMealFormErrors] = useState<Record<string, string>>({});
  const [isLiveValidation, setIsLiveValidation] = useState(false);

  const validateForm = (values: Record<string, unknown>, fieldName?: string) => {
    const errors: Record<string, string> = {};
    if (fieldName) {
      if (!values[fieldName]) errors[fieldName] = `${fieldName.replace("_", " ")} is required`;
    } else {
      Object.keys(values).forEach((key) => {
        if (!values[key]) errors[key] = `${key.replace("_", " ")} is required.`;
      });
    }
    return errors;
  };

  const handleClose = () => {
    onClose();
    setMealFormValues(emptyFormValues);
    setMealFormErrors({});
    setIsLiveValidation(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(mealFormValues);
    if (Object.keys(errors).length > 0) {
      setMealFormErrors(errors);
      setIsLiveValidation(true);
      return;
    }
    if (selectedFood) await updateSelectedFood(selectedFood.id, mealFormValues);
    else await createNewFood(mealFormValues);
    setIsFoodStale(!isFoodStale);
    handleClose();
  };

  const handleInputChange = (fieldName: string, value: string) => {
    const updatedValues = { ...mealFormValues, [fieldName]: value };
    setMealFormValues(updatedValues);
    if (isLiveValidation) {
      const errors = validateForm(updatedValues, fieldName);
      setMealFormErrors({ ...mealFormErrors, [fieldName]: errors[fieldName] });
    }
  };

  useEffect(() => {
    if (selectedFood) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMealFormValues(selectedFood);
    } else {
      setMealFormValues(emptyFormValues);
    }
  }, [selectedFood, isOpen]);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={handleClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-modal-backdrop" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex items-start justify-center min-h-full p-4 mt-20">
          <DialogPanel
            transition
            className="w-full max-w-3xl rounded-xl shadow-xl bg-white py-18 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="h3" className="text-3xl font-bold text-center text-primary">
              {selectedFood ? "Edit meal" : "Add a meal"}
            </DialogTitle>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-xl mx-auto mt-5 gap-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Food name"
                  type="text"
                  value={mealFormValues.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  error={mealFormErrors.name}
                />
              </div>
              <div>
                <Input
                  name="rating"
                  placeholder="Food rating"
                  type="text"
                  value={mealFormValues.rating}
                  onChange={(e) => handleInputChange("rating", e.target.value)}
                  error={mealFormErrors.rating}
                />
              </div>

              <div>
                <Input
                  name="image"
                  placeholder="Food image (link)"
                  type="text"
                  value={mealFormValues.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  error={mealFormErrors.image}
                />
              </div>
              <div>
                <Input
                  name="restaurantName"
                  placeholder="Restaurant name"
                  type="text"
                  value={mealFormValues.restaurantName}
                  onChange={(e) => handleInputChange("restaurantName", e.target.value)}
                  error={mealFormErrors.restaurantName}
                />
              </div>
              <div>
                <Input
                  name="logo"
                  placeholder="Restaurant logo (link)"
                  type="text"
                  value={mealFormValues.logo ?? ""}
                  onChange={(e) => handleInputChange("logo", e.target.value)}
                  error={mealFormErrors.logo}
                />
              </div>

              <div>
                <Input
                  name="status"
                  placeholder="Restaurant status (open/closed)"
                  type="text"
                  value={mealFormValues.status ?? ""}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  error={mealFormErrors.status}
                />
              </div>

              <div className="grid items-center grid-cols-2 gap-3 mt-2">
                <Button type="submit">
                  {isCreating ? "Saving..." : selectedFood ? "Save Changes" : "Create"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="text-black"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddOrEditFoodModal;
