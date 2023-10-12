import React, { ReactNode, createContext, useReducer } from "react";

interface MenuProviderProps {
	children: ReactNode;
}

interface MenuContextData {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

interface Action {
	type: DispatchMenuContext;
	// eslint-disable-next-line
	payload?: any;
}

export enum DispatchMenuContext {
	TOGGLE_MENU = 1,
}

const initialState: MenuContextData = {
	isMenuOpen: false,
	toggleMenu: () => {},
};

const menuReducer = (
	state: MenuContextData,
	action: Action
): MenuContextData => {
	switch (action.type) {
		case DispatchMenuContext.TOGGLE_MENU:
			return { ...state, isMenuOpen: !state.isMenuOpen };
		default:
			return state;
	}
};

export const MenuContext = createContext<MenuContextData>(
	{} as MenuContextData
);

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
	const [menuState, dispatch] = useReducer(menuReducer, initialState);

	const toggleMenu = () => {
		dispatch({ type: DispatchMenuContext.TOGGLE_MENU });
	};

	return (
		<MenuContext.Provider
			value={{ ...menuState, toggleMenu } as MenuContextData}
		>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuProvider;
