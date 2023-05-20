import StyledUserTextArea from './UserTextArea.styled'

const UserTextArea = ({placeHolder}: { placeHolder: string }) => {
  return (
    <StyledUserTextArea placeholder={placeHolder} />
  )
}

export default UserTextArea