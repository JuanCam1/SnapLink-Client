import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

export type Payment = {
  id: string;
  originalUrl: string;
  shortCode: string;
  title: string;
  description: string;
  isActive: boolean;
  isPassword: boolean;
  createdAt: Date;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "originalUrl",
    header: "Link",
  },
  {
    accessorKey: "shortCode",
    header: "Short Code",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Titulo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "isActive",
    header: "Estado",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Switch checked={row.getValue("isActive")} />
      </div>
    ),
  },
  {
    accessorKey: "isPassword",
    header: "Protegida",
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Switch checked={row.getValue("isPassword")} />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de creación",
    cell: ({ row }) => {
      const fecha = new Date(row.getValue("createdAt"));
      return fecha.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    id: "actions",
    header: "Opciones",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
