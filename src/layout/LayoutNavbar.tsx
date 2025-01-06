import Navbar from "@/components/shared/navbar";
import type { ReactNode, FC } from "react";

interface Props {
	children: ReactNode;
}
const LayoutNavbar: FC<Props> = ({ children }) => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Navbar />
			<div className="flex justify-center pt-16 w-full h-full">{children}</div>
		</div>
	);
};
export default LayoutNavbar;
