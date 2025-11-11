import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type ButtonProps = HeadlessButtonProps & {
  variant?: "filled" | "outline";
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = "filled",
  ...props
}) => {
  return (
    <HeadlessButton
      className={clsx(
        "font-bold  px-8 py-2 rounded-2xl cursor-pointer",
        variant === "filled" && "bg-primary text-primary-light button-shadow",
        variant === "outline" && "bg-primary-light border border-primary",
        className
      )}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
