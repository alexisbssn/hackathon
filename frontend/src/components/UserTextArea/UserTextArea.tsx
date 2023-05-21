import { UserTextAreaType } from "../../vite-env"
import StyledUserTextArea from "./UserTextArea.styled"

const UserTextArea = ({
	placeHolder,
	register,
	name,
}: { placeHolder: string } & UserTextAreaType) => {

	if (register && name) {
		return (
			<StyledUserTextArea
				placeholder={placeHolder}
				{...(register && name && register(name))}
			/>
		)
	} else {
		return (
			<StyledUserTextArea
				placeholder={placeHolder}
			/>
		)
	}
}

export default UserTextArea
