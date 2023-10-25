import React, { useEffect, useState } from "react";
import { S } from "./styles";
import { Button } from "../../../components/Button";
import { BsArrowRight } from "react-icons/bs";
import { Carousel } from "react-bootstrap";

interface SectionProjectsProps {}

interface Repository {
	id: number;
	name: string;
	html_url: string;
	description: string;
}

interface StateProps {
	repositories: Repository[];
	translateValue: number;
}

const SectionProjects: React.FC<SectionProjectsProps> = () => {
	const [state, setState] = useState<StateProps>({
		repositories: [],
		translateValue: 0,
	});

	const getRepositories = (): void => {
		fetch("https://api.github.com/users/luciopbrito/repos")
			.then((response) => response.json())
			.then((data) => {
				setState((prev) => {
					return {
						...prev,
						repositories: data,
					};
				});
			});
	};

	useEffect(() => {
		getRepositories();
	}, []);

	return (
		<S.Container id="projects">
			<S.Title>Projetos</S.Title>
			<Carousel data-bs-theme="dark" indicators={false} interval={null}>
				{state.repositories.map((repos) => {
					return (
						<Carousel.Item key={repos.id}>
							<S.ProjectContainer>
								{/* <S.ProjectImage $img={img} /> */}
								<S.TextContainer>
									<h1>{repos.name}</h1>
									<S.Text>{repos.description}</S.Text>
									<Button.Container
										onClick={() => window.open(repos.html_url, "_blank")}
									>
										<Button.Text>abrir</Button.Text>
										<Button.Icon>
											<BsArrowRight style={{ color: "black" }} />
										</Button.Icon>
									</Button.Container>
								</S.TextContainer>
							</S.ProjectContainer>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</S.Container>
	);
};

export default SectionProjects;
