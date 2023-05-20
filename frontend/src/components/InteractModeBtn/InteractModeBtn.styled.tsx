import styled, { css } from "styled-components";
import StyledModeButton from "../../styles/ModeBtn/ModeButton.styled";


const StyledInteractModeBtn = styled(StyledModeButton)`
    ${({mode, theme}) => mode === "interact" && css`
        background-color: ${theme.colors.grey_dark};
        border: 1px solid ${theme.colors.purple};
    `}
    

`

export default StyledInteractModeBtn