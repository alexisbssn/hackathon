import { useForm } from "react-hook-form"
import GenerateBtn from "../GenerateBtn/GenerateBtn"
import SaveBtn from "../SaveBtn/SaveBtn"
import UserInput from "../UserInput/UserInput"
import UserTextArea from "../UserTextArea/UserTextArea"
import StyledDesignPage from "./DesignPage.styled"
import StyledDesignPageLeftSection from "./DesignPageLeftSection.styled"
import StyledDesignPageRightSection from "./DesignPageRightSection.styled"
import { ZodType, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	useGenerateMutation,
} from "../../features/api/designApiSlice"
import { useState } from "react"
import { Active, DesignFormData } from "../../vite-env"

const schema: ZodType<DesignFormData> = z.object({
	name: z.string().min(3).max(30),
	age: z.number().nonnegative().int(),
	race: z.string().min(3).max(30),
	background: z.string().min(3).max(30),
})
const DesignPage = ({ active }: Active) => {
	const [generateMoreText, setGenerateMoreText] = useState("")

	const { register, getValues, setError, clearErrors, handleSubmit } =
		useForm<DesignFormData>({
			resolver: zodResolver(schema),
		})

	const [generateMutation, generate] = useGenerateMutation()

	const onGenerateClick = () => {
		console.log("you clicked on the generate button")
		handleSubmit((data) => console.log('we made it', data))
	}

	const onSaveClick = () => {
		console.log("you clicked on the save button")
	}

	return (
		<StyledDesignPage active={active}>
			<StyledDesignPageLeftSection>
				<UserInput
					placeHolder="name"
					type="text"
					name="name"
					register={register}
				/>
				<UserInput
					placeHolder="Age"
					type="number"
					name="age"
					register={register}
				/>
				<UserTextArea
					placeHolder="background"
					name="background"
					register={register}
				/>
			</StyledDesignPageLeftSection>
			<StyledDesignPageRightSection>
				<UserInput
					placeHolder="Alignment"
					type="text"
				/>
				<UserInput
					placeHolder="Race"
					type="text"
					name="race"
					register={register}
				/>
				<UserTextArea placeHolder="Generate More" />
			</StyledDesignPageRightSection>
			<SaveBtn handleClick={onSaveClick} />
			<GenerateBtn handleClick={onGenerateClick} />
		</StyledDesignPage>
	)
}

export default DesignPage
