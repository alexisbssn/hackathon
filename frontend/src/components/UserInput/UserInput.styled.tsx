import styled from "styled-components"
import { theme } from "../../styles/Global"

const StyledUserInput = styled.input`
	background-color: ${theme.colors.grey_dark};
	border: 1px solid ${theme.colors.lines_light};
	padding: 15px;
	color: ${theme.colors.white};
	border-radius: 3px;
	font-size: 14px;
	width: 40vw;
	margin-top: 50px;

	&::placeholder {
		color: white;
		font-size: 14px;
	}
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0; /* Optional: Remove the default margin */
	}
`

export default StyledUserInput
