"use client";

import React, { useReducer } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect, useDispatch, useSelector } from 'react-redux';
import { 
    ThreadState,
    closeNewThread,
    uploadImages,
    useUploadFiles
 } from './threadSlice';

const mapDispatchToProps = (dispatch: any) => {
  return {
    UploadClick : (files: File[]) => dispatch(useUploadFiles(files)),
  }
}

const NewThreadContainer = (props: any) => {
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
    const visible = useSelector((state: any) => state.thread.newThreadOpen);
    const files = useSelector((state: any) => state.thread.uploadingFiles);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    return (
        <div suppressHydrationWarning>
            <Modal
                open={visible}
                onClose={ () => {
                    dispatch(closeNewThread());
                    forceUpdate();
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} hidden={!visible}>
                        <Button variant="contained" component="label" sx={{position: "absolute", left: "47%", top: "50%"}}>
                            Upload File
                            <input type="file" hidden multiple={true} onChange={(event) => {
                                var arr : File[] = []
                                for (var file = 0; file != event.target.files?.length; file++) {
                                    arr.push(event.target.files!.item(file)!)
                                }
                                console.log(arr);
                                if (arr.length > 0) 
                                    props.UploadClick(arr);
                                forceUpdate();
                            }}/>
                        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewThreadContainer)