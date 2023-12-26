import { useCallback } from 'react';
import {TImport} from "./interfaces";

export function useHandlers(): { handleSubmit: (data: TImport) => Promise<void>; } {


  const handleSubmit = useCallback(
    async (data: TImport): Promise<void> => {

    },
    [],
  );

  return { handleSubmit };
}
