import React from "react";
import { S } from "./styles";
import SectionHome from "./SectionHome";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<S.Container>
			<SectionHome />
		</S.Container>
	);
};

export default Home;
