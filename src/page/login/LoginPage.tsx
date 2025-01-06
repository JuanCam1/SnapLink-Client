import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import UseLogin from "./hook/UseLogin";
import LayoutNavbar from "@/layout/LayoutNavbar";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loading from "@/components/shared/loading";

const LoginPage = () => {
  const { handleSubmit, loading } = UseLogin();

  return (
    <LayoutNavbar>
      <div className="flex flex-col justify-center items-center gap-6 w-full">
        <div className="dark:border-zinc-800 opacity-0 px-6 py-16 border rounded-md w-full max-w-[500px] animate-slide-up">
          <h1 className="mb-8 font-extrabold text-center text-pretty text-xl">
            Inicio SnapLink
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" placeholder="name@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <button
                disabled={loading}
                type="submit"
                className={`${loading ? "opacity-25" : ""} flex justify-center items-center gap-2 border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105`}
              >
                {
                  loading
                    ? (
                      <Loading svgStyle="size-5" />
                    )
                    : (
                      <>
                        <span className="text-sm">Iniciar</span>
                        <ArrowRight className="h-5 transform transition-transform group-hover:translate-x-1 duration-300 ease-in-out" />
                      </>
                    )
                }
              </button>
            </div>
          </form>
          <span className="block mt-8 font-normal text-center text-sm">No tienes cuenta? <Link className="text-blue-500" to="/register">Registrate</Link></span>
        </div>
      </div>
    </LayoutNavbar>
  );
};
export default LoginPage;
