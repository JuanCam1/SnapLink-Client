import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: ReactNode;
}
const TypographyP: FC<Props> = ({ children, className }) => {
  return <p className={cn("leading-7 ", className)}>{children}</p>;
};

export default TypographyP;
