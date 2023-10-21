import styled from "styled-components";
import { device } from "../../assets/styles/devices";

interface ImageContainerProps {
	img: string;
	size: "medium" | "large";
}

const Container = styled.div`
	width: 100%;

	@media ${device.mobileS} {
		padding: 0 2rem;
	}

	@media ${device.laptop} {
		padding: 0;
	}
`;

const TextBoxTitle = styled.h1`
	font-size: 5rem;
`;

const TextBoxSubtitle = styled.h2`
	font-size: 2.5rem;
`;

const ImageContainer = styled.div<ImageContainerProps>`
	border-radius: 4.9rem;

	background-image: url(${(p) => p.img});
	background-repeat: no-repeat;
	background-position: centers;
	width: ${(p) => (p.size == "large" ? "44.4rem" : "37rem")};
	height: ${(p) => (p.size == "large" ? "52.4rem" : "48.4rem")};
`;

export const S = {
	Container,
	TextBoxTitle,
	TextBoxSubtitle,
	ImageContainer,
};
