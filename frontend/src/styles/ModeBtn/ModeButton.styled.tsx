import styled from "styled-components";
import { theme } from "../Global";




const StyledModeButton = styled.button<{mode: Mode}>`
    width: 50%;
    height: 106px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.lines_light};
    transition: all ease-in-out ${theme.transitionTimes.medium};
    color: white;
    font-size: 24px;
    letter-spacing: 0.15rem;

    &:hover {
        background-color: ${theme.colors.grey_dark};
        border: 1px solid ${theme.colors.white};
    }

`


export default StyledModeButton