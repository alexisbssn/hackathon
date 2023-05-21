import { UserInputType } from "../../vite-env"
import StyledUserInput from "./UserInput.styled"

const UserInput = ({
	placeHolder,
	type,
	register,
	name,
}: { placeHolder: string } & UserInputType) => {

	if (register && name) {
		return (
			<StyledUserInput
				placeholder={placeHolder}
				type={type}
				{...(register && name && register(name))}
			/>
		)
	} else {
		return (
			<StyledUserInput
				placeholder={placeHolder}
				type={type}
			/>
		)
	}
}

export default UserInput
