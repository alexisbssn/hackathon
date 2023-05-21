import Title from "../../Title/Title"
import QuickReplyBtn from "../QuickReplyButton/QuickReplyButton"
import StyledLeftSection from "./LeftSection.styled"

const LeftSection = ({handlePrompt}: {handlePrompt: (prompt: String) => void}) => {
  return (
    <StyledLeftSection>
      <Title text="Quick replies"></Title>
      <QuickReplyBtn title="Salute" handleClick={() => handlePrompt("Greetings!")}></QuickReplyBtn>
      <QuickReplyBtn title="Laugh" handleClick={() => handlePrompt("*tells a good joke*")}></QuickReplyBtn>
      <QuickReplyBtn title="Apologize" handleClick={() => handlePrompt("Ouch, you stepped on my foot!")}></QuickReplyBtn>
      <QuickReplyBtn title="Congratulate" handleClick={() => handlePrompt("I just graduated!")}></QuickReplyBtn>
      <QuickReplyBtn title="Insult" handleClick={() => handlePrompt("Go ahead, insult me. Give me your worst.")}></QuickReplyBtn>
    </StyledLeftSection>
  )
}

export default LeftSection