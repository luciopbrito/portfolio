import styled from "styled-components";

export const Container = styled.body`
	display: grid;
	grid-template-columns: 100%;
	height: 100%;
	width: 100%;
	grid-template-areas:
		"header"
		"main"
		"footer";

	.header {
		grid-area: header;
	}

	.main {
		grid-area: main;
	}

	.footer {
		grid-area: footer;
	}
`;

export const ContainerMain = styled.main`
	margin: 8.5rem 0 0 0;
`;