import PromptBox from "../PromptBox/PromptBox"
import StyledRightSection from "./RightSection.styled"

const RightSection = ({handlePrompt}: {handlePrompt: (prompt: String) => void}) => {
  return (
    <StyledRightSection>
      <PromptBox handlePrompt={handlePrompt}></PromptBox>
    </StyledRightSection>
  )
}

export default RightSection