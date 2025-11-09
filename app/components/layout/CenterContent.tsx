import { FC, PropsWithChildren } from "react"
import { clsx } from "clsx";

type CenterContentProps = PropsWithChildren<{
  className?: string;
}>

const CenterContent: FC<CenterContentProps> = ({ children, className } ) => {
  return (
    <div className={clsx("max-w-[1476px] mx-auto px-4", className)}>
      {children}
    </div>
  )
}

export default CenterContent
