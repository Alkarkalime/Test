import {useCallback, useEffect, useState} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// material-ui
import {Autocomplete, Box, Button, Card, Grid, MenuItem, Stack, TextField, Typography} from '@mui/material';
// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import {gridSpacing} from '../../../store/constant';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_DATA, OPEN_MODAL} from "../../../store/actions";
import {ModalExcel} from "../../utilities/people/components/LoginForm/ModalExcel/ModalExcel";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const dispatch = useDispatch();

    const [templates, setTemplates] = useState<any>({
        updated: new Date(),
        templates: [{
            title: 'header',
            editor: <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"

            />
        },
            {
                title: 'footer',
                editor:
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor&nbsp;5!</p>"

                    />
            }
        ]
    })
    const peoples = useSelector((state: any) => state.peoples);
    useEffect(() => {
        dispatch({type: LOAD_DATA})
    }, []);
    useEffect(() => {
        console.log(templates)
    }, [templates]);
    const addUser = useCallback(() => {
        const saveData=()=>{

        }
        dispatch({
            type: OPEN_MODAL,
            opened: true,
            data: {
                title: 'select field',
                content: ModalAddUser(peoples.data,saveData)
            }
        })
    }, [peoples])

    const addTemplate = useCallback(() => {
        let newTemplates = templates.templates;
        newTemplates.splice(templates.templates.length-1, 0, {
            title: 'body',
            editor: <><CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"

            /><Button variant='contained' key={templates.templates.length - 1} onClick={addUser} sx={{margin: '1rem'}}>
                ADD USERS
            </Button></>

        })
        setTemplates({
            templates: newTemplates, updated: new Date(),
        })
    }, [templates])
    return (
        <>
            <Button variant='contained' onClick={addTemplate}>
                ADD TEMPLATE
            </Button>
            {
                templates.templates.map((template: any, index: number) => <Card
                    sx={{margin: '2rem', padding: '2rem'}}><Typography>{template.title}</Typography>{template.editor}
                </Card>)
            }
        </>
    );
};

export default Dashboard;

const ModalAddUser = ( data:any,saveData: any) => {
    console.log(data)
    const onChange = (e: any) => {
        //@ts-ignore
        dataForSave[e.target.name] = e.target.value;
    }
    const submit = () => {
     //   saveData(dataForSave, data)
    }
    return (
        <Stack sx={{width: '100%'}}>
            <Stack direction="row">
                <Autocomplete
                    renderOption={(props, option:any) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                            {option.fullName}
                        </Box>
                    )}
                    renderInput={(params) => <TextField label="name" inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}/>}
                    options={data}
                onChange={(e)=>{console.log(e)}}
                />
            </Stack>
            <Button variant='contained' onClick={submit}>
                Submit
            </Button>
        </Stack>
    )
}