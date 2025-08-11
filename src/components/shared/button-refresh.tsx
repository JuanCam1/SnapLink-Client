import { cn } from "@/lib/utils";
import { RefreshCcw } from "lucide-react";
import type { FC } from "react";

interface Props {
  className?: string;
  text: string;
  handleRefetch?: () => void;
  variante?: "destructive" | "primary";
}
const ButtonRefresh: FC<Props> = ({
  text,
  className,
  handleRefetch,
  variante,
}) => {
  const classVariante =
    variante === "destructive"
      ? "border-red-400 text-red-500  hover:border-red-500"
      : "border-blue-400 text-blue-500 hover:bg-blue-100 hover:border-blue-500 ";
  return (
    <button
      onClick={handleRefetch}
      className={cn(
        "mt-2 text-sm cursor-pointer flex items-center gap-3 p-2 border rounded-md transition-colors duration-300 group",
        classVariante,
        className
      )}
    >
      {text}
      <RefreshCcw className="transition-transform duration-500 group-hover:rotate-180" />
    </button>
  );
};
export default ButtonRefresh;
