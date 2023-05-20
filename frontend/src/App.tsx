import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "./styles/Global"
import MainWindow from "./components/MainWindow/MainWindow"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MainWindow />
		</ThemeProvider>
	)
}

export default App
