import React from "react";
import { S } from "./styles";
import imgLucio from "@imgs/home/lucio-image2.png";
import { Button } from "../../../components/Button";
import LucioCV from "@documents/curriculum-frontend.pdf";
import { BsDownload } from "react-icons/bs";

const SectionAboutMe: React.FC = () => {
	const handleDownloadCV = () => {
		const cv = document.createElement("a");
		cv.download = "curriculum_lucio.pdf";
		cv.href = LucioCV;
		cv.target = "_blank";
		cv.click();
	};

	return (
		<S.Container id="about-me">
			<S.ContainerTitles>
				<S.Title>Sobre mim</S.Title>
				<S.Subtitle>Apresentação</S.Subtitle>
			</S.ContainerTitles>
			<S.ContainerContent>
				<div className="content_text">
					<p>
						Desde 2019 tenho estudado para se tornar um Desenvolvedor eficiente
						e prestativo que agregue como pessoa, colega de trabalho e um ótimo
						funcionário. Atualmente estou estudando bastante assuntos
						relacionados ao Back-end onde não possuo maestria. Front-end de
						fato, é algo que tenho domínio. Busco com clareza e virtude honra
						minhas tarefas e deveres, começando em casa, até ao meu trabalho.
					</p>
					<Button.Container onClick={() => handleDownloadCV()}>
						<Button.Text>Download CV</Button.Text>
						<Button.Icon>
							<BsDownload />
						</Button.Icon>
					</Button.Container>
				</div>
				<S.ImageContainer size="medium" img={imgLucio} />
			</S.ContainerContent>
		</S.Container>
	);
};

export default SectionAboutMe;
