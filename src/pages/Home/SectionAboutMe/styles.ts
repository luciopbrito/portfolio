import { device } from "./../../../assets/styles/devices";
import styled from "styled-components";
import { S as FromHome } from "../styles";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10rem 0;
	gap: 4rem;
	
	@media ${device.mobileS} {
		padding-top: 20rem;
	}

	@media ${device.laptop} {
		height: 100vh;
		padding-top: 10rem;
	}
`;

const ContainerContent = styled.div`
	display: flex;
	gap: 11.7rem;
	justify-content: center;
	max-width: 95.7rem;
	width: 100%;

	@media ${device.mobileS} {
		flex-direction: column;
		align-items: center;
		padding: 0 3rem;
	}

	@media ${device.laptop} {
		flex-direction: row;
	}

	.content_text {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		flex: 0 1 auto;

		button {
			align-self: center;
		}
	}

	${FromHome.ImageContainer} {
		flex: 2 0 auto;
	}
`;

export const S = {
	Container,
	ContainerTitles: FromHome.ContainerTitles,
	Title: FromHome.Title,
	Subtitle: FromHome.Subtitle,
	ImageContainer: FromHome.ImageContainer,
	ContainerContent,
};
