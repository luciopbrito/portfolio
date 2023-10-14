import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import { Container, ContainerMain } from "./styles";
import { IChildren } from "../../global";

interface ContainerBaseProps extends IChildren {}

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
