import React from "react";
import { S } from "./styles";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineMail,
	AiOutlinePhone,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const SectionContact: React.FC = () => {
	return (
		<S.Container>
			<S.Title>Contato</S.Title>
			<S.ContainerContact>
				<S.ContentTitle>Entre em contato comigo!</S.ContentTitle>
				<S.ContainerContent>
					<div className="item">
						<div>
							<AiOutlinePhone className="icon" />
						</div>
						<div>
							<S.Subtitle>Telefone</S.Subtitle>
							<span>+55 11 94819-0733</span>
						</div>
					</div>
					<div className="item">
						<div>
							<AiFillLinkedin className="icon" />
						</div>
						<div>
							<S.Subtitle>LinkedIn</S.Subtitle>
							<a className="link" href="https://linkedin.com/in/lucio-brito">
								https://linkedin.com/in/lucio-brito
							</a>
						</div>
					</div>
					<div className="item">
						<div>
							<AiOutlineMail className="icon" />
						</div>
						<div>
							<S.Subtitle>Email</S.Subtitle>
							<span>luciopereirabritoo@gmail.com</span>
						</div>
					</div>
					<div className="item">
						<div>
							<AiFillGithub className="icon" />
						</div>
						<div>
							<S.Subtitle>GitHub</S.Subtitle>
							<a className="link" href="https://github.com/luciopbrito/">
								https://github.com/luciopbrito/
							</a>
						</div>
					</div>
					<div className="item">
						<div>
							<BiMap className="icon" />
						</div>
						<div>
							<S.Subtitle>Localização</S.Subtitle>
							<span>Brazil, Guarulhos - SP</span>
						</div>
					</div>
				</S.ContainerContent>
			</S.ContainerContact>
		</S.Container>
	);
};

export default SectionContact;
