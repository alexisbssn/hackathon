/// <reference types="vite/client" />

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
