import React from "react";
import { S } from "./styles";
import SectionHome from "./SectionHome";
import SectionAboutMe from "./SectionAboutMe";
import SectionSkills from "./SectionSkills";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<S.Container>
			<SectionHome />
			<SectionAboutMe />
			<SectionSkills />
		</S.Container>
	);
};

export default Home;
