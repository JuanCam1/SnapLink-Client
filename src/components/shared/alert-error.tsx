import type { FC } from "react";
import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import ButtonRefresh from "./button-refresh";

interface Props {
  className?: string;
  title: string;
  description: string;
  isRefetch: boolean;
  handleRefetch?: () => void;
}
const AlertError: FC<Props> = ({
  className,
  title,
  description,
  handleRefetch,
  isRefetch,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 w-full">
      <div className="w-full lg:w-[600px]">
        <Alert variant="destructive" className={className}>
          <AlertCircleIcon />
          <AlertTitle className="font-semibold">{title}</AlertTitle>
          <AlertDescription>
            <p>{description}</p>
            {isRefetch && (
              <div className="flex justify-center items-center w-full">
                <ButtonRefresh
                  variante="destructive"
                  text="Intentar nuevamente"
                  handleRefetch={handleRefetch}
                />
              </div>
            )}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
export default AlertError;
