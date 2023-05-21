import { useState } from "react"
import StyledGeneralButton from "../../../styles/Button/GeneralButton.styled"
import Title from "../../Title/Title"
import StyledUserTextArea from "../../UserTextArea/UserTextArea.styled"
import StyledPromptBox from "./PromptBox.styled"

const PromptBox = ({handlePrompt}: {handlePrompt: (text: String) => void}) => {
  const [promptContent, setPromptContent] = useState('');

  return (
    <StyledPromptBox>
      <Title text="Answer to the following:"></Title>
      <StyledUserTextArea 
        name="text"
        value={promptContent} 
        onChange={e => setPromptContent(e.target.value)}>
      </StyledUserTextArea>
      <StyledGeneralButton onClick={() => handlePrompt(promptContent)} type='button'>Tell</StyledGeneralButton>
    </StyledPromptBox>
  )
}

export default PromptBox