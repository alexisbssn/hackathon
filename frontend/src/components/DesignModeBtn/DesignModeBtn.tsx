import StyledDesignModeBtn from './DesignModeBtn.styled'
import { useAppDispatch } from '../../hooks/redux/reduxHooks'

const DesignModeBtn = ({children}: ModeButtonPropType) => {
  const dispatch = useAppDispatch()
  return (
    <StyledDesignModeBtn onClick={() => console.log('test')}>{children}</StyledDesignModeBtn>
  )
}

export default DesignModeBtn