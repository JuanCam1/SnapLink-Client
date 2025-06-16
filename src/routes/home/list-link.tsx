import { DataTable } from "@/sections/list/data-table";
import { columns, type Payment } from "@/sections/list/column";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/list-link")({
  component: RouteComponent,
});

const data: Payment[] = [
  {
    id: "1",
    originalUrl: "https://example.com/original",
    shortCode: "abc123",
    title: "Example Link",
    description: "This is an example link",
    isActive: true,
    isPassword: false,
    createdAt: new Date("2023-10-01T12:00:00Z"),
  },
  {
    id: "2",
    originalUrl: "https://example.com/original2",
    shortCode: "def456",
    title: "Another Link",
    description: "This is another example link",
    isActive: false,
    isPassword: true,
    createdAt: new Date("2023-10-02T12:00:00Z"),
  },
];
function RouteComponent() {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
