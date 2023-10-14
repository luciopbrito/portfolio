import React from "react";

import { Container } from "./styles";
import { IChildren } from "../../global";

export interface LinkUnderlineProps extends IChildren {
	color: string;
	href: string;
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
