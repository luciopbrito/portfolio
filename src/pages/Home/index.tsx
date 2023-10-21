import React from "react";
import { S } from "./styles";
import SectionHome from "./SectionHome";
import SectionAboutMe from "./SectionAboutMe";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<S.Container>
			<SectionHome />
			<SectionAboutMe />
		</S.Container>
	);
};

export default Home;
