import { configureStore } from '@reduxjs/toolkit'
import EventsReducer from '../features/event/eventSlice'

const store = configureStore({
    reducer : {
        Events : EventsReducer
    }
});

export default store;