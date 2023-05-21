import { createSlice } from "@reduxjs/toolkit";


type designPageSliceType = {
    value : {
        age: number 
		alignment: string
		background: string
		character: string
		generateMore: string
		race: string
    }
}

const initialState: designPageSliceType = {
	value: {
		age: 0,
		alignment: "",
		background: "",
		character: "",
		generateMore: "",
		race: ""
	}
}

const designPageSlice = createSlice({
	name: 'designPage_slice',
	initialState,
	reducers: {
		
	}
})