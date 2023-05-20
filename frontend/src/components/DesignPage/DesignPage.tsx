import GenerateBtn from "../GenerateBtn/GenerateBtn"
import SaveBtn from "../SaveBtn/SaveBtn"
import UserInput from "../UserInput/UserInput"
import UserTextArea from "../UserTextArea/UserTextArea"
import StyledDesignPage from "./DesignPage.styled"
import StyledDesignPageLeftSection from "./DesignPageLeftSection.styled"
import StyledDesignPageRightSection from "./DesignPageRightSection.styled"

const DesignPage = ({ active }: Active) => {
	return (
		<StyledDesignPage active={active}>
			<StyledDesignPageLeftSection>
				<UserInput placeHolder="Character" type="text"/>
				<UserInput placeHolder="Age" type="number"/>
				<UserTextArea placeHolder="background"/>
			</StyledDesignPageLeftSection>
			<StyledDesignPageRightSection>
				<UserInput placeHolder="Alignment" type="text"/>
				<UserInput placeHolder="Race" type="text"/>
				<UserTextArea placeHolder="Generate More"/>
			</StyledDesignPageRightSection>
			<SaveBtn />
			<GenerateBtn />
		</StyledDesignPage>
	)
}

export default DesignPage
