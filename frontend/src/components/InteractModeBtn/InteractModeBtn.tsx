import React from "react"
import StyledInteractModeBtn from "./InteractModeBtn.styled"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import { setMode } from "../../features/modeSlice"

const InteractModeBtn = ({ children }: ModeButtonPropType) => {
	const dispatch = useAppDispatch()
	const mode = useAppSelector(state => state.modeSlice.value.mode)
	return (
		<StyledInteractModeBtn onClick={() => dispatch(setMode("interact"))} mode={mode}>
			{children}
		</StyledInteractModeBtn>
	)
}

export default InteractModeBtn
