import styled from "styled-components";
import { device } from "../../assets/styles/devices";
import { Colors } from "../../assets/styles/colors";

export const Container = styled.header`
	width: 100%;
	z-index: 2;
	position: fixed;
	display: flex;
	justify-content: center;
	background-color: ${Colors.DarkBlue};

	.container_header {
		max-width: 111.6rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2.4rem 10rem;

		.logo {
			color: white;
		}
	}

	.container_nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	@media ${device.mobileS} {
		.container_nav > div:nth-child(1) {
			order: 2;
		}
	}

	@media ${device.laptop} {
		.container_nav > div:nth-child(1) {
			order: inherit;
		}
	}
`;

export const HeaderNavBar = styled.div`
	@media ${device.mobileS} {
		ul,
		.icon-close {
			display: none;
		}

		& {
			height: 54px;
		}

		&.menu.on {
			ul {
				display: flex;

				position: absolute;
				top: 9.3rem;
				left: 0;
				width: 100%;
				background-color: blue;
				justify-content: center;
				align-items: center;
				gap: 2rem;

				animation-name: openMenu;
				animation-duration: 2s;
				animation-direction: normal;
				height: 10rem;
			}
		}
	}

	@media ${device.laptop} {
		& {
			height: auto;
		}


		ul {
			display: flex;
		}

		.toggle-menu,
		.icon-close {
			display: none;
		}
	}

	.toggle-menu,
	.icon-close {
		color: white;
	}

	.toggle-menu {
		height: 3rem;
	}

	@keyframes openMenu {
		from {
			height: 0rem;
			opacity: 0;
		}
		to {
			height: 10rem;
			opacity: 1;
		}
	}
`;
