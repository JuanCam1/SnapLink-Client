import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { FC, ReactNode } from "react";
import ButtonForm from "./button-form";

interface Props {
  title: string;
  description?: string;
  isButton: boolean;
  titleButton: string;
  action: () => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  resetState: () => void;
  children: ReactNode;
}
const DialogLayout: FC<Props> = ({
  title,
  description,
  isButton,
  titleButton,
  action,
  open,
  setOpen,
  resetState,
  children,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter className="justify-end">
          <Button
            type="button"
            className="cursor-pointer "
            onClick={resetState}
          >
            Cancelar
          </Button>
          {isButton && <ButtonForm text={titleButton} onClick={action} />}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLayout;
