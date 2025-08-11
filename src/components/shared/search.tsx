import type { FC } from "react";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  active?: boolean;
}
const Search: FC<Props> = ({ active }) => {
  return (
    <div className="flex border-blue-400 dark:border-blue-600 border rounded-sm w-full md:w-[300px]">
      <div className="bg-blue-400 inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm cursor-pointer">
        <SearchIcon className="size-5 text-white" />
      </div>
      <Input
        className={cn(
          "rounded-none rounded-e-sm border-none ",
          !active ? "cursor-not-allowed" : ""
        )}
        disabled={!active}
      />
    </div>
  );
};
export default Search;
