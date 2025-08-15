import { Container } from "./styles";
import LinkUnderline from "../LinkUnderline";
import { IClassName } from "../../global";
import { useTranslation } from "react-i18next";

interface NavbarProps extends IClassName {}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
	const {t} = useTranslation();

	return (
		<Container className={className}>
			<li>
				<LinkUnderline href="#home" color="white">
					{t('pages.header.home')}
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#about-me" color="white">
					{t('pages.header.about_me')}
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#skills" color="white">
					{t('pages.header.skills')}
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#projects" color="white">
					{t('pages.header.projects')}
				</LinkUnderline>
			</li>
			<li>
				<LinkUnderline href="#contact" color="white">
					{t('pages.header.contact')}
				</LinkUnderline>
			</li>
		</Container>
	);
};

export default Navbar;
