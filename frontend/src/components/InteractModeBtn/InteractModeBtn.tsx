import React from 'react'
import StyledInteractModeBtn from './InteractModeBtn.styled'

const InteractModeBtn = ({children}: ModeButtonPropType) => {
  return (
    <StyledInteractModeBtn onClick={() => console.log('test')}>{children}</StyledInteractModeBtn>
  )
}

export default InteractModeBtn