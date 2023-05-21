
import { UserInputType } from "../../vite-env"
import StyledUserInput from "./UserInput.styled"

const UserInput = ({
	placeHolder,
	type,
	register,
	name
}: { placeHolder: string } & UserInputType) => {
	return (
		<StyledUserInput
			placeholder={placeHolder}
			type={type}
			{...(register && name && register(name))}
		/>
	)
}

export default UserInput
