import type { Dispatch, FC, SetStateAction } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}
const PaginationTable: FC<Props> = ({ page, setPage, totalPages }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md max-sm:w-full cursor-pointer transition-colors duration-300 ease-in-out *:
            disabled:cursor-not-allowed disabled:opacity-50
            "
          >
            <ArrowBigLeftDash />
          </button>
        </PaginationItem>

        <PaginationItem>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md max-sm:w-full cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <ArrowBigRightDash />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationTable;
