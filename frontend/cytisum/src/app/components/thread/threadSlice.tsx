import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface ThreadState {
    threadViewerOpen: boolean,
    threadNumber: number,
    newThreadOpen: boolean,
    uploadedFiles: File[],
    uploadingFiles: File[],
    uploadStatus: String
}

export const initialState : ThreadState = {
    threadViewerOpen: false,
    threadNumber: -1,
    newThreadOpen: false,
    uploadedFiles: [],
    uploadingFiles: [],
    uploadStatus: "No files selected."
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

}

const chunkUpload = (file: File, index: number, chunkSize: number, upload: any, totalFileSize: number) => {
  const start = index * chunkSize;
  const stop = start + chunkSize < totalFileSize ? start + chunkSize : totalFileSize;
  const blob = file.slice(start, stop);
  upload(blob, start, stop - 1, totalFileSize);
}


async function upload(blob: string, start: number, stop: number, totalFileSize: number) {
  const contentRange = `bytes ${start}-${stop}/${totalFileSize}`
  var name: string = process.env.NEXT_PUBLIC_CLOUDINARY_NAME!;
  var preset: string = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!;

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
    newThread: (state: ThreadState) => { state.newThreadOpen = true; },
    postThread: (state: ThreadState, action) => { },
    closeNewThread: (state: ThreadState) => { state.newThreadOpen = false; },
    uploadImages: (state: ThreadState) => { useUploadFiles(state.uploadingFiles); }
  },
  extraReducers: (builder) => {
    builder.addCase(useUploadFiles.fulfilled, (state, action) => {
      state.uploadStatus = "Successfully uploaded " + state.uploadedFiles.length + " files."
    }),
    builder.addCase(useUploadFiles.rejected, (state, action) => {
      state.uploadStatus = "File upload failed."
    }),
    builder.addCase(useUploadFiles.pending, (state, action) => {
      state.uploadStatus = "Uploading " + state.uploadingFiles.length + " files..."
    })
  }
})

export const selectThreadNumber = (state: any) => state.thread.threadNumber;
export const selectThreadViewerOpen = (state: any) => state.thread.threadViewerOpen;
export const selectUploadedFiles = (state: any) => state.thread.uploadedFiles;
export const selectUploadingFiles = (state: any) => state.thread.uploadingFiles;
export const selectNewThreadOpen = (state: any) => state.thread.newThreadOpen;
export const selectUploadStatus = (state: any) => state.thread.uploadStatus;

export const { 
  setThreadNumber, 
  openThread, 
  closeThread, 
  closeNewThread, 
  newThread, 
  uploadImages 
} = threadSlice.actions

export default threadSlice.reducer