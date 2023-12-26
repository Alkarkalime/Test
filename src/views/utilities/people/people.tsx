import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';

// material-ui
import {Box, Card, Grid, Link, Typography} from '@mui/material';

// project imports
import SubCard from '../../../ui-component/cards/SubCard';
import MainCard from '../../../ui-component/cards/MainCard';
import SecondaryAction from '../../../ui-component/cards/CardSecondaryAction';
import {gridSpacing} from '../../../store/constant';
import {Formik} from "formik";
import {ExcelForm} from "./components/LoginForm/ExcelForm";
import {TImport} from "./interfaces";
import {useData} from "./useData";
import {useHandlers} from "./useHandlers";

// ===============================|| COLOR BOX ||=============================== //

const People = () => {
    const { handleSubmit } = useHandlers();
    const { initialValues,useValidationSchema } = useData();
    return (
        <Formik<TImport>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={useValidationSchema}
            validateOnChange={false}>
            <ExcelForm  />
        </Formik>
    )
};


export default People;
