import { configureStore, combineReducers } from '@reduxjs/toolkit'
import threadReducer from './components/thread/threadReducer'

const store = configureStore({
    reducer: {
        thread: threadReducer
    }
})

export default store