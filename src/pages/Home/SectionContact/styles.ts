import styled from "styled-components";
import { S as FromHome } from "../styles";
import { Colors } from "../../../assets/styles/colors";
import { device } from "../../../assets/styles/devices";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10rem 0;
	gap: 10rem;
	
	@media ${device.laptop} {
		height: 100vh;
	}
`;

const ContainerContact = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 3rem;
	border-radius: 1rem;
	max-width: 770px;
	width: 100%;
	background-color: ${Colors.BlueWhite};
	transition-property: background-color;
	transition-duration: 300ms;
	transition-timing-function: ease-in-out;

	&:hover {
		background-color: ${Colors.LightCyan};
	}

	@media ${device.mobileS} {
		align-items: center;
	}

	@media ${device.laptop} {
		align-items: start;
	}
`;

const ContainerContent = styled.div`
	width: 100%;
	display: grid;
	gap: 3rem;

	.item {
		display: flex;
		align-items: center;
		gap: 1rem;

		.link {
			color: ${Colors.LightBlue};
			border-bottom: 1px solid inherit;
		}
		link:hover {
			color: ${Colors.DarkBlue};
		}

		.icon {
			color: ${Colors.Cyan};
			font-size: 2.5rem;
		}
	}

	@media ${device.mobileS} {
		grid-template-columns: 1fr;
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(2, 50%);
	}
`;

export const S = {
	Container,
	ContainerContact,
	ContainerContent,
	Title: FromHome.Title,
	ContentTitle: FromHome.SubtitleBold,
	Subtitle: FromHome.Subtitle2Bold,
};
