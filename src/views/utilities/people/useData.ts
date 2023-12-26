import {TImport} from "./interfaces";
import {useMemo} from "react";
import * as Yup from 'yup';

const initialValues = { excel:'' };


export function useData(): { initialValues: TImport,useValidationSchema:any } {
    const useValidationSchema =   useMemo(() => {
        return Yup.object().shape({
            excel: Yup.string()
                .required('validations.required')
        });
    }, []);
  return { initialValues,useValidationSchema };
}
