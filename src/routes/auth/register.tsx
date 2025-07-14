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
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, Mail, User, UserRoundPlus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex-1 flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-md animate-fade-left animate-ease-in">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl color-text font-bold">
              Crear Cuenta
            </CardTitle>
            <CardDescription>
              Llena los datos y registrate en SnapLink
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <div className="flex">
                  <div className="dark:bg-zinc-900 bg-zinc-200  inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm ">
                    <div className="rounded-full p-1">
                      <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <Input
                    className="h-10 rounded-none rounded-e-sm block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                    id="name"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electronico</Label>
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
                    onClick={() => {
                      setIsVisible((prev) => !prev);
                    }}
                    type="button"
                    className="dark:bg-zinc-900 bg-zinc-200 inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-sm cursor-pointer"
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
                  Registrarse
                  <UserRoundPlus className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                ¿Ya tienes cuenta?{" "}
                <Link to="/auth/login" className="animate-border text-cyan-500">
                  Inicia Sesión
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// import { useActionState, useEffect, type FC } from "react";
// import { Save } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { useRestStore } from "@/store";
// import { query } from "@/lib/query";
// import { KeysQuery } from "@/const/keys-query";

// interface Props {
//   isActive: boolean;
//   onClose: () => void;
// }

// type ActionState = {
//   error: string | null;
//   success: boolean;
// };

// const CreateFolder: FC<Props> = ({ isActive, onClose }) => {
//   const addFolder = useRestStore((state) => state.addFolder);

//   const createFolderAction = async (
//     _prevState: ActionState,
//     formData: FormData,
//   ): Promise<ActionState> => {
//     const folderName = formData.get("folderName") as string;

//     if (!folderName || folderName.trim().length < 3) {
//       return {
//         error: "El nombre debe tener al menos 3 caracteres.",
//         success: false,
//       };
//     }

//     const newFolder = await addFolder(folderName);
//     return newFolder;
//   };

//   const initialState: ActionState = { error: null, success: false };
//   const [state, formAction, isPending] = useActionState(
//     createFolderAction,
//     initialState,
//   );

//   useEffect(() => {
//     if (state.success) {
//       onClose();
//     }
//   }, [state.success, onClose]);

//   return (
//     <Dialog open={isActive} onOpenChange={onClose}>
//       <DialogContent className="dark:bg-zinc-900">
//         <DialogHeader>
//           <DialogTitle>Crear Carpeta</DialogTitle>
//           <DialogDescription className="mb-4">
//             Aquí puedes crear una nueva carpeta para organizar tus solicitudes.
//           </DialogDescription>
//         </DialogHeader>
//         <form className="flex flex-col items-center gap-4" action={formAction}>
//           <Input
//             placeholder="Nombre de la carpeta"
//             className="h-12 placeholder:dark:text-zinc-500"
//             required
//             name="folderName"
//             autoFocus
//             disabled={isPending}
//           />
//           {state.error && <p className="text-sm text-red-500">{state.error}</p>}
//           <Button type="submit" size="sm" className="h-8" disabled={isPending}>
//             {isPending ? (
//               <span className="animate-spin h-4 w-4 border-b-2 border-current rounded-full inline-block"></span>
//             ) : (
//               <Save className="w-4 h-4" />
//             )}
//             <span className="ml-2 font-bold">
//               {isPending ? "Guardando..." : "Guardar"}
//             </span>
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };
// export default CreateFolder;
