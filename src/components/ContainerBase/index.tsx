import React, { ReactNode } from "react";
import Header from "../Header";

// import { Container } from './styles';

interface ContainerBaseProps {
	children: ReactNode;
}

const ContainerBase: React.FC<ContainerBaseProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default ContainerBase;
