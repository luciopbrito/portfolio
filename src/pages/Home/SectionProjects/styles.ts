import styled from "styled-components";
import { S as FromHome } from "../styles";
import { device } from "../../../assets/styles/devices";

export interface ProjectImageProps {
	$img: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10rem 0;
	gap: 5rem;
`;

const ProjectContainer = styled.div`
	display: flex;
	margin: 5rem 10rem;
	width: 70rem;
`;

const ProjectImage = styled.div<ProjectImageProps>`
	max-width: 50rem;
	width: 100%;
	max-height: 50rem;
	height: 100%;
	border-radius: 1rem;
	background-image: url(${(p) => p.$img});
	background-position: center;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	button {
		align-self: center;
	}

	@media ${device.mobileS} {
		gap: 2rem;
	}

	@media ${device.laptop} {
		gap: 1rem;
	}
`;

const Text = styled.p`
	text-align: justify;
`;

export const S = {
	Container,
	Title: FromHome.Title,
	ProjectContainer,
	ProjectImage,
	TextContainer,
	Text,
};
