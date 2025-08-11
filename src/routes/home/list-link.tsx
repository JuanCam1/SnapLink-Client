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
    shortUrl: "https://example.com/shtid32",
    title: "Example Link",
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
    shortUrl: "https://example.com/shtid32",
    title: "Another Link",
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
      <TypographyH2 className="text-4xl  capitalize mt-6">
        Lista de enlaces
      </TypographyH2>
      <div className="flex flex-col gap-4 items-center mt-6 min-h-[70vh] w-full px-4">
        <div className="flex-1">
          <Table className="lg:max-w-[1200px] mt-6">
            <Table.THeader>
              <Table.ThCell className="lg:w-[15%]">Titulo</Table.ThCell>
              <Table.ThCell className="lg:w-[20%]">
                Enlace Original{" "}
              </Table.ThCell>
              <Table.ThCell className="lg:w-[20%]">
                Enlace Acortado{" "}
              </Table.ThCell>
              <Table.ThCell className="lg:w-[15%]">Fecha</Table.ThCell>
              <Table.ThCell className="lg:w-[10%]">Tiempo</Table.ThCell>
              <Table.ThCell className="lg:w-[10%]">Tipo</Table.ThCell>
              <Table.ThCell className="lg:w-[10%]">Estado</Table.ThCell>
              <Table.ThCell className="lg:w-[10%]">Acciones</Table.ThCell>
            </Table.THeader>
            <Table.TBody>
              {data.map((item) => (
                <Table.TRow key={item.id}>
                  <Table.TdCell dataLabel="Titulo">{item.title}</Table.TdCell>
                  <Table.TdCell dataLabel="Enlace Original">
                    {item.originalUrl}
                  </Table.TdCell>
                  <Table.TdCell dataLabel="Enlace Acortado">
                    {item.shortUrl}
                  </Table.TdCell>

                  <Table.TdCell dataLabel="Fecha">
                    {formatDate(item.createdAt)}
                  </Table.TdCell>
                  <Table.TdCell dataLabel="Tiempo">{item.time}</Table.TdCell>
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
        </div>
        <div className="">
          <PaginationTable page={page} setPage={setPage} totalPages={3} />
        </div>
      </div>
    </div>
  );
}
