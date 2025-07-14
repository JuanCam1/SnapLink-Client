import { Link, useLocation } from "@tanstack/react-router";
import { LinkIcon } from "lucide-react";
import Options from "./options";
import LinkNav from "./link-nav";

const Navbar = () => {
  const pathname = useLocation().pathname;
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 flex justify-center dark:bg-zinc-900">
      <div className="flex h-16 items-center justify-between w-full">
        <Link to="/">
          <div className="flex items-center gap-2 font-bold text-3xl text-cyan-400">
            <LinkIcon className="h-6 w-6 " />
            <span>SnapLink</span>
          </div>
        </Link>
        {pathname.includes("home") ? <LinkNav pathname={pathname} /> : null}

        <Options pathname={pathname} />
      </div>
    </header>
  );
};

export default Navbar;
