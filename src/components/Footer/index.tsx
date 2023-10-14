import React from "react";

import { Container } from "./styles";
import Navbar from "../Navbar";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import LinkIcon from "../LinkIcon";
import { IClassName } from "../../global";

interface FooterProps extends IClassName {}

const Footer: React.FC<FooterProps> = ({ className }) => {
	return (
		<Container className={className}>
			<div className="footer_content">
				<div className="footer-content_titles">
					<h1>Lúcio Brito</h1>
					<h2>Desenvolvedor</h2>
				</div>
				<Navbar className="footer-content_navbar" />
				<div className="footer-content_social">
					<LinkIcon href="https://github.com/luciopbrito" target="_blank">
						<BsGithub />
					</LinkIcon>
					<LinkIcon href="https://linkedin.com/in/lucio-brito" target="_blank">
						<BsLinkedin />
					</LinkIcon>
				</div>
			</div>
			<div className="footer_copyright">
				<span className="footer-copyright_content">
					@ Lúcio Brito. Todos os direitos reservados.
				</span>
			</div>
		</Container>
	);
};

export default Footer;
