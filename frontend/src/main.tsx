import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { store } from "./store/configureStore.ts"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "./features/api/designApiSlice.ts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApiProvider api={apiSlice}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApiProvider>
	</React.StrictMode>
)
