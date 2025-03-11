import React from "react";
import { S } from "./styles";
import imgLucio from "@imgs/home/lucio-image2.png";
import { Button } from "../../../components/Button";
import LucioCV from "@documents/full_stack_pt.pdf";
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
						Desde 2019, venho me dedicando ao aprimoramento das minhas habilidades como Desenvolvedor Full Stack, buscando ser um profissional eficiente, prestativo e que agregue valor tanto tecnicamente quanto no ambiente de trabalho. Tenho domínio em Front-end, utilizando tecnologias como React e Angular e utilizo ASPNET CORE para criações de API's Robustas e bem estruturadas.
						<br />
						<br />
						Sou disciplinado e curioso por natureza, sempre em busca de novos aprendizados e desafios que impulsionem meu crescimento profissional. Desde 2020, venho atuando como freelancer e acumulando experiências em projetos de sustentação, manutenção e desenvolvimento de novas aplicações. Meu objetivo é continuar evoluindo tecnicamente e contribuir significativamente para os projetos nos quais estiver envolvido.
					</p>
					<Button.Container onClick={() => handleDownloadCV()}>
						<Button.Text>Download CV</Button.Text>
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
