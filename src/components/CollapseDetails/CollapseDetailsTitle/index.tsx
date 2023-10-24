import React from "react";
import { IChildren } from "../../../global";
import { S } from "../styles";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

// import { Container } from './styles';

interface CollapseDetailsTitleProps extends IChildren {
	iconDefault?: React.FC;
	iconOpen?: React.FC;
}

const CollapseDetailsTitle: React.FC<CollapseDetailsTitleProps> = ({
	children,
	iconDefault,
	iconOpen,
}) => {
	return (
		<S.Title
			iconDefault={iconDefault ? iconDefault : AiOutlineDown}
			iconOpen={iconOpen ? iconOpen : AiOutlineUp}
		>
			{children}
			<span className="icon"></span>
		</S.Title>
	);
};

export default CollapseDetailsTitle;
