import React from "react";
import { S } from "../styles";
import { IChildren } from "../../../global";

interface CollapseDetailsContainerProps extends IChildren {}

const CollapseDetailsContainer: React.FC<CollapseDetailsContainerProps> = ({
	children,
}) => {
	return <S.Container>{children}</S.Container>;
};

export default CollapseDetailsContainer;
