import StyledQuickReplyBtn from './QuickReplyButton.styled'

const QuickReplyBtn = ({title, handleClick}: {title: String, handleClick: () => void}) => {
  return (
    <StyledQuickReplyBtn onClick={handleClick} type='button'>{title}</StyledQuickReplyBtn>
  )
}

export default QuickReplyBtn