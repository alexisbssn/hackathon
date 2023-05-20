import { createGlobalStyle } from "styled-components"




export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        width: 100vw;
        font-family: 'Roboto Mono', monospace;
        
    }
    div[id=root]{
        height: 100vh;
        width: 100vw;
        display: flex;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
`





export const theme: Theme = {
	colors: {
        grey_dark: '#20212C',
        grey_light: '#2B2C37',
        lines_light: '#979797',
        purple: '#635FC7',
        white: '#FFFFFF'
	},
    mediaQueries: {
        desktop: '1440px',
        tablet: '768px',
        mobile: '375px',
    },
    transitionTimes: {
        slow: "300ms",
        medium: "200ms",
        fast: "100ms"
    }
}
