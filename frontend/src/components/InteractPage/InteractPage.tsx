import StyledInteractPage from './InteractPage.styled'
import InteractSection from './InteractSection'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'

const InteractPage = ({active}: Active) => {
  return (
    <StyledInteractPage active={active}>
      <InteractSection>
        <LeftSection handlePrompt={() => {}}></LeftSection>
        <RightSection handlePrompt={() => {}}></RightSection>
      </InteractSection>
      <InteractSection>
        <br/>results
      </InteractSection>
    </StyledInteractPage>
  )
}

export default InteractPage