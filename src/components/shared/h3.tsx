import type { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  text: string;
}
const TypographyH3: FC<Props> = ({ className, text }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 pb-2 font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {text}
    </h1>
  );
};
export default TypographyH3;
