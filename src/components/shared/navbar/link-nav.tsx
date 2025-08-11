import { paths } from "@/const/paths";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";

interface Props {
  pathname: string;
}
const LinkNav: FC<Props> = ({ pathname }) => {
  return (
    <div className="items-center justify-between  w-full md:flex md:w-auto max-sm:hidden">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row lg:mt-0 lg:border-0 max-md:hidden">
        {paths.map(({ label, path }) => (
          <li key={label}>
            <Link
              to={path}
              className={`animate-border hover:text-cyan-400 block py-2 px-3 rounded-sm  md:p-0 ${pathname === path ? "text-cyan-400" : "text-zinc-500 "} `}
              aria-current="page"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LinkNav;
