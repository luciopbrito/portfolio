import React from "react";
import { S } from "./styles";
import imgLucio from "@imgs/home/lucio-image1.png";
import { Button } from "../../../components/Button";
import { LuSendHorizonal } from "react-icons/lu";
import { useTranslation } from "react-i18next";

interface SectionHomeProps {}

const SectionHome: React.FC<SectionHomeProps> = () => {
	const handleGoContact = () => {
		window.open("#contact", "_self");
	};

	const {t} = useTranslation();

	return (
		<S.Container id="home">
			<S.ImageContainer $size="large" $img={imgLucio} />
			<S.TextBoxContainer>
				<div>
					<S.Title>{t('pages.home.sections.home.title')}</S.Title>
					<S.TextColorChanging>{t('pages.home.sections.home.position')}</S.TextColorChanging>
				</div>
				<p>{t('pages.home.sections.home.description')}</p>
				<Button.Container onClick={() => handleGoContact()}>
					<Button.Text>{t('pages.home.sections.home.buttons.contact')}</Button.Text>
					<Button.Icon>
						<LuSendHorizonal />
					</Button.Icon>
				</Button.Container>
			</S.TextBoxContainer>
		</S.Container>
	);
};

export default SectionHome;
