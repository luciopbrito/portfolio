import React from "react";
import styled from "styled-components";
import { reactSvgComponentToMarkupString } from "../../global";

interface TitleProps {
	iconDefault: React.FC;
	iconOpen: React.FC;
}

const Container = styled.details`
	max-width: 43rem;
	width: 100%;
`;

const Title = styled.summary<TitleProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 3rem;
	font-weight: bold;

	&:hover {
		cursor: pointer;
	}

	.icon::after {
		content: url(${(p) => reactSvgComponentToMarkupString(p.iconDefault)});
	}

	${Container}[open] & .icon::after {
		content: url(${(p) => reactSvgComponentToMarkupString(p.iconOpen)});
	}

	&::marker {
		content: "";
	}
`;

export const S = {
	Container,
	Title,
};
