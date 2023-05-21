import { configureStore } from "@reduxjs/toolkit"
import {apiSlice} from '../features/api/designApiSlice'


import modeSliceReducer from "../features/modeSlice"


export const store = configureStore({
    reducer: {
        modeSlice: modeSliceReducer,
        api: apiSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
