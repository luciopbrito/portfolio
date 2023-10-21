import React from "react";
import { S } from "./styles";
import imgLucio from "@imgs/home/lucio-image1.png";
import { Button } from "../../../components/Button";
import { LuSendHorizonal } from "react-icons/lu";

interface SectionHomeProps {}

const SectionHome: React.FC<SectionHomeProps> = () => {
	const handleGoContact = () => {
		// go section contact
	};

	return (
		<S.Container id="start">
			<S.ImageContainer size="large" img={imgLucio} />
			<S.TextBoxContainer>
				<div>
					<S.TextBoxTitle>Lúcio Brito</S.TextBoxTitle>
					<S.TextColorChanging>Desenvolvedor Web</S.TextColorChanging>
				</div>
				<p>Apaixonado por tecnologia. A vida precisa ser vivida!</p>
				<Button.Container onClick={() => handleGoContact()}>
					<Button.Text>contato</Button.Text>
					<Button.Icon>
						<LuSendHorizonal />
					</Button.Icon>
				</Button.Container>
			</S.TextBoxContainer>
		</S.Container>
	);
};

export default SectionHome;
