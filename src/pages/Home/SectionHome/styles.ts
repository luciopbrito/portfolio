import styled from "styled-components";
import { device } from "../../../assets/styles/devices";
import { Colors } from "../../../assets/styles/colors";
import { S as FromHome } from "../styles";

const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 4.6rem;
	padding: 10rem 0;
		
	@media ${device.mobileS} {
		flex-direction: column;
		align-items: center;
		padding-top: 20rem;
	}
			
	@media ${device.laptop} {
		height: 100vh;
		flex-direction: row;
		padding-top: auto;
	}
`;

const TextBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 0 1 auto;

	@media ${device.mobileS} {
		align-items: center;
		gap: 4rem;
		width: 100%;
	}

	@media ${device.laptop} {
		gap: 2rem;
		width: auto;
	}
`;

const TextColorChanging = styled.h2`
	font-size: 2.5rem;
	animation-name: colorChanging;
	animation-duration: 1.2s;
	animation-timing-function: linear;
	animation-direction: normal;
	animation-iteration-count: infinite;

	background-size: 100%;
	background-image: linear-gradient(
		45deg,
		${Colors.DarkBlue},
		${Colors.LightBlue},
		${Colors.Cyan},
		${Colors.LightCyan},
		${Colors.BlueWhite}
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	-moz-background-clip: text;
	/* transition-property: background-color;
	transition-duration: 1.2s;
	transition-timing-function: linear; */

	@keyframes colorChanging {
		0% {
			background-image: linear-gradient(
				45deg,
				${Colors.DarkBlue},
				${Colors.LightBlue},
				${Colors.Cyan},
				${Colors.LightCyan},
				${Colors.BlueWhite}
			);
		}

		20% {
			background-image: linear-gradient(
				45deg,
				${Colors.BlueWhite},
				${Colors.DarkBlue},
				${Colors.LightBlue},
				${Colors.Cyan},
				${Colors.LightCyan}
			);
		}

		40% {
			background-image: linear-gradient(
				45deg,
				${Colors.LightCyan},
				${Colors.BlueWhite},
				${Colors.DarkBlue},
				${Colors.LightBlue},
				${Colors.Cyan}
			);
		}

		80% {
			background-image: linear-gradient(
				45deg,
				${Colors.Cyan},
				${Colors.LightCyan},
				${Colors.BlueWhite},
				${Colors.DarkBlue},
				${Colors.LightBlue}
			);
		}

		100% {
			background-image: linear-gradient(
				45deg,
				${Colors.LightBlue},
				${Colors.Cyan},
				${Colors.LightCyan},
				${Colors.BlueWhite},
				${Colors.DarkBlue}
			);
		}
	}
`;

export const S = {
	Container,
	ImageContainer: FromHome.ImageContainer,
	TextBoxContainer,
	Title: FromHome.Title,
	Subtitle: FromHome.Subtitle,
	TextColorChanging,
};
