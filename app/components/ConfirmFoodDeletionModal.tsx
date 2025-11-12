import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAsyncCallback } from "react-async-hook";
import { deleteFood } from "../api/food";
import { useFoodStore } from "../store/FoodStore";
import Button from "./Button";

const ConfirmFoodDeletionModal = () => {
  const { execute, loading } = useAsyncCallback(deleteFood);
  const {
    setSelectedFood,
    setIsEditModalOpen,
    setIsFoodStale,
    setIsDeleteModalOpen,
    isFoodStale,
    selectedFood,
    isDeleteModalOpen,
  } = useFoodStore();

  const handleDelete = async () => {
    if (!selectedFood) return;
    await execute(selectedFood?.id);
    setSelectedFood(null);
    setIsEditModalOpen(false);
    setIsFoodStale(!isFoodStale);
    handleClose();
  };

  const handleClose = () => {
    setSelectedFood(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <Dialog
      open={isDeleteModalOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={handleClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-modal-backdrop" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex items-start justify-center min-h-full p-4 mt-20">
          <DialogPanel
            transition
            className="w-full px-10 justify-center flex flex-col items-center max-w-xl rounded-xl shadow-xl bg-white py-18 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="h3" className="text-3xl font-bold text-center text-primary">
              Delete Meal
            </DialogTitle>

            <p className="my-5 text-center">
              Are you sure you want to delete this meal? Actions cannot be reversed.
            </p>

            <div className="grid items-center grid-cols-2 w-full gap-3 mt-2">
              <Button onClick={() => handleDelete()}>{loading ? "deleting..." : "Yes"}</Button>
              <Button variant="outline" className="text-black" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default ConfirmFoodDeletionModal;
