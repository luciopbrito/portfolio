import React from "react";
import ContainerBase from "./components/ContainerBase";
import MenuProvider from "./contexts/Menu";
import Home from "./pages/Home";

const App: React.FC = () => {
	return (
		<MenuProvider>
			<ContainerBase>
				<Home />
			</ContainerBase>
		</MenuProvider>
	);
};

export default App;
