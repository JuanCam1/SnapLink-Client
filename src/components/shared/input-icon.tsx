import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon: LucideIcon;
  className?: ReactNode;
}
const InputIcon: FC<Props> = ({ children, icon: Icon, className }) => {
  return (
    <div
      className={cn(
        "flex border-zinc-400 dark:border-zinc-600 border rounded-sm",
        className
      )}
    >
      <div className="dark:bg-zinc-900 bg-zinc-200 inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm ">
        <Icon className="size-5 text-gray-500 dark:text-gray-400" />
      </div>
      {children}
    </div>
  );
};
export default InputIcon;
