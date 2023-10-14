import styled from "styled-components";
import { device } from "../../assets/styles/devices";

const Container = styled.div`
	width: 100%;

	@media ${device.mobileS} {
		padding: 0 2rem;
	}

	@media ${device.laptop} {
		padding: 0;
	}
`;

export const S = {
	Container,
};
