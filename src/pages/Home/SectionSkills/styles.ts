import styled from "styled-components";
import { S as FromHome } from "../styles";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { reactSvgComponentToMarkupString } from "../../../global";
import { device } from "../../../assets/styles/devices";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	padding: 10rem 0;

	@media ${device.mobileS} {
		padding-top: 20rem;
	}

	@media ${device.laptop} {
		height: 100vh;
		padding-top: 10rem;
	}
`;

const Skill = styled.details`
	margin: 0 0 1rem 0;
	width: 100%;

	summary::after {
		content: url(${reactSvgComponentToMarkupString(AiOutlineDown)});
		margin: 0 0 0 30rem;
	}

	&[open] summary::after {
		content: url(${reactSvgComponentToMarkupString(AiOutlineUp)});
	}

	@media ${device.mobileS} {
		max-width: none;
	}

	@media ${device.laptop} {
		max-width: 54.7rem;
	}
`;

const SkillTitle = styled.summary`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1rem;

	&::before {
		content: "{ }";
		color: black;
		font-size: 3.64rem;
	}
`;

const ContainerSkills = styled.div`
	display: grid;
	max-width: 100rem;
	width: 100%;
	gap: 2rem;

	@media ${device.mobileS} {
		grid-template-columns: 1fr;
		justify-items: center;
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(2, 50%);
	}

	.brackets {
		font-size: 4rem;
	}
`;

const SkillList = styled.ul`
	padding: 0 0 0 5rem;
	list-style-type: none;

	li::before {
		content: "\u25CF ";
	}
`;

export const S = {
	Container,
	ContainerTitles: FromHome.ContainerTitles,
	ContainerSkills,
	Skill,
	SkillTitle,
	SkillList,
	Title: FromHome.Title,
	Subtitle: FromHome.Subtitle,
};
