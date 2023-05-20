import { createSlice } from "@reduxjs/toolkit";


type designPageSliceType = {
    value : {
        age: number | undefined
		alignment: string
		background: string
		character: string
		generateMore: string
		race: string
    }
}