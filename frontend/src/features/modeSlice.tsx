import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type modeSliceType = {
	value: {
		mode: Mode
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
		setMode: (state, action: PayloadAction<Mode>) => {
			state.value.mode = action.payload
		},
	},
})

export default modeSlice.reducer
export const { setMode } = modeSlice.actions
