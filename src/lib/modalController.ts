"use client";

import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	onClose?: () => void;
}

export type ModalData = Props | null;

export default class ModalController {
	static setData: ((data: ModalData) => void) | null = null;

	static open = ({ children, onClose }: Props) => {
		this.setData?.({ children, onClose });
	};

	static close = () => {
		this.setData?.(null);
	};
}
