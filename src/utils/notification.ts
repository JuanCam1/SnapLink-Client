import { toast } from "sonner";

type types = "success" | "error" | "info" | "warning";

export const notification = (message: string, typeNotification: types) => {
	switch (typeNotification) {
		case "success":
			return toast.success(message);
		case "error":
			return toast.error(message);
		case "info":
			return toast.info(message);
		case "warning":
			return toast.warning(message);
		default:
			return toast(message);
	}
};
