import { createSlice } from "@reduxjs/toolkit"

type modeSliceType = {
	value: {
		mode: "design" | 'interact'
	}
}

const initialState: modeSliceType = {
	value: {
		mode: 'design'
	},
}

const modeSlice = createSlice({
	name: "mode_slice",
	initialState,
	reducers: {
		setMode: (state) => {
			return state
		},
	},
})

export default modeSlice.reducer
export const { setMode } = modeSlice.actions
