import { Ellipsis, Eye, Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { FC } from "react";

interface Props {
  link: LinkModelI;
  handleChangeLink: (value: LinkModelI) => void;
  setOpenEdit: (value: boolean) => void;
  setOpenView: (value: boolean) => void;
}
const OptionsItem: FC<Props> = ({
  link,
  handleChangeLink,
  setOpenEdit,
  setOpenView,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Ellipsis className="absolute h-[1.2rem] w-[1.2rem] text-black dark:text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-zinc-800">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 hover:bg-neutral-200 dark:hover:bg-zinc-900 cursor-pointer"
          onClick={() => {
            handleChangeLink(link);
            setOpenView(true);
          }}
        >
          <Eye className="w-4 h-4 text-blue-600" />
          Visualizar
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2 hover:bg-neutral-200 dark:hover:bg-zinc-900 cursor-pointer"
          onClick={() => {
            handleChangeLink(link);
            setOpenEdit(true);
          }}
        >
          <Pencil className="w-4 h-4 text-green-600" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2 hover:bg-neutral-200 dark:hover:bg-zinc-900 cursor-pointer"
          onClick={() => null}
        >
          <Trash className="w-4 h-4 text-red-600" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default OptionsItem;
