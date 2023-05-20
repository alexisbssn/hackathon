import { createSlice } from "@reduxjs/toolkit"

type modeSliceType = {
	value: {
		age: number | undefined
		alignment: string
		background: string
		character: string
		generateMore: string
		race: string
	}
}

const initialState: modeSliceType = {
	value: {
		age: undefined,
		alignment: "",
		background: "",
		character: "",
		generateMore: "",
		race: "",
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
