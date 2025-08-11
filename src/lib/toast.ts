import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info";
export const toastNotification = (message: string, type: ToastType) => {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "warning":
      return toast.warning(message);
    case "info":
      return toast.info(message);
  }
};
