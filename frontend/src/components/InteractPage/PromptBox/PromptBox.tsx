import Title from "../../Title/Title"
import StyledUserTextArea from "../../UserTextArea/UserTextArea.styled"
import StyledPromptBox from "./PromptBox.styled"

const PromptBox = ({handleClick}: {handleClick: () => void}) => {
  return (
    <StyledPromptBox>
      <Title text="Answer to the following:"></Title>
      <StyledUserTextArea name="text"></StyledUserTextArea>
    </StyledPromptBox>
  )
}

export default PromptBox