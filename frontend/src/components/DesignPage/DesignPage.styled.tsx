import styled from "styled-components";



const StyledDesignPage = styled.form<Active>`
    display: ${({active}) => active ? 'flex' : 'none'}
`


export default StyledDesignPage