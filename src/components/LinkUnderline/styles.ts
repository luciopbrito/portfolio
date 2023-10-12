import styled from "styled-components";
import { LinkUnderlineProps } from ".";

export const Container = styled.a<LinkUnderlineProps>`
	text-decoration: none;
	color: white;

	&:hover {
		text-decoration: underline;
		text-decoration-color: ${(p) => p.color};
	}
`;
