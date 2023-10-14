import { Container } from "./styles";
import LinkUnderline from "../LinkUnderline";
import { IClassName } from "../../global";

interface NavbarProps extends IClassName {}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
	return (
		<Container className={className}>
			<li>
				<LinkUnderline href="#start" color="white">
					Inicio
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#about-me" color="white">
					Sobre mim
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#skills" color="white">
					Skills
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#projects" color="white">
					Projetos
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#contact" color="white">
					Contato
				</LinkUnderline>
			</li>
		</Container>
	);
};

export default Navbar;
