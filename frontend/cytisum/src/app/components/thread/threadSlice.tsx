"use client"

import { createSlice } from '@reduxjs/toolkit'
import React from "react"

export const threadSlice = createSlice({
  name: 'thread',
  initialState: {
    showThreadContainer: false,
    focusedThread: -1
  },
  reducers: {
    setFocusedThread: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.focusedThread = action.payload;
    },
    showContainer: state => {
      state.showThreadContainer = true;
    },
    hideContainer: state => {
      state.showThreadContainer = false;
    }
  }
})

export const selectFocusedThread = (state: any) => state.focusedThread;
export const selectVisible = (state: any) => state.showThreadContainer;

export const { setFocusedThread, showContainer, hideContainer } = threadSlice.actions

export default threadSlice.reducer