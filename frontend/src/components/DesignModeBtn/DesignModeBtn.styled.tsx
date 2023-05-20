import styled, { css } from "styled-components";
import StyledModeButton from "../../styles/ModeBtn/ModeButton.styled";


const StyledDesignModeBtn = styled(StyledModeButton)`
    ${({mode, theme}) => mode === "design" && css`
        background-color: ${theme.colors.grey_dark};
        border: 1px solid ${theme.colors.purple};
    `}

`

export default StyledDesignModeBtn