import StyledGenerateBtn from './GenerateBtn.styled'

const GenerateBtn = ({handleClick}: {handleClick: () => void}) => {
  return (
    <StyledGenerateBtn onClick={handleClick} type='button'>Generate</StyledGenerateBtn>
  )
}

export default GenerateBtn