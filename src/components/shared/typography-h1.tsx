import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface Props {
  children: string;
  className?: ReactNode;
}
const TypographyH1: FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default TypographyH1;
