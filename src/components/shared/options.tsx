import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Github from "../svg/github";
import ModeToggle from "./mode-toggle";
import Search from "../svg/search";
import { useAuth } from "@/hooks/useAuth";

const Options = () => {
  const { logout } = useAuth();
  const { pathname } = useLocation();
  return (
    <div className="flex gap-4">
      <ModeToggle />
      {!pathname.includes("dash") && (
        <Link
          to="https://github.com/JuanCam1"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center border-[0.5px] dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 hover:shadow-lg rounded-md w-9 dark:text-white transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          <Github className="text-black dark:text-white transition-colors duration-300 ease-in-out" />
        </Link>
      )}
      <button
        type="button"
        className="flex justify-center items-center border-[0.5px] dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 hover:shadow-lg rounded-md w-9 dark:text-white transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <Search className="text-black dark:text-white" />
      </button>
      {!pathname.includes("dash") ? (
        !pathname.includes("auth/login") && (
          <Link
            to="/auth/login"
            className="flex justify-center items-center gap-2 border-[0.5px] dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-2 rounded-md text-black dark:text-white transform transition duration-300 ease-in-out group hover:scale-105"
          >
            <span className="text-sm">Iniciar</span>
            <ArrowRight className="h-5 transform transition-transform group-hover:translate-x-1 duration-300 ease-in-out" />
          </Link>
        )
      ) : (
        <button
          onClick={logout}
          type="button"
          className="flex justify-center items-center gap-2 border-[0.5px] dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-2 rounded-md text-black dark:text-white transform transition duration-300 ease-in-out group hover:scale-105"
        >
          <span className="text-sm">Salir</span>
          <ArrowLeft className="h-5 transform transition-transform group-hover:translate-x-1 duration-300 ease-in-out" />
        </button>
      )}
    </div>
  );
};
export default Options;
