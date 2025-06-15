import TypographyP from "@/components/shared/p";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LinkIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 w-full">
      <div className="flex flex-col justify-center items-center gap-6 w-5/6">
        <TypographyP className="opacity-0 font-extrabold text-6xl text-indigo-600 dark:text-indigo-500/80 animate-fade-up animate-ease-in flex items-center gap-2">
          <LinkIcon className="size-12" />
          SnapLink
        </TypographyP>
        <div className="opacity-0 font-extrabold text-4xl text-indigo-600  max-sm:text-center dark:text-indigo-500 animate-fade-up animate-ease-in animate-delay-300 flex items-center gap-2 lg:w-[70%]  flex-col ">
          Acorta tus enlaces de forma rápida y sencilla
          <TypographyP className=" text-center text-pretty font-medium text-xl dark:text-zinc-500 text-zinc-600">
            Crea enlaces cortos, rastrea clics y analiza el rendimiento de tus
            URLs
          </TypographyP>
        </div>
        <Link
          to="/auth/login"
          type="button"
          className="flex justify-center items-center gap-2 bg-indigo-600/80 hover:bg-indigo-600 px-4 py-3 rounded-md text-white transform transition duration-300 ease-in-out group hover:scale-105 opacity-0 animate-fade-up  animate-ease-in animate-delay-700"
        >
          <LinkIcon className="group-hover:rotate-12 group-hover:scale-110 h-5 transform transition-transform duration-300 ease-in-out" />
          Crear Link
        </Link>
      </div>
    </div>
  );
}
