import { FC, HTMLAttributes, PropsWithChildren } from "react"

type ButtonProps = HTMLAttributes<HTMLButtonElement> 

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children }) => {
  return (
    <button className="bg-primary font-black text-primary-light px-8 py-2 rounded-2xl button-shadow">{children}</button>
  );
};

export default Button;
