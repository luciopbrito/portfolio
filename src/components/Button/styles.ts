import styled from "styled-components";
import { device } from "../../assets/styles/devices";

const Container = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 0;
	padding: 0.3rem 2rem;
	background-color: #90e0ef;

	&:hover {
		background-color: #00b4d8;
	}

	&:active {
		background-color: #0077b6;
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
	font-size: 2rem;
`;

const Icon = styled.span`
	color: inherit;
	/* font-size: 2rem; */
`;

export const S = {
	Container,
	Text,
	Icon,
};
