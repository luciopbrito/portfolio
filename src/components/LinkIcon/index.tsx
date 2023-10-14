import React from "react";

import { Container } from "./styles";
import { IChildren } from "../../global";

interface LinkIconProps extends IChildren {
	href: string;
	target: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ href, target, children }) => {
	return (
		<Container href={href} target={target}>
			<span className="icon_link">{children}</span>
		</Container>
	);
};

export default LinkIcon;
