import { paths } from "@/const/paths";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";

interface Props {
  pathname: string;
}
const LinkNav: FC<Props> = ({ pathname }) => {
  return (
    <div className="items-center justify-between  w-full md:flex md:w-auto max-sm:hidden">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        {paths.map(({ label, path }) => (
          <li key={label}>
            <Link
              to={path}
              className="block py-2 px-3 text-white bg-indigo-700 rounded-sm md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-indigo-500"
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
