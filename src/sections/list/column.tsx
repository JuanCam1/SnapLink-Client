import type { ColumnDef } from "@tanstack/react-table";

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
    header: "Original URL",
  },
  {
    accessorKey: "shortCode",
    header: "Short Code",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => (row.getValue("isActive") ? "Yes" : "No"),
  },
  {
    accessorKey: "isPassword",
    header: "Password Protected",
    cell: ({ row }) => (row.getValue("isPassword") ? "Yes" : "No"),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => new Date(row.getValue("createdAt")).toLocaleString(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => <button>Edit</button>,
  },
];
