import Loading from "@/components/shared/loading";
import { ArrowRight, List } from "lucide-react";
import { useRef } from "react";
import useLink from "../hooks/useLink";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const FormLink = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { createLink, loadingSubmit } = useLink(formRef);

  const goListLink = () => {
    navigate("/dash/list");
  }
  return (
    <div className="relative flex flex-col justify-center items-center gap-6 w-full">
      <button className="top-5 right-5 absolute border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 p-1 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105" type="button" onClick={goListLink}>
        <List className="text-black dark:text-white size-6" />
      </button>
      <div className="dark:border-zinc-800 opacity-0 px-6 py-16 border rounded-md w-full max-w-[400px] animate-slide-up">
        <h1 className="mb-8 font-extrabold text-center text-pretty text-xl">
          Acortador de enlaces
        </h1>
        <form onSubmit={createLink} className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <Label htmlFor="url">Link url</Label>
            <Input name="url" id="url" type="text" placeholder="https://www.pagina.com" />
          </div>

          <div className="flex justify-center items-center gap-2 w-full">
            <button
              disabled={loadingSubmit}
              type="submit"
              className={`${loadingSubmit ? "opacity-25" : ""} flex justify-center items-center gap-2 border-gray-300 dark:border-zinc-800 bg-white hover:dark:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border rounded-md text-black dark:text-white transform transition duration-300 cursor-pointer ease-in-out group hover:scale-105`}
            >
              {
                loadingSubmit
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
      </div>
    </div>
  )
}
export default FormLink