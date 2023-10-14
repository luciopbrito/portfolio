import styled from "styled-components";
import { device } from "../../../assets/styles/devices";

interface ImageContainerProps {
	img: string;
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 4.6rem;
	padding: 10rem 0;

	@media ${device.mobileS} {
		flex-direction: column;
		align-items: center;
	}

	@media ${device.laptop} {
		flex-direction: row;
	}
`;

const ImageContainer = styled.div<ImageContainerProps>`
	border-radius: 4.9rem;

	background-image: url(${(p) => p.img});
	width: 44.4rem;
	height: 52.4rem;
`;

const TextBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${device.mobileS} {
		align-items: center;
		gap: 4rem;
	}

	@media ${device.laptop} {
		gap: 2rem;
	}
`;

const TextBoxTitle = styled.h1`
	font-size: 5rem;
`;

const TextBoxSubtitle = styled.h2`
	font-size: 2.5rem;
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
		#03045e,
		#0077b6,
		#00b4d8,
		#90e0ef,
		#caf0f8
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
				#03045e,
				#0077b6,
				#00b4d8,
				#90e0ef,
				#caf0f8
			);
		}

		20% {
			background-image: linear-gradient(
				45deg,
				#caf0f8,
				#03045e,
				#0077b6,
				#00b4d8,
				#90e0ef
			);
		}

		40% {
			background-image: linear-gradient(
				45deg,
				#90e0ef,
				#caf0f8,
				#03045e,
				#0077b6,
				#00b4d8
			);
		}

		80% {
			background-image: linear-gradient(
				45deg,
				#00b4d8,
				#90e0ef,
				#caf0f8,
				#03045e,
				#0077b6
			);
		}

		100% {
			background-image: linear-gradient(
				45deg,
				#0077b6,
				#00b4d8,
				#90e0ef,
				#caf0f8,
				#03045e
			);
		}
	}
`;

export const S = {
	Container,
	ImageContainer,
	TextBoxContainer,
	TextBoxTitle,
	TextBoxSubtitle,
	TextColorChanging,
};
