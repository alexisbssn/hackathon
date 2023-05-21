import { useState } from 'react'
import StyledInteractPage from './InteractPage.styled'
import InteractSection from './InteractSection'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import AnswerBox from './AnswerBox/AnswerBox'
import { useGenerateMutation } from '../../features/api/designApiSlice'

const InteractPage = ({active}: Active) => {

  const [promptResult, setPromptResult] = useState('');

  const [answerTo] = useGenerateMutation()
  
  const handlePrompt = (prompt: String) => {
		// todo
    const data = {
      characterAttributes: {
        name: "Bob the builder",
        age: 35,
        race: "human",
        background: "Bob, a character in a children's TV show, is a building contractor, specialising in masonry, along with his colleague Wendy, various neighbours, and friends, and equipment, and their gang of anthropomorphised work-vehicles, Scoop, Muck, Dizzy, Roley, Lofty and many others"
      }
    }
    // end todo

		const { age, background, name, race } = data.characterAttributes
		const dataReady = {
			characterAttributes: {
				name,
				age,
				race,
				background,
			},

      prompt
		}
		answerTo(dataReady)
			.unwrap()
			.then((response: any) => {
        console.log(response)
				setPromptResult(response.result)
			})
			.catch((error: string) => console.log(error))
	}

  return (
    <StyledInteractPage active={active}>
      <InteractSection>
        <LeftSection handlePrompt={handlePrompt}></LeftSection>
        <RightSection handlePrompt={handlePrompt}></RightSection>
      </InteractSection>
      <InteractSection>
        <AnswerBox promptContent={promptResult}></AnswerBox>
      </InteractSection>
    </StyledInteractPage>
  )
}

export default InteractPage