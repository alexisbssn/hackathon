import StyledSaveBtn from "./SaveBtn.styled"

const SaveBtn = ({handleClick}: {handleClick: () => void}) => {
  return (
    <StyledSaveBtn onClick={handleClick} type="button">Save</StyledSaveBtn>
  )
}

export default SaveBtn