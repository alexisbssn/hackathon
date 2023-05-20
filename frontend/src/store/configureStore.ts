import { configureStore } from "@reduxjs/toolkit"

import modeSliceReducer from "../features/modeSlice"


export const store = configureStore({
    reducer: {
        modeSlice: modeSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
