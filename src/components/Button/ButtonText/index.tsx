import React from "react";
import { S } from "../styles";
import { IChildren } from "../../../global";

interface ButtonTextProps extends IChildren {}

const ButtonText: React.FC<ButtonTextProps> = ({ children }) => {
	return <S.Text>{children}</S.Text>;
};

export default ButtonText;
