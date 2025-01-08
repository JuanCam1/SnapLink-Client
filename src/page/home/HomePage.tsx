import TypographyP from "@/components/ui/p";
import LayoutNavbar from "@/layout/LayoutNavbar";
import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<LayoutNavbar>
			<div className="flex flex-col justify-center items-center gap-6 w-5/6">
				<TypographyP className="opacity-0 font-extrabold text-6xl text-black dark:text-white animate-slide-up">
					SnapLink
				</TypographyP>
				<TypographyP className="opacity-0 lg:w-[50%] text-black text-center text-pretty dark:text-white animate-slide-up delay-200">
					Es una plataforma de acortador de enlaces que permite a los usuarios
					crear, administrar y compartir enlaces con facilidad
				</TypographyP>

				<Link
					to="/auth/login"
					type="button"
					className="flex justify-center items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-4 py-3 rounded-md text-white transform transition duration-300 ease-in-out group hover:scale-105"
				>
					<LinkIcon className="group-hover:rotate-12 group-hover:scale-110 h-5 transform transition-transform duration-300 ease-in-out" />
					Crear Link
				</Link>
			</div>
		</LayoutNavbar>
	);
};
export default HomePage;
