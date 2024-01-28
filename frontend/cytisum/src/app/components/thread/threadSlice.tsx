import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface ThreadState {
    threadViewerOpen: boolean,
    threadNumber: number,
    newThreadOpen: boolean,
    uploadedFiles: File[],
    uploadingFiles: File[]
}

export const initialState : ThreadState = {
    threadViewerOpen: false,
    threadNumber: -1,
    newThreadOpen: false,
    uploadedFiles: [],
    uploadingFiles: []
}

const generateUniqueUploadId = () => {
  return `uqid-${Date.now()}`;
};

const readBlob = (file: File, chunkSize: number) => {
  chunkSize = chunkSize || 1024 * 1000 * 1
  const fileSize = file.size
  const chunkLength = Math.ceil(file.size / chunkSize)

  for (var i = 0; i < chunkLength; i++) {
    chunkUpload(file, i, chunkSize, upload, fileSize)
  }

  console.log("Chunk Finish");
}

const chunkUpload = (file: File, index: number, chunkSize: number, upload: any, totalFileSize: number) => {
  var reader = new FileReader();

  const start = index * chunkSize;
  const stop = start + chunkSize < totalFileSize ? start + chunkSize : totalFileSize;
  const blob = file.slice(start, stop);
  console.log(typeof(blob));
  console.log(blob);
  upload(blob, start, stop - 1, totalFileSize);
}


async function upload(blob: string, start: number, stop: number, totalFileSize: number) {
  const timestamp = 1590947575
  const contentRange = `bytes ${start}-${stop}/${totalFileSize}`
    var name: string = process.env.NEXT_PUBLIC_CLOUDINARY_NAME!;
    var preset: string = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!;

  const headers = {
    "X-Unique-Upload-Id": timestamp,
    "Content-Range": `${contentRange}`,
  }
  var form_data = new FormData();
  form_data.append("file", blob);
  form_data.append("upload_preset", preset);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${name}/auto/upload`,
    {
      method: "POST",
      body: form_data,
      headers: {
        "X-Unique-Upload-Id": generateUniqueUploadId(),
        "Content-Range": contentRange,
      },
    }
  );
  if (!response.ok) {
    console.log(response)
    throw new Error("Chunk upload failed.");
  }
}


export const useUploadFiles = createAsyncThunk('threads/uploadImages', async(files: File[], thunkAPI) => {
  let ret : any[] = [];

  for (var file in files) {
    readBlob(files[file], 1024 * 1000 * 10)
  }
});

export const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    setThreadNumber: (state: ThreadState, action) => { state.threadNumber = action.payload; },
    openThread: (state: ThreadState) => { state.threadViewerOpen = true; },
    closeThread: (state: ThreadState) => { state.threadViewerOpen = false; },
    newThread: (state: ThreadState) => { state.newThreadOpen = true; console.log("YOOOO"); },
    postThread: (state: ThreadState, action) => { },
    closeNewThread: (state: ThreadState) => { state.newThreadOpen = false; },
    uploadImages: (state: ThreadState) => { useUploadFiles(state.uploadingFiles); console.log("fuck") }
  },
  extraReducers: (builder) => {
    builder.addCase(useUploadFiles.fulfilled, (state, action) => {
      console.log(action.payload)
    }),
    builder.addCase(useUploadFiles.rejected, (state, action) => {
      console.log("FAILED")
    }),
    builder.addCase(useUploadFiles.pending, (state, action) => {
      console.log("UPLOADING...")
    })
  }
})

export const selectThreadNumber = (state: ThreadState) => state.threadNumber;
export const selectThreadViewerOpen = (state: ThreadState) => state.threadViewerOpen;
export const selectUploadedFiles = (state: ThreadState) => state.uploadedFiles;
export const selectUploadingFiles = (state: ThreadState) => state.uploadingFiles;
export const selectNewThreadOpen = (state: ThreadState) => state.newThreadOpen;

export const { setThreadNumber, openThread, closeThread, closeNewThread, newThread, uploadImages } = threadSlice.actions

export default threadSlice.reducer