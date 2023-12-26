import {Button, MenuItem, Stack, TextField} from "@mui/material";
import {useState} from "react";

export const ModalExcel = (data: any, saveData: any) => {
    const elements = ['position', 'rank', 'fullName'];
    const header=data[0];
    let dataForSave={
        position:'', rank:'', fullName:''
    }
    const onChange = (e: any) => {
        //@ts-ignore
       dataForSave[e.target.name]=e.target.value;
    }
    const submit = () => {
        saveData(dataForSave, data)
    }
    return (
        <Stack sx={{width: '100%'}}>
            {elements.map((element, index: number) => {
                return <Stack direction='row' key={`excelElement${index}`}
                              sx={{display: 'flex', justifyContent: 'space-evenly', padding: '1rem'}}>
                    <TextField
                        value={element}
                        inputProps={
                            {readOnly: true,}
                        }
                        sx={{padding: '1rem'}}>

                    </TextField>
                    <TextField
                        id="demo-simple-select"
                        label="select column"
                        select
                        onChange={onChange}
                        sx={{padding: '1rem', width: '20rem'}}
                        name={element}
                    >{Object.keys(header).map((item: string) => <MenuItem  value={item}>{header[item]}</MenuItem>)}

                    </TextField>
                </Stack>
            })}
            <Button variant='contained' onClick={submit}>
                Submit
            </Button>
        </Stack>
    )
}