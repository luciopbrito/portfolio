import styled from "styled-components";
import { device } from "../../assets/styles/devices";

interface ImageContainerProps {
	$img: string;
	$size: "medium" | "large";
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

const Title = styled.h1`
	font-size: 5rem;
`;

const TitleBold = styled.h1`
	font-size: 5rem;
	font-weight: bold;
`;

const Subtitle = styled.h2`
	font-size: 2.5rem;
`;

const SubtitleBold = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
`;

const Subtitle2 = styled.h3`
	font-size: 2rem;
`;

const Subtitle2Bold = styled.h3`
	font-size: 2rem;
	font-weight: bold;
`;

const ContainerTitles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ImageContainer = styled.div<ImageContainerProps>`
	border-radius: 4.9rem;

	background-image: url(${(p) => p.$img});
	background-repeat: no-repeat;
	background-position: centers;
	width: ${(p) => (p.$size == "large" ? "44.4rem" : "37rem")};
	height: ${(p) => (p.$size == "large" ? "52.4rem" : "48.4rem")};
`;

export const S = {
	Container,
	Title,
	TitleBold,
	Subtitle,
	SubtitleBold,
	Subtitle2,
	Subtitle2Bold,
	ImageContainer,
	ContainerTitles,
};
