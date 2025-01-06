import type { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	text: string;
}
const TypographyH1: FC<Props> = ({ className, text }) => {
	return (
		<h1
			className={cn(
				"scroll-m-20 m-0 p-0 text-4xl font-extrabold tracking-tight lg:text-5xl text-",
				className,
			)}
		>
			{text}
		</h1>
	);
};
export default TypographyH1;
