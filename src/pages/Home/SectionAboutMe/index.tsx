import React from "react";
import { S } from "./styles";
import imgLucio from "@imgs/home/lucio-image2.png";
import { Button } from "../../../components/Button";
import LucioCV from "@documents/cv_lucio_brito.pdf";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const SectionAboutMe: React.FC = () => {
	const handleDownloadCV = () => {
		const cv = document.createElement("a");
		cv.download = "curriculum_lucio.pdf";
		cv.href = LucioCV;
		cv.target = "_blank";
		cv.click();
	};

	const {t} = useTranslation()	

	return (
		<S.Container id="about-me">
			<S.ContainerTitles>
				<S.Title>{t('pages.home.sections.about_me.title')}</S.Title>
				<S.Subtitle>{t('pages.home.sections.about_me.subtitle')}</S.Subtitle>
			</S.ContainerTitles>
			<S.ContainerContent>
				<div className="content_text">
					<p 
						style={{ whiteSpace: 'pre-wrap' }} 
						dangerouslySetInnerHTML={{ __html: t('pages.home.sections.about_me.description')}}
					></p>
					<Button.Container onClick={() => handleDownloadCV()}>
						<Button.Text>{t('pages.home.sections.about_me.buttons.download_cv')}</Button.Text>
						<Button.Icon>
							<BsDownload />
						</Button.Icon>
					</Button.Container>
				</div>
				<S.ImageContainer $size="medium" $img={imgLucio} />
			</S.ContainerContent>
		</S.Container>
	);
};

export default SectionAboutMe;
