import { ReactNode, createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export interface IClassName {
	className?: string;
}

export interface IChildren {
	children?: ReactNode;
}

export interface IOnClick {
	// eslint-disable-next-line
	onClick: () => any;
}

export const reactSvgComponentToMarkupString = (
	// eslint-disable-next-line
	Component: React.ComponentType<any>
	// eslint-disable-next-line
): string =>
	`data:image/svg+xml,${encodeURIComponent(
		renderToStaticMarkup(createElement(Component))
	)}`;
