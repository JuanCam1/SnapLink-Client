import type { ComponentProps, FC } from "react";
import { Button } from "../ui/button";

interface Props extends ComponentProps<"button"> {
  text: string;
}

const ButtonForm: FC<Props> = ({ text, ...props }) => {
  return (
    <Button
      className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md max-sm:w-full cursor-pointer transition-colors duration-300 ease-in-out"
      {...props}
    >
      {text}
    </Button>
  );
};

export default ButtonForm;
