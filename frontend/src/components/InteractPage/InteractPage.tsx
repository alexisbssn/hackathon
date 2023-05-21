import StyledInteractPage from './InteractPage.styled'
import InteractSection from './InteractSection'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'

const InteractPage = ({active}: Active) => {
  return (
    <StyledInteractPage active={active}>
      <InteractSection>
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </InteractSection>
      
      <br/>results
    </StyledInteractPage>
  )
}

export default InteractPage