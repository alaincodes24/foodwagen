import { Input as HeadlessInput, InputProps as HeadlessInputProps } from "@headlessui/react";
import clsx from "clsx";
import { FC } from "react";

type InputProps = HeadlessInputProps & {
  error?: string;
};

const Input: FC<InputProps> = ({ className, error, ...props }) => {
  return (
    <div>
      <HeadlessInput
        className={clsx(
          "w-full p-3 border rounded-xl bg-app-gray placeholder:text-app-dark-gray",
          error ? "border-red-500" : "border-slate-200",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
