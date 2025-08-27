import React, { useContext } from "react";

import { Container, HeaderNavBar } from "./styles";
import Navbar from "../Navbar";
import { GiHamburgerMenu as IconHamburger } from "react-icons/gi";
import { BsXLg as IconClose } from "react-icons/bs";
import { MenuContext } from "../../contexts/Menu";
import { IClassName } from "../../global";
import { SelectPicker } from "rsuite";
import 'rsuite/SelectPicker/styles/index.css';
import { useTranslation } from "react-i18next";

interface HeaderProps extends IClassName {}

const Header: React.FC<HeaderProps> = ({ className }) => {
	const { isMenuOpen, toggleMenu } = useContext(MenuContext);
	const {t, i18n} = useTranslation();

	const datas = [
		{label: t('pages.header.buttons.change_language.pt'), value: 'pt'}, 
		{label: t('pages.header.buttons.change_language.en'), value: 'en'}
	]

	const onChangeLanguage = (value: string) => {
		i18n.changeLanguage(value)
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
					<SelectPicker 
						size='lg'
						data={datas.map(item => ({label: item.label, value: item.value}))}
						onChange={(value) => onChangeLanguage(value!)}
						searchable={false}
						defaultValue="en"
						cleanable={false}
						placeholder={t('pages.header.buttons.change_language.placeholder')}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Header;
