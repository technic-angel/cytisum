"use client";

import React, { useReducer } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect, useDispatch, useSelector } from 'react-redux';
import { 
    ThreadState,
    closeThread,
 } from './threadSlice';

 import threads from '../../placeholder_data/placeholder_data'

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
    };

    const dispatch = useDispatch();
    const threadNumber = useSelector((state: any) => state.thread.threadNumber);
    const visible = useSelector((state: any) => state.thread.threadViewerOpen);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const post = threads.threads.find((thread) => thread.number == threadNumber);
    if (post === undefined) {
        dispatch(closeThread());
        return (null);
    }
    return (
        <div suppressHydrationWarning>
            <Modal
                open={visible}
                onClose={ () => {
                    dispatch(closeThread());
                    forceUpdate();
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {post.subject}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {post.comment}
                    </Typography>
            </Box>
            </Modal>
        </div>
        )
}

export function mapStateToProps(state : ThreadState) {
    const s = state;
    return {
        newThreadOpen: s.newThreadOpen,
        threadNumber: s.threadNumber,
        threadViewerOpen: s.threadViewerOpen,
        uploadingFiles: s.uploadingFiles,
        uploadedFiles: s.uploadedFiles
    }
}

export default connect(mapStateToProps)(ThreadContainer)