import { configureStore, combineReducers } from '@reduxjs/toolkit'
import threadReducer from './components/thread/threadSlice'

const store = configureStore({
    reducer: {
        thread: threadReducer
    }
})

export default store