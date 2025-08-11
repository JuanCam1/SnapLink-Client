import { createFileRoute } from "@tanstack/react-router";
import { CalendarIcon, ChevronDownIcon, Eye, EyeOff, Link } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useCreateLink from "@/hooks/link/use-crete-link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export const Route = createFileRoute("/home/create-link")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    isStatePassword,
    isStateExpired,
    isVisiblePassword,
    handleSubmit,
    onChangeStatePassword,
    onChangeStateExpired,
    onChangeVisiblePassword,
  } = useCreateLink();

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="flex-1 flex items-center justify-center w-full ">
      <div className="max-w-[1000px] w-full opacity-0 animate-fade-down animate-ease-in ">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl text-cyan-400 font-bold">
              Crear Enlace
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-2 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div className="space-y-2 max-sm:col-span-2">
                <Label htmlFor="title">Titulo</Label>

                <Input
                  className="h-10 rounded-md block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  id="title"
                  type="text"
                  name="title"
                  required
                />
              </div>

              <div className="space-y-2 max-sm:col-span-2">
                <Label htmlFor="time">Tiempo espera</Label>

                <Input
                  className="h-10 rounded-md block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  id="time"
                  name="time"
                  type="number"
                  required
                />
              </div>

              <div className="space-y-2 col-span-2">
                <Label htmlFor="originalUrl">Enlace</Label>
                <Input
                  className="h-10 rounded-md block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  id="originalUrl"
                  type="url"
                  name="originalUrl"
                  required
                />
              </div>

              <div className="space-y-2 max-sm:col-span-2">
                <Label htmlFor="description">Expiración</Label>

                <Select onValueChange={onChangeStateExpired}>
                  <SelectTrigger className="w-full rounded-md cursor-pointer">
                    <SelectValue placeholder="Selección el estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-date">Sin expiración</SelectItem>
                    <SelectItem value="date">Fecha</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 max-sm:col-span-2">
                {isStateExpired === "date" && (
                  <>
                    <Label htmlFor="time">Tiempo espera</Label>

                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className={`w-full h-10 rounded-md justify-between font-normal ${date ? "dark:text-white text-black" : "text-muted-foreground"}`}
                        >
                          {date
                            ? date.toLocaleDateString()
                            : "Seleccionar fecha"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </>
                )}
              </div>

              <div className="space-y-2 max-sm:col-span-2">
                <Label htmlFor="description">Protegido</Label>

                <Select onValueChange={onChangeStatePassword}>
                  <SelectTrigger className="w-full rounded-md cursor-pointer">
                    <SelectValue placeholder="Selección el estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Publico</SelectItem>
                    <SelectItem value="private">Privado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 max-sm:col-span-2">
                {isStatePassword === "private" && (
                  <>
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="flex ">
                      <button
                        type="button"
                        className="dark:bg-zinc-900 bg-zinc-200 inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm cursor-pointer"
                        onClick={onChangeVisiblePassword}
                      >
                        <div className="rounded-full  p-1">
                          {isVisiblePassword ? (
                            <EyeOff className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          ) : (
                            <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          )}
                        </div>
                      </button>
                      <Input
                        type={isVisiblePassword ? "text" : "password"}
                        name="password"
                        className="h-10 rounded-none rounded-e-sm block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-center max-sm:w-full col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="color-btn group transition-all duration-300 cursor-pointer max-sm:w-full"
                >
                  Crear Enlace
                  <Link className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
