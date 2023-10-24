import styled from "styled-components";
import { device } from "../../assets/styles/devices";
import { Colors } from "../../assets/styles/colors";

const Container = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 0;
	padding: 0.3rem 2rem;
	background-color: ${Colors.LightCyan};
	line-height: normal;

	&:hover {
		background-color: ${Colors.Cyan};
		cursor: pointer;
	}

	&:active {
		background-color: ${Colors.LightBlue};
	}

	@media ${device.mobileS} {
		scale: 2;
	}

	@media ${device.laptop} {
		scale: 1;
	}
`;

const Text = styled.span`
	color: inherit;
	font-weight: 600;
	font-family: "Inter", sans-serif;
	font-size: 2rem;
`;

const Icon = styled.span`
	color: inherit;
	font-size: 2rem;
	line-height: 0.5rem;
`;

export const S = {
	Container,
	Text,
	Icon,
};
