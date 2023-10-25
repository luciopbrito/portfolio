import React from "react";
import { S, TextProps } from "../styles";
import { IChildren } from "../../../global";

interface ButtonTextProps extends IChildren, TextProps {}

const ButtonText: React.FC<ButtonTextProps> = ({ children, $color }) => {
	return <S.Text $color={$color}>{children}</S.Text>;
};

export default ButtonText;
