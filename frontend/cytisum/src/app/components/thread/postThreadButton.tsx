import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import {
    newThread,
    ThreadState
} from './threadSlice'
import { connect, useDispatch } from "react-redux"
import { useReducer } from "react"
import { useSelector } from "react-redux"

function mapStateToProps(state : ThreadState) {
    const s = state;
    return {
        newThreadOpen: s.newThreadOpen,
        threadNumber: s.threadNumber,
        threadViewerOpen: s.threadViewerOpen,
        uploadingFiles: s.uploadingFiles,
        uploadedFiles: s.uploadedFiles
    }
}

const PostThreadButton = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const dispatch = useDispatch();
    return (
        <Fab 
            color="primary" 
            aria-label="add" 
            sx={{
                position: "fixed", 
                bottom: 24, 
                right: 24
            }}
            onClick={() => {
                dispatch(newThread());
                forceUpdate();
            }}
        >
            <AddIcon />
        </Fab>
    )
}

export default connect(mapStateToProps)(PostThreadButton);