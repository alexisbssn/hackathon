import styled from "styled-components";
import { theme } from "../Global";


const StyledGeneralButton = styled.button`
    padding: 15px 30px;
    background-color: transparent;
    border: 1px solid ${theme.colors.purple};
    border-radius: 5px;
    cursor: pointer;
    color: ${theme.colors.lines_light};
    letter-spacing: 0.15rem;
    &:hover {
        background-color: ${theme.colors.purple};
        color: ${theme.colors.white}
    }
`

export default StyledGeneralButton