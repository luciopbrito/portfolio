import React from "react";
import { S } from "../styles";
import { IChildren } from "../../../global";

interface ButtonIconProps extends IChildren {}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children }) => {
	return <S.Icon>{children}</S.Icon>;
};

export default ButtonIcon;
