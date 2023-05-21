/// <reference types="vite/client" />
import { UseFormRegister } from "react-hook-form"

type Theme = {
	colors: {
		grey_light: string
		grey_dark: string
		lines_light: string
		white: string
		purple: string
	}
	mediaQueries: {
		desktop: string
		tablet: string
		mobile: string
	}
	transitionTimes: {
		slow: string
		medium: string
		fast: string
	}
}

////////Buttons

type ModeButtonPropType = {
	children: React.ReactNode
}

type Mode = "design" | "interact"

type Active = {
	active: boolean
}

type UserInputType = {
	type: "text" | "button" | "number"
	register?: UseFormRegister<DesignFormData>
	name?: FormFieldType
}

type UserTextAreaType = {
	register?: UseFormRegister<DesignFormData>
	name?: FormFieldType
}

type DesignFormData = {
	name: string
	age: string 
	race: string
	background: string
}

type FormFieldType = "name" | "age" | "race" | "background"
