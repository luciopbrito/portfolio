import React from "react";
import { S } from "./styles";
import { CollapseDetails } from "../../../components/CollapseDetails";

const SectionSkills: React.FC = () => {
	const brackets = "{ }";

	return (
		<S.Container id="skills">
			<S.ContainerTitles>
				<S.Title>Skills</S.Title>
				<S.Subtitle>Minhas tecnologias</S.Subtitle>
			</S.ContainerTitles>
			<S.ContainerSkills>
				<CollapseDetails.Container>
					<CollapseDetails.Title>
						<span>
							<span className="brackets">{brackets}</span> Front-end
						</span>
					</CollapseDetails.Title>
					<S.SkillList>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JavaScript</li>
						<li>JQuery</li>
					</S.SkillList>
				</CollapseDetails.Container>
				<CollapseDetails.Container>
					<CollapseDetails.Title>
						<span>
							<span className="brackets">{brackets}</span> Back-end
						</span>
					</CollapseDetails.Title>
					<S.SkillList>
						<li>C#</li>
						<li>ASP.NET Core 4,5,6,7</li>
						<li>SQL Server</li>
						<li>Entity Framework Core</li>
					</S.SkillList>
				</CollapseDetails.Container>
				<CollapseDetails.Container>
					<CollapseDetails.Title>
						<span>
							<span className="brackets">{brackets}</span> Designer
						</span>
					</CollapseDetails.Title>
					<S.SkillList>
						<li>Figma</li>
						<li>GIMP</li>
						<li>Shotcut</li>
					</S.SkillList>
				</CollapseDetails.Container>
			</S.ContainerSkills>
		</S.Container>
	);
};

export default SectionSkills;
