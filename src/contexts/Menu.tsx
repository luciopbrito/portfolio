import React, { ReactNode, createContext, useReducer } from "react";

// import { Container } from './styles';

interface MenuProviderProps {
	children: ReactNode;
}

interface MenuContextData {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

interface Action {
	type: "TOGGLE_MENU";
}

// Define the initial state and action types
const initialState: MenuContextData = {
	isMenuOpen: false,
	toggleMenu: () => {},
};
const TOGGLE_MENU = "TOGGLE_MENU";

// Create a reducer function
const menuReducer = (
	state: MenuContextData,
	action: Action
): MenuContextData => {
	switch (action.type) {
		case TOGGLE_MENU:
			return { ...state, isMenuOpen: !state.isMenuOpen };
		default:
			return state;
	}
};

export const MenuContext = createContext<MenuContextData | undefined>(
	undefined
);

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
	// const toggleMenu = () => {
	// 	changeMenuState("isMenuOpen", !menuState.isMenuOpen);
	// };

	// const [menuState, setMenuState] = useState<MenuContextData>({
	// 	isMenuOpen: false,
	// 	toggleMenu: toggleMenu,
	// });

	const [menuState, dispatch] = useReducer(menuReducer, initialState);

	const toggleMenu = () => {
		dispatch({ type: "TOGGLE_MENU" });
	};

	// // eslint-disable-next-line @typescript-eslint/no-explicit-any
	// const changeMenuState = (key: string, value: any) => {
	// 	setMenuState((prev) => ({
	// 		...prev,
	// 		[key]: value,
	// 	}));
	// };

	return (
		<MenuContext.Provider value={{ ...menuState, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuProvider;
