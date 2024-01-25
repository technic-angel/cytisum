import { createSlice } from '@reduxjs/toolkit'
import React from "react"

export interface ThreadState {
    open: boolean,
    threadNumber: number
}

export const initialState : ThreadState = {
    open: false,
    threadNumber: -1
}

export const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    setThreadNumber: (state: ThreadState, action) => { state.threadNumber = action.payload; },
    openThread: (state: ThreadState) => { state.open = true; },
    closeThread: (state: ThreadState) => { state.open = false; }
  }
})

export const selectThreadNumber = (state: ThreadState) => state.threadNumber;
export const selectOpen = (state: ThreadState) => state.open;

export const { setThreadNumber, openThread, closeThread } = threadSlice.actions

export default threadSlice.reducer