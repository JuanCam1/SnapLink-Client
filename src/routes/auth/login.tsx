import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff, Mail, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isVisible, setIsVisible] = useState(false);
  // const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex-1 flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-md opacity-0 animate-fade-down animate-ease-in">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-cyan-500 font-bold">
              Iniciar Sesión
            </CardTitle>
            <CardDescription>
              Ingresa a tu cuenta para gestionar tus enlaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Correo Electronico</Label>
                <div className="flex">
                  <div className="dark:bg-zinc-900 bg-zinc-200  inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm ">
                    <div className="rounded-full p-1">
                      <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <Input
                    className="h-10 rounded-none rounded-e-sm block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                    id="email"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
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
              </div>

              <div className="flex justify-center max-sm:w-full">
                <Button
                  type="submit"
                  size="lg"
                  className="color-btn group transition-all duration-300 cursor-pointer"
                >
                  Iniciar Sesión
                  <UserRoundPlus className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                ¿No tienes una cuenta?{" "}
                <Link
                  to="/auth/register"
                  className="animate-border text-cyan-500"
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/home/dashboard" className="animate-border">
                Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
