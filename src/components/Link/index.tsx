import React, { ReactNode } from "react";

import { Container } from "./styles";

interface LinkProps {
	href: string;
	children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
	return <Container href={href}>{children}</Container>;
};

export default Link;
