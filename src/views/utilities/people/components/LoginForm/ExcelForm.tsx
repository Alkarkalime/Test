import {
    Button,
    Paper,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import {Field, Form, useFormikContext} from 'formik';
import type {ReactElement} from 'react';
import {useHandlers} from './useHandlers';
import {TImport} from "../../interfaces";
import {read, utils} from "xlsx";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL, LOAD_DATA, OPEN_MODAL, PARSE_DATA} from "../../../../../store/actions";
import {ModalExcel} from "./ModalExcel/ModalExcel";

export const ExcelForm = ({...props}): ReactElement => {
    const {errors, touched, setFieldValue} = useFormikContext<TImport>();
    const theme = useTheme();
    const {handleClear} = useHandlers();
    const dispatch = useDispatch();
    const peoples = useSelector((state: any) => state.peoples);
    useEffect(() => {
        dispatch({type:LOAD_DATA})
    }, []);
    const saveData = (keys: { position: string, rank: string, fullName: string }, data: any) => {
        const dataForSave = data.map((people: any, index: number) => {
            if (index)
                return {
                    position: people[keys.position], rank: people[keys.rank], fullName: people[keys.fullName]
                }
        })
        dataForSave.shift();
        dispatch({
            type: PARSE_DATA,
            data: dataForSave
        })
        dispatch({
            type: CLOSE_MODAL,
            data: dataForSave
        })
    }
    const onChange = useCallback((e: any) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const data = e.target.result;
                const workbook = read(data, {type: "array"});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json: any = utils.sheet_to_json(worksheet);
                dispatch({
                    type: OPEN_MODAL,
                    opened: true,
                    data: {
                        title: 'select field',
                        content: ModalExcel(json, saveData)
                    }
                })
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }, [])
    return (
        <>
            <Form {...props}>
                <Stack direction="row">
                    <Field
                        name='password'
                        component={TextField}
                        required
                        errors={touched.excel && errors.excel}
                        clear={handleClear}
                        label={'chose file'}
                        type={'file'}
                        focused
                        onChange={onChange}
                    />
                </Stack>


            </Form>

            <TableContainer component={Paper} sx={{ margin:'1rem',width:'97%'}}>
                <Table sx={{minWidth: 300}} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">name</TableCell>
                            <TableCell align="right">rank</TableCell>
                            <TableCell align="right">position</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {peoples.data.map((people:any,index:number) => (
                            <TableRow
                                key={`tableRow${index}`}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {people.fullName}
                                </TableCell>
                                <TableCell align="right">{people.rank}</TableCell>
                                <TableCell align="right">{people.position}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};


