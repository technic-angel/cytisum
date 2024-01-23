"use client";


import React, {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ThreadComments from './ThreadComments';


const ThreadContainer = () => {


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        height: "90%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 15,
        p: 4,
        display:"flex",
        justifyContent: "space-around"
      };

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
            > 
                Thread Popup Place Holder
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{width:"50%", height:"100%",  border:"solid black 2px"}}>

                </div>
                <div style={{width:"50%", height:"100%",  border:"solid black 2px", overflow: "scroll"}}>
                    <ThreadComments />
                </div>
            </Box>
        </Modal>
      </div>
    )
}

export default ThreadContainer