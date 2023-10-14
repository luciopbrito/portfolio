import React from "react";
import { S } from "../styles";
import { IChildren, IOnClick } from "../../../global";

interface ButtonContainerProps extends IChildren, IOnClick {}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
	children,
	onClick,
}) => {
	return <S.Container onClick={onClick}>{children}</S.Container>;
};

export default ButtonContainer;
