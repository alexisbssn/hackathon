import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import DesignModeBtn from "../DesignModeBtn/DesignModeBtn"
import DesignPage from "../DesignPage/DesignPage"
import InteractModeBtn from "../InteractModeBtn/InteractModeBtn"
import InteractPage from "../InteractPage/InteractPage"
import StyledModeButtonContainer from "../ModeButtonContainer/ModeButtonContainer.styled"
import StyledMainWindow from "./MainWindow.styled"

const MainWindow = () => {
	const dispatch = useAppDispatch()
	const mode = useAppSelector(state => state.modeSlice.value.mode)

	

	return (
		<>
			<StyledMainWindow>
				<StyledModeButtonContainer>
					<DesignModeBtn>Design</DesignModeBtn>
					<InteractModeBtn>Interact</InteractModeBtn>
				</StyledModeButtonContainer>
				<DesignPage active={mode === "design" ? true : false}/>
				<InteractPage active={mode === "interact" ? true : false}/>
			</StyledMainWindow>
		</>
	)
}

export default MainWindow
