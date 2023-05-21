import { UserTextAreaType } from '../../vite-env'
import StyledUserTextArea from './UserTextArea.styled'


const UserTextArea = ({placeHolder}: { placeHolder: string } & UserTextAreaType) => {
  return (
    <StyledUserTextArea placeholder={placeHolder} />
  )
}

export default UserTextArea