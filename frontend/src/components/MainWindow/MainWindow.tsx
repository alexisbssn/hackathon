import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import DesignModeBtn from "../DesignModeBtn/DesignModeBtn"
import InteractModeBtn from "../InteractModeBtn/InteractModeBtn"
import StyledModeButtonContainer from "../ModeButtonContainer/ModeButtonContainer.styled"
import StyledMainWindow from "./MainWindow.styled"

const MainWindow = () => {
	const dispatch = useAppDispatch()

	
	return (
		<>
			<StyledMainWindow>
				<StyledModeButtonContainer>
					<DesignModeBtn>Design</DesignModeBtn>
					<InteractModeBtn>Interact</InteractModeBtn>
				</StyledModeButtonContainer>






			</StyledMainWindow>
		</>
	)
}

export default MainWindow
