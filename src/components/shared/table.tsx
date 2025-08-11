import type { ReactNode } from "react";
import type { ClassNameValue } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TableProps {
  children: ReactNode;
  className?: ClassNameValue;
}

interface TableRowProps {
  children: ReactNode;
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
  dataLabel?: string;
}

interface TableActionsProps {
  onEvent: () => void;
  Icon: LucideIcon;
  classNameButton?: ClassNameValue;
  classNameIcon?: ClassNameValue;
}

const Table = ({ children, className }: TableProps) => {
  return (
    <table
      className={cn(
        "border max-md:border-0 max-md:last:border-b-0 rounded-md w-full border-collapse table-fixed",
        className
      )}
    >
      {children}
    </table>
  );
};

const TableHeader = ({ children }: TableProps) => {
  return (
    <thead className="max-md:hidden">
      <tr className="max-md:block max-md:mb-2 max-md:border-b-4">{children}</tr>
    </thead>
  );
};

const TableThCell = ({ className, children }: TableCellProps) => {
  return (
    <th
      className={cn(
        "py-3 lg:w-[5%] text-[12px] text-center uppercase",
        className
      )}
    >
      {children}
    </th>
  );
};

const TableBody = ({ children }: TableProps) => <tbody>{children}</tbody>;

const TableRow = ({ children }: TableRowProps) => (
  <tr className="hover:bg-bg-zinc-400 dark:hover:bg-zinc-800/50 dark:even:bg-zinc-900 even:bg-[#f2f2f2] border ">
    {children}
  </tr>
);

const TableCell = ({ children, className, dataLabel }: TableCellProps) => (
  <td
    data-label={dataLabel}
    className={cn(
      "max-md:block p-2 max-md:border-b-[1px] max-md:text-[12px] text-sm text-center max-md:text-right truncate",
      className
    )}
  >
    {children}
  </td>
);

const TableActions = ({
  onEvent,
  Icon,
  classNameButton,
  classNameIcon,
}: TableActionsProps) => (
  <TableCell>
    <button
      onClick={onEvent}
      type="button"
      className={cn(
        "group hover:bg-blue-600 p-2 border-2 border-blue-600 rounded-md transition-all duration-300 ease-in-out",
        classNameButton
      )}
    >
      <Icon
        className={cn(
          "text-blue-600 group-hover:text-white transition-colors duration-300",
          classNameIcon
        )}
      />
    </button>
  </TableCell>
);

Table.THeader = TableHeader;
Table.ThCell = TableThCell;
Table.TBody = TableBody;
Table.TRow = TableRow;
Table.TdCell = TableCell;
Table.TActions = TableActions;

export default Table;
