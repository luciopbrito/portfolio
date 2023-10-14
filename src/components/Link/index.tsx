import React from "react";

import { Container } from "./styles";
import { IChildren } from "../../global";

interface LinkProps extends IChildren {
	href: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
	return <Container href={href}>{children}</Container>;
};

export default Link;
