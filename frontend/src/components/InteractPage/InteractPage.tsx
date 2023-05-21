import { useState } from 'react'
import StyledInteractPage from './InteractPage.styled'
import InteractSection from './InteractSection'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import AnswerBox from './AnswerBox/AnswerBox'

const InteractPage = ({active}: Active) => {

  const [promptResult, setPromptResult] = useState('');

  return (
    <StyledInteractPage active={active}>
      <InteractSection>
        <LeftSection handlePrompt={() => {setPromptResult("quick replied")}}></LeftSection>
        <RightSection handlePrompt={() => {setPromptResult("prompted")}}></RightSection>
      </InteractSection>
      <InteractSection>
        <AnswerBox promptContent={promptResult}></AnswerBox>
      </InteractSection>
    </StyledInteractPage>
  )
}

export default InteractPage