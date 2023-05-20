import StyledDesignModeBtn from './DesignModeBtn.styled'
import { useAppDispatch, useAppSelector } from '../../hooks/redux/reduxHooks'
import { setMode } from '../../features/modeSlice'

const DesignModeBtn = ({children}: ModeButtonPropType) => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.modeSlice.value.mode)
  return (
    <StyledDesignModeBtn onClick={() => dispatch(setMode('design'))} mode={mode}>{children}</StyledDesignModeBtn>
  )
}

export default DesignModeBtn