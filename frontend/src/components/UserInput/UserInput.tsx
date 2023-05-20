import StyledUserInput from "./UserInput.styled"

const UserInput = ({
	placeHolder,
	type,
}: { placeHolder: string } & UserInputType) => {
	return (
		<StyledUserInput
			placeholder={placeHolder}
			type={type}
		/>
	)
}

export default UserInput
