import React from "react";
import ContainerBase from "./components/ContainerBase";
import MenuProvider from "./contexts/Menu";

const App: React.FC = () => {
	return (
		<MenuProvider>
			<ContainerBase>{/* {} */}</ContainerBase>
		</MenuProvider>
	);
};

export default App;
