import React, { useContext } from "react";

import { Container, HeaderNavBar } from "./styles";
import Navbar from "../Navbar";
import { GiHamburgerMenu as IconHamburger } from "react-icons/gi";
import { BsXLg as IconClose } from "react-icons/bs";
import { MenuContext } from "../../contexts/Menu";
import { IClassName } from "../../global";
import { Toggle } from "rsuite";
import 'rsuite/Toggle/styles/index.css';
import { useTranslation } from "react-i18next";

interface HeaderProps extends IClassName {}

const Header: React.FC<HeaderProps> = ({ className }) => {
	const { isMenuOpen, toggleMenu } = useContext(MenuContext);
	const {i18n} = useTranslation();

	const onChangeLanguage = (changed: boolean) => {
		changed ? i18n.changeLanguage('en') : i18n.changeLanguage('pt')
	}

	return (
		<Container className={className}>
			<div className="container_header">
				<div className="logo">
					<h1>Lúcio Brito</h1>
				</div>
				<div className="container_nav">
					<HeaderNavBar className={`menu ${isMenuOpen ? "on" : ""}`}>
						<IconHamburger className="toggle-menu" onClick={() => toggleMenu()} />
						<IconClose className="icon-close" />
						<Navbar />
					</HeaderNavBar>
					<Toggle size="lg" onChange={(checked) => onChangeLanguage(checked)} checkedChildren="EN" unCheckedChildren="PT" defaultChecked />
				</div>
			</div>
		</Container>
	);
};

export default Header;
