import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface Props {
  children: string;
  className?: ReactNode;
}
const TypographyH2: FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight text-cyan-600 dark:text-cyan-400",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default TypographyH2;
