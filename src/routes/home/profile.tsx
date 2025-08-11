import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/home/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const [username, setUsername] = useState("john.doe");
  const [website, setWebsite] = useState("https://johndoe.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleUpdateProfile = (e: FormEvent) => {
    e.preventDefault();
    // Lógica para actualizar el perfil (nombre de usuario, sitio web)
    console.log("Actualizar perfil:", { username, website });
    // Aquí integrarías tu lógica de backend, por ejemplo, una Server Action o una API route.
    alert("Perfil actualizado (simulado)!");
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Las nuevas contraseñas no coinciden.");
      return;
    }
    // Lógica para actualizar la contraseña
    console.log("Actualizar contraseña:", { currentPassword, newPassword });
    // Aquí integrarías tu lógica de backend para cambiar la contraseña.
    alert("Contraseña actualizada (simulado)!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="flex-1 flex items-center justify-center w-full p-5">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Card className="w-full md:w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">Editar Perfil</CardTitle>
            <CardDescription>
              Actualiza la información de tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value="user@example.com"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de Usuario</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre de usuario"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Sitio Web</Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://tu-sitio.com"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdateProfile} className="w-full">
              Guardar Cambios
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">Cambiar Contraseña</CardTitle>
            <CardDescription>
              Actualiza tu contraseña para mayor seguridad.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password-before">Contraseña Actual</Label>
              <Input
                id="password-before"
                type="text"
                value="user@example.com"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Nueva Contraseña</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre de usuario"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Confirmar Nueva Contraseña</Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://tu-sitio.com"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdateProfile} className="w-full">
              Guardar Cambios
            </Button>
          </CardFooter>
        </Card>
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Cambiar Contraseña</CardTitle>
            <CardDescription>
              Actualiza tu contraseña para mayor seguridad.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Contraseña Actual</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Nueva Contraseña</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-new-password">
                Confirmar Nueva Contraseña
              </Label>
              <Input
                id="confirm-new-password"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdatePassword} className="w-full">
              Cambiar Contraseña
            </Button>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  );
}
