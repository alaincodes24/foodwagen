import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Input } from "@headlessui/react";
import { FC } from "react";
import Button from "./Button";

type AddFoodModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddFoodModal: FC<AddFoodModalProps> = ({ isOpen, onClose }) => {
  const formInputStyles =
    "w-full p-3 border rounded-xl border-slate-100 bg-app-gray placeholder:text-app-dark-gray";

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-modal-backdrop" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex items-start justify-center min-h-full p-4 mt-20">
          <DialogPanel
            transition
            className="w-full max-w-3xl rounded-xl shadow-xl bg-white py-18 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="h3" className="text-3xl font-bold text-center text-primary">
              Add a meal
            </DialogTitle>
            <form action="" className="flex flex-col max-w-xl mx-auto mt-5 gap-y-6">
              <Input
                className={formInputStyles}
                name="name"
                placeholder="Food name"
                type="text"
              />
              <Input
                className={formInputStyles}
                name="rating"
                placeholder="Food rating"
                type="text"
              />

              <Input
                className={formInputStyles}
                name="image"
                placeholder="Food image (link)"
                type="text"
              />
              <Input
                className={formInputStyles}
                name="food_name"
                placeholder="Restaurant name"
                type="text"
              />
              <Input
                className={formInputStyles}
                name="logo"
                placeholder="Restaurant logo (link)"
                type="text"
              />

              <Input
                className={formInputStyles}
                name="status"
                placeholder="Restaurant status (open/closed)"
                type="text"
              />

              <div className="grid items-center grid-cols-2 gap-3 mt-2">
                <Button>Save</Button>
                <Button variant="outline" className="text-black">
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
export default AddFoodModal;
