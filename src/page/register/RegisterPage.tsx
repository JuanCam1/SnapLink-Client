import { Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import LayoutNavbar from "@/layout/LayoutNavbar";
import { useRef } from "react";
import UseRegister from "./hook/UseRegister";
import { useFormStatus } from "react-dom";
import Loading from "@/components/shared/loading";

const RegisterPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const { handleSubmit } = UseRegister(formRef);
  return (
    <LayoutNavbar>
      <div className="flex flex-col justify-center items-center gap-6 w-full">
        <div className="dark:border-zinc-800 opacity-0 px-6 py-6 border rounded-md w-full max-w-[500px] animate-slide-up">
          <h1 className="mb-8 font-extrabold text-center text-pretty text-xl">
            Registro SnapLink
          </h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 w-full"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input name="name" id="name" type="text" placeholder="Juan" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                id="username"
                type="text"
                placeholder="JuanCam1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <button
                disabled={pending}
                type="submit"
                className="flex justify-center items-center gap-2 border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 ease-in-out group hover:scale-105"
              >
                {pending ? (
                  <div className="px-6">
                    <Loading svgStyle="size-5" />
                  </div>
                ) : (
                  <>
                    <span className="text-sm">Registrarse</span>
                    <ArrowRight className="h-5 transform transition-transform group-hover:translate-x-1 duration-300 ease-in-out" />
                  </>
                )}
              </button>
            </div>
          </form>
          <span className="block mt-8 font-normal text-center text-sm">
            Ya tienes cuenta?{" "}
            <Link to="/auth/login" className="text-blue-500">
              Iniciar Sesión
            </Link>
          </span>
        </div>
      </div>
    </LayoutNavbar>
  );
};
export default RegisterPage;
