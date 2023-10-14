import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

import { Container, ContainerMain } from "./styles";

interface ContainerBaseProps {
	children: ReactNode;
}

const ContainerBase: React.FC<ContainerBaseProps> = ({ children }) => {
	return (
		<>
			<Container>
				<Header className="header" />
				<ContainerMain className="main">{children}</ContainerMain>
				<Footer className="footer" />
			</Container>
		</>
	);
};

export default ContainerBase;
