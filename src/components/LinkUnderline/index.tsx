import React, { ReactNode } from "react";

import { Container } from "./styles";

export interface LinkUnderlineProps {
	color: string;
	href: string;
	children: ReactNode;
}

const LinkUnderline: React.FC<LinkUnderlineProps> = ({
	color,
	href,
	children,
}) => {
	return (
		<Container href={href} color={color}>
			{children}
		</Container>
	);
};

export default LinkUnderline;
