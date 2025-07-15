import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, LetterText, Link, UserRoundPlus } from "lucide-react";
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

export const Route = createFileRoute("/home/create-link")({
  component: RouteComponent,
});

type LinkState = "public" | "private";
function RouteComponent() {
  const [isState, setIsState] = useState<LinkState>("public");
  const [isVisible, setIsVisible] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onChange = (value: string) => {
    setIsState(value as LinkState);
    console.log("onChange", value);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 w-full ">
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
              className="space-y-4 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div className="space-y-2 col-span-2">
                <Label htmlFor="description">Descripción</Label>

                <Textarea
                  className="rounded-md block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input resize-none"
                  id="description"
                  required
                />
              </div>

              <div className="space-y-2 ">
                <Label htmlFor="link">Enlace</Label>
                <div className="flex">
                  <div className="dark:bg-zinc-900 bg-zinc-200  inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm ">
                    <div className="rounded-full p-1">
                      <Link className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <Input
                    className="h-10 rounded-none rounded-e-sm block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                    id="link"
                    type="url"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Titulo</Label>
                <div className="flex">
                  <div className="dark:bg-zinc-900 bg-zinc-200  inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm ">
                    <div className="rounded-full p-1">
                      <LetterText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <Input
                    className="h-10 rounded-none rounded-e-sm block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                    id="title"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Protegido</Label>

                <Select onValueChange={onChange}>
                  <SelectTrigger className="w-full rounded-md cursor-pointer">
                    <SelectValue placeholder="Selección el estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Publico</SelectItem>
                    <SelectItem value="private">Privado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                {isState === "private" && (
                  <>
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="flex ">
                      <button
                        type="button"
                        className="dark:bg-zinc-900 bg-zinc-200 inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm cursor-pointer"
                        onClick={() => {
                          setIsVisible((prev) => !prev);
                        }}
                      >
                        <div className="rounded-full  p-1">
                          {isVisible ? (
                            <EyeOff className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          ) : (
                            <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          )}
                        </div>
                      </button>
                      <Input
                        type={isVisible ? "text" : "password"}
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
                  className="color-btn group transition-all duration-300 cursor-pointer"
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
