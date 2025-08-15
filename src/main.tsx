import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./assets/styles/global.ts";
import './i18n.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
		<GlobalStyles></GlobalStyles>
	</React.StrictMode>
);
