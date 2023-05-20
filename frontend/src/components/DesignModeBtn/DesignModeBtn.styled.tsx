import styled, { css } from "styled-components";
import StyledModeButton from "../../styles/ModeBtn/ModeButton.styled";
import { theme } from "../../styles/Global";


const StyledDesignModeBtn = styled(StyledModeButton)`
    ${({mode}) => mode === "design" && css`
        background-color: ${theme.colors.grey_dark};
        border: 1px solid ${theme.colors.purple};
    `}

`

export default StyledDesignModeBtn