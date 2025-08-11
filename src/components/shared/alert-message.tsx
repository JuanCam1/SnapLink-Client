import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import type { FC } from "react";
import ButtonRefresh from "./button-refresh";

interface Props {
  title: string;
  description: string;
  isRefetch: boolean;
  handleRefetch?: () => void;
}
const AlertMessage: FC<Props> = ({
  title,
  description,
  handleRefetch,
  isRefetch,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 w-full">
      <div className="w-full lg:w-[600px]">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>
            <p>{description}</p>
            {isRefetch && (
              <div className="flex justify-center items-center w-full">
                <ButtonRefresh
                  text="Intentar nuevamente"
                  handleRefetch={handleRefetch}
                  variante="primary"
                />
              </div>
            )}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
export default AlertMessage;
