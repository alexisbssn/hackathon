import styled from "styled-components";
import { theme } from "../../styles/Global";



const StyledUserTextArea = styled.textarea`
    background-color: ${theme.colors.grey_dark};
    border: 1px solid ${theme.colors.lines_light};
    color: ${theme.colors.white};
    padding: 15px;
    font-size: 14px;
    width: 40vw;
    height: 50vh;
    margin-top: 50px;
    
    resize: none;
    border-radius: 3px;
    &::placeholder {
        color: ${({theme}) => theme.colors.white};
    }

`

export default StyledUserTextArea