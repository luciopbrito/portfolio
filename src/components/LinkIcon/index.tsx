import React, { ReactNode } from "react";

import { Container } from "./styles";

interface LinkIconProps {
	href: string;
	target: string;
	children: ReactNode;
}

const LinkIcon: React.FC<LinkIconProps> = ({ href, target, children }) => {
	return (
		<Container href={href} target={target}>
			<span className="icon_link">{children}</span>
		</Container>
	);
};

export default LinkIcon;
