"use client";

import React, { useEffect, useReducer } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, TextField, Stack } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux';
import { 
    ThreadState,
    closeNewThread,
    useUploadFiles,
    selectUploadStatus
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
        width: '45%',
        height: "360px",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 15,
        minHeight: "360px",
        p: 4,
    };


    const dispatch = useDispatch();
    const visible = useSelector((state: any) => state.thread.newThreadOpen);
    const statusMsg = useSelector(selectUploadStatus)
    const fields = useSelector((state: any) => state.thread)
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
        forceUpdate()
    }, [fields])

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
                sx={{minHeight: "240px"}}
            >
                <Box sx={style} hidden={!visible}>
                    <FormControl margin='normal' sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <TextField id="outlined-basic" label="Name (Optional)" size="small" sx={{position: 'absolute', left: "0%", maxHeight: "20px", width: "100%"}} />
                            <TextField id="outlined-basic" label="Subject (Optional)" size="small" sx={{position: 'absolute', left: "0%", top: "44px", width: "100%"}} />
                            <Button variant="contained" component="label" sx={{position: "absolute", left: "0%", top: "93px", height: "36px", textAlign: 'left'}}>
                                Upload Files
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
                            <Typography sx={{position: 'absolute', top: "100px", left: "136px"}}>
                                {statusMsg}
                            </Typography>
                            <TextField
                                id="outlined-multiline-static"
                                label="Comment"
                                multiline
                                rows={4}
                                defaultValue=""
                                sx={{position: "absolute", left: "0%", top: "140px", width: "100%"}}
                            />
                    </FormControl>
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