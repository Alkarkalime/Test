import PropTypes from 'prop-types';

import {useCallback, useEffect, useMemo} from "react";
// material-ui
import Modal from '@mui/material/Modal';
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL} from "../../store/actions";
import {Card, Typography} from "@mui/material";
// project import

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const CustomMainModal = () => {
    const modal = useSelector((state: any) => state.modal);
    const dispatch = useDispatch();
    const handleClose = useCallback(() => dispatch({type: CLOSE_MODAL}), []);
   useEffect(()=>{console.log(modal)},[modal])
    return (
        <Modal open={modal.opened} onClose={handleClose} sx={{alignItems:'center',justifyContent:'center', display:'flex'}}>
            <Card sx={{width:'50%',alignItems:'center',justifyContent:'center', display:'flex', flexDirection:'column',padding:'1rem'}} >
                <Typography variant='h2' sx={{padding:'1rem'}}>
                    {modal.data.title||'not content'}
                </Typography>
                {modal.data.content}
            </Card>
        </Modal>
    )
};


export default CustomMainModal;
