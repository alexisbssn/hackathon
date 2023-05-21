import { useForm } from "react-hook-form"
import GenerateBtn from "../GenerateBtn/GenerateBtn"
import SaveBtn from "../SaveBtn/SaveBtn"
import UserInput from "../UserInput/UserInput"
import StyledDesignPage from "./DesignPage.styled"
import StyledDesignPageLeftSection from "./DesignPageLeftSection.styled"
import StyledDesignPageRightSection from "./DesignPageRightSection.styled"
import { ZodType, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useGenerateMutation } from "../../features/api/designApiSlice"
import { useState } from "react"
import { Active, DesignFormData } from "../../vite-env"
import StyledUserTextArea from "../UserTextArea/UserTextArea.styled"

const schema: ZodType<DesignFormData> = z.object({
	characterAttributes: z.object({
		name: z.string().min(3).max(30),
		age: z.number().min(1).max(5),
		race: z.string().min(3).max(30),
		background: z.string().min(3).max(30),
	})
})

const DesignPage = ({ active }: Active) => {
	const [generateMoreText, setGenerateMoreText] = useState("")

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DesignFormData>({
		resolver: zodResolver(schema),
	})

	const [generate] = useGenerateMutation()

	const onSaveClick = () => {
		console.log("you clicked on the save button")
	}

	const handleGenerateClick = handleSubmit((data: DesignFormData) => {
		console.log("we made it", data)
		const { age, background, name, race } = data.characterAttributes
		const dataReady = {
			characterAttributes: {
				name,
				age,
				race,
				background,
			},
		}
		generate(dataReady)
			.unwrap()
			.then((response: string) => {
				console.log(response)
				setGenerateMoreText(response)
			})
			.catch((error: string) => console.log(error))
	})

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
				<StyledUserTextArea placeholder="background" {...register('characterAttributes.background')} />
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

			</StyledDesignPageRightSection>
			<SaveBtn handleClick={onSaveClick} />
			<GenerateBtn handleClick={handleGenerateClick} />
		</StyledDesignPage>
	)
}

export default DesignPage
