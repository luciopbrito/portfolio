import styled from "styled-components";
import { device } from "../../assets/styles/devices";

export const Container = styled.header`
	width: 100%;
	position: fixed;
	background-color: #03045e;

	.container_header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 100px;

		.logo {
			color: white;
		}
	}
`;

export const HeaderNavBar = styled.div`
	@media ${device.mobileS} {
		ul,
		.icon-close {
			display: none;
		}

		&.menu.on {
			ul {
				display: flex;

				position: absolute;
				top: 93px;
				left: 0;
				width: 100vw;
				background-color: blue;
				justify-content: center;
				align-items: center;
				gap: 20px;

				animation-name: openMenu;
				animation-duration: 2s;
				animation-direction: normal;
				height: 100px;
			}
		}
	}

	@media ${device.laptop} {
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
		height: 30px;
	}

	@keyframes openMenu {
		from {
			height: 0px;
			opacity: 0;
		}
		to {
			height: 100px;
			opacity: 1;
		}
	}
`;
