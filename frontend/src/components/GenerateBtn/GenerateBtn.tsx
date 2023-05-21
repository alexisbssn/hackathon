// GenerateBtn
import StyledGenerateBtn from './GenerateBtn.styled'

const GenerateBtn = ({ handleClick }: {handleClick: () => void}) => {
  return (
    <StyledGenerateBtn type="button" onClick={handleClick}>Generate</StyledGenerateBtn>
  )
}

export default GenerateBtn
