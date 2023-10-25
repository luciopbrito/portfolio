import React from "react";
import { S } from "./styles";
import SectionHome from "./SectionHome";
import SectionAboutMe from "./SectionAboutMe";
import SectionSkills from "./SectionSkills";
import SectionProjects from "./SectionProjects";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<S.Container>
			<SectionHome />
			<SectionAboutMe />
			<SectionSkills />
			<SectionProjects />
		</S.Container>
	);
};

export default Home;
