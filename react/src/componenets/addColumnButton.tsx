import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {v4 as uuidv4} from "uuid";
import AddColumnButtonProps from "../interfaces/AddColumnButton";
import ModalAddColumn from "./modalAddColumn";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddColumnButton(props:AddColumnButtonProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                Add Column
                <Button
                    onClick={handleOpen}
                    sx={{width:"200px", maxHeight:"50px"}}
                    variant="outlined"
                >
                +
                </Button>
            </div>
            <ModalAddColumn open={open} handleOpen={handleOpen} handleClose={handleClose} data={props.data} handleDataChange={props.handleDataChange}/>
        </div>
    );
}