import { createFileRoute } from "@tanstack/react-router";
import TypographyH2 from "@/components/shared/typography-h2";
import Table from "@/components/shared/table";
import OptimisticSwitch from "@/components/shared/optimistic-switch";
import OptionsItem from "@/components/shared/options-item";
import PaginationTable from "@/components/shared/pagination-table";
import { useState } from "react";
import { formatDate } from "@/utils/formatter-date";

export const Route = createFileRoute("/home/list-link")({
  component: RouteComponent,
});

const data: LinkModelI[] = [
  {
    id: "1",
    originalUrl: "https://example.com/original",
    title: "Example Link",
    description: "This is an example link",
    password: "123456",
    userId: "1",
    time: 0,
    createdAt: new Date("2023-10-01T12:00:00Z"),
    state: {
      id: 1,
      name: "Active",
    },
  },
  {
    id: "2",
    originalUrl: "https://example.com/original2",
    title: "Another Link",
    description: "This is another example link",
    password: "123456",
    userId: "1",
    time: 0,
    createdAt: new Date("2023-10-01T12:00:00Z"),
    state: {
      id: 1,
      name: "Active",
    },
  },
];
function RouteComponent() {
  const [page, setPage] = useState(1);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [linkSelected, setLinkSelected] = useState<LinkModelI | null>(null);

  const handleOpenView = (value: boolean) => {
    setOpenView(value);
  };

  const handleOpenEdit = (value: boolean) => {
    setOpenEdit(value);
  };

  const handleChangeLink = (value: LinkModelI) => {
    setLinkSelected(value);
  };

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center  opacity-0 animate-fade-down animate-ease-in ">
      <TypographyH2 className="text-4xl text-cyan-600 capitalize mt-6">
        Lista de enlaces
      </TypographyH2>
      <Table className="lg:max-w-[1200px] mt-6">
        <Table.THeader>
          <Table.ThCell className="lg:w-[15%]">Enlace </Table.ThCell>
          <Table.ThCell className="lg:w-[25%]">Titulo</Table.ThCell>
          <Table.ThCell className="lg:w-[10%]">Descripción</Table.ThCell>
          <Table.ThCell className="lg:w-[30%]">Fecha</Table.ThCell>
          <Table.ThCell className="lg:w-[10%]">Tipo</Table.ThCell>
          <Table.ThCell className="lg:w-[10%]">Estado</Table.ThCell>
          <Table.ThCell className="lg:w-[10%]">Acciones</Table.ThCell>
        </Table.THeader>
        <Table.TBody>
          {data.map((item) => (
            <Table.TRow key={item.id}>
              <Table.TdCell dataLabel="Enlace">{item.originalUrl}</Table.TdCell>
              <Table.TdCell dataLabel="Titulo">{item.title}</Table.TdCell>
              <Table.TdCell dataLabel="Descripción">
                {item.description}
              </Table.TdCell>
              <Table.TdCell dataLabel="Fecha">
                {formatDate(item.createdAt)}
              </Table.TdCell>
              <Table.TdCell dataLabel="Tipo">
                {item.password ? "Contraseña" : "Publico"}
              </Table.TdCell>
              <Table.TdCell dataLabel="Estado">
                <OptimisticSwitch
                  id={String(item.id)}
                  stateId={item.state.id}
                />
              </Table.TdCell>
              <Table.TdCell dataLabel="Acciones">
                <OptionsItem
                  link={item}
                  handleChangeLink={handleChangeLink}
                  setOpenEdit={handleOpenEdit}
                  setOpenView={handleOpenView}
                />
              </Table.TdCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      </Table>
      <PaginationTable page={page} setPage={setPage} totalPages={3} />
    </div>
  );
}
