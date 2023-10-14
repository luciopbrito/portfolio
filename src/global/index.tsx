import { ReactNode } from "react";

export interface IClassName {
	className?: string;
}

export interface IChildren {
	children: ReactNode;
}

export interface IOnClick {
	// eslint-disable-next-line
	onClick: () => any;
}
