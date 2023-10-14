import React from "react";
import ContainerBase from "./components/ContainerBase";
import MenuProvider from "./contexts/Menu";
import SectionHome from "./pages/Home/SectionHome";

const App: React.FC = () => {
	return (
		<MenuProvider>
			<ContainerBase>
				<SectionHome />
			</ContainerBase>
		</MenuProvider>
	);
};

export default App;
