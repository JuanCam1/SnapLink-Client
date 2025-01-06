import type { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	text: string;
}
const TypographyH2: FC<Props> = ({ className, text }) => {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
		>
			{text}
		</h1>
	);
};
export default TypographyH2;
