import { useFormikContext } from 'formik';
import { useCallback } from 'react';
import {TImport} from "../../interfaces";

export function useHandlers(): { handleClear: () => void;  } {
  const { setFieldValue } = useFormikContext<TImport>();

  const handleClear= useCallback((): void => {
    setFieldValue('excel', '');
  }, [setFieldValue]);


  return {  handleClear };
}
