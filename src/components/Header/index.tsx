import React, { useContext } from "react";

import { Container, HeaderNavBar } from "./styles";
import Navbar from "../Navbar";
import { GiHamburgerMenu as IconHamburger } from "react-icons/gi";
import { BsXLg as IconClose } from "react-icons/bs";
import { MenuContext } from "../../contexts/Menu";
import { IClassName } from "../../global";

interface HeaderProps extends IClassName {}

const Header: React.FC<HeaderProps> = ({ className }) => {
	const { isMenuOpen, toggleMenu } = useContext(MenuContext);

	return (
		<Container className={className}>
			<div className="container_header">
				<div className="logo">
					<h1>Lúcio Brito</h1>
				</div>
				<HeaderNavBar className={`menu ${isMenuOpen ? "on" : ""}`}>
					<IconHamburger className="toggle-menu" onClick={() => toggleMenu()} />
					<IconClose className="icon-close" />
					<Navbar />
				</HeaderNavBar>
			</div>
		</Container>
	);
};

export default Header;
