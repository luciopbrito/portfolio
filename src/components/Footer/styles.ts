import styled from "styled-components";
import { device } from "../../assets/styles/devices";

export const Container = styled.footer`
	background-color: #03045e;
	color: white;
	padding: 3.4rem 20rem;
	display: flex;
	flex-direction: column;

	.footer_content {
		display: flex;

		.footer-content_social {
			display: flex;
			gap: 2rem;
		}

		.footer-content_titles {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
		}

		@media ${device.mobileS} {
			flex-direction: column;
			gap: 3rem;
			align-items: center;

			.footer-content_navbar {
				width: 100%;
			}
		}

		@media ${device.laptop} {
			flex-direction: row;
			justify-content: center;
			align-items: start;
			gap: 5rem;

			.footer-content_navbar {
				width: 36.4rem;
			}
		}

		@media ${device.laptopL} {
			gap: 18rem;
		}
	}

	.footer_copyright {
		display: flex;
		justify-content: center;

		.footer-copyright_content {
			color: #bababa;
			font-size: 1.6rem;
		}
	}

	@media ${device.mobileS} {
		gap: 3.4rem;
	}

	@media ${device.laptop} {
		gap: 7.4rem;
	}
`;
