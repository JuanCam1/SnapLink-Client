import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface Props {
  children: string;
  className?: ReactNode;
}
const TypographyH4: FC<Props> = ({ children, className }) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export default TypographyH4;
