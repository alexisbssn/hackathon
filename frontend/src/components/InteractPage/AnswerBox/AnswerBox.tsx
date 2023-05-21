import StyledUserTextArea from "../../UserTextArea/UserTextArea.styled"
import StyledAnswerBox from "./AnswerBox.styled"

const AnswerBox = ({promptContent}: {promptContent: string}) => {
  return (
    <StyledAnswerBox>
      <StyledUserTextArea name="text" readOnly value={promptContent}></StyledUserTextArea>
    </StyledAnswerBox>
  )
}

export default AnswerBox