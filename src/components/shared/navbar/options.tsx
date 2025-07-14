import { Menu } from "lucide-react";
import LogoGithub from "../../svg/logo-github";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useState, type FC } from "react";
import { paths } from "@/const/paths";

interface Props {
  pathname: string;
}
const Options: FC<Props> = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate({ to: path });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex gap-4 ">
      <ModeToggle />
      <a
        href="https://github.com/JuanCam1/CodeCraft.git"
        target="_blank"
        rel="noreferrer"
        className="flex max-sm:hidden justify-center items-center border-gray-200 bg-white hover:bg-neutral-100 hover:dark:bg-zinc-800 dark:bg-zinc-900 rounded-md border dark:border-gray-700 w-10 h-10"
      >
        <LogoGithub className="text-black dark:text-white" />
      </a>

      <div
        onClick={handleOpen}
        className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg border bg-white text-gray-800 hover:bg-neutral-100 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white hover:dark:bg-zinc-800 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-64 p-0">
          <SheetHeader className="px-4 pt-4 pb-2 border-b dark:border-zinc-700">
            <SheetTitle className="text-lg">Menú</SheetTitle>
          </SheetHeader>

          <div className="px-4 py-4 flex flex-col gap-2">
            {paths.map(({ label, path }) => (
              <div
                key={path}
                onClick={() => handleNavigation(path)}
                className={`px-4 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors hover:bg-indigo-200 ${
                  pathname === path
                    ? "bg-indigo-200  text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-neutral-100 hover:dark:bg-zinc-800"
                }`}
              >
                {label}
              </div>
            ))}
          </div>

          <SheetFooter className="px-4 pb-4">
            <SheetClose asChild>
              <Button variant="outline" className="w-full">
                Cerrar
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Options;
