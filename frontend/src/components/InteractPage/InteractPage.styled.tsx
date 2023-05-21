import styled from "styled-components";


const StyledInteractPage = styled.section<Active>`
    display: ${({active}) => active ? 'flex' : 'none'}

    .sec {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export default StyledInteractPage