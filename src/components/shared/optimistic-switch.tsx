import { useOptimistic, useTransition, type FC } from "react";
import type { AxiosResponse } from "axios";
import type { UseMutationResult } from "@tanstack/react-query";

import { Switch } from "@/components/ui/switch";
import { toastNotification } from "@/lib/toast";

interface Props {
  id: string;
  stateId: number;
  onToggle?: UseMutationResult<AxiosResponse<any, any>, Error, string, unknown>;
}

const OptimisticSwitch: FC<Props> = ({ id, stateId, onToggle }) => {
  const [isPending, startTransition] = useTransition();

  const initialState = stateId === 1;

  const [optimisticState, updateOptimistic] = useOptimistic(
    initialState,
    (_prev: boolean, next: boolean) => next
  );

  const handleChange = () => {
    console.log(optimisticState);
    const prevState = optimisticState;
    const nextState = !optimisticState;

    startTransition(() => {
      updateOptimistic(nextState);
      onToggle?.mutate(id, {
        onSuccess: () => {
          toastNotification("Estado cambiado correctamente", "success");
        },
        onError: () => {
          startTransition(() => {
            updateOptimistic(prevState);
            toastNotification("Error al cambiar el estado", "error");
          });
        },
      });
    });
  };

  return <Switch checked={optimisticState} disabled={isPending} />;
};

export default OptimisticSwitch;
