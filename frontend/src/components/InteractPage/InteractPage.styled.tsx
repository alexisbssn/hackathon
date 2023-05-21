import styled from "styled-components";


const StyledInteractPage = styled.section<Active>`
    display: ${({active}) => active ? 'block' : 'none'}
`

export default StyledInteractPage