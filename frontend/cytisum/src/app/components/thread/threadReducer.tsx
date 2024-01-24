import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const showThreadContainer = createAction('threadContainer/show')
const hideThreadContainer = createAction('threadContainer/hide')
const setFocusedThread = createAction<number | undefined>('threadContainer/focus')

export const initialState = {
    showThread: false,
    focusedThread: -1
}

const threadReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(
            showThreadContainer, (state, action) => {
                state.showThread = true;
            })
        .addCase(
            hideThreadContainer, (state, action) => {
                state.showThread = false;
            })
        .addCase(
            setFocusedThread, (state, action) => {
                state.focusedThread = action.payload === undefined ? -1 : action.payload;
            })
})

export default threadReducer;