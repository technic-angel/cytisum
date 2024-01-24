"use client";

import React, {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Provider, connect } from 'react-redux';
import interfaceStore from '../../store';

interface ThreadContainerProps {
    open: boolean,
    threadNumber: string
}

const ThreadContainer = (props: ThreadContainerProps) => {
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
      };

    const handleOpen = () => props.open = true;
    const handleClose = () => props.open = false;

    return (
        <div>
            <Provider store={interfaceStore}>
                <Button onClick={handleOpen}> 
                    Thread Popup Place Holder
                </Button>
                <Modal
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                </Box>
                </Modal>
            </Provider>
        </div>
    )
}

function mapStateToProps(state : any) {
    const { s } = state;
    return {
        showThreadContainer: s.showThreadContainer,
        focusedThread: s.focusedThread
    }
}

export default connect(mapStateToProps)(ThreadContainer)