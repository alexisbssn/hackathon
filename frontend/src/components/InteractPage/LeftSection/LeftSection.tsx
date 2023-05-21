import Title from "../../Title/Title"
import QuickReplyBtn from "../QuickReplyButton/QuickReplyButton"
import StyledLeftSection from "./LeftSection.styled"

const LeftSection = ({}: {}) => {
  return (
    <StyledLeftSection>
      <Title text="Quick replies"></Title>
      <QuickReplyBtn title="Salute"></QuickReplyBtn>
      <QuickReplyBtn title="Laugh"></QuickReplyBtn>
      <QuickReplyBtn title="Apologize"></QuickReplyBtn>
      <QuickReplyBtn title="Congratulate"></QuickReplyBtn>
      <QuickReplyBtn title="Insult"></QuickReplyBtn>
    </StyledLeftSection>
  )
}

export default LeftSection