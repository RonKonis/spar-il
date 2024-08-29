"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import XSVG from "@/components/svgs/X";
import ModalController, { ModalData } from "@/lib/modalController";
import styles from "@/styles/components/ui/modal.module.scss";

export default function Modal() {
	const [modalData, setModalData] = useState<ModalData>(null);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const closeModal = useCallback(() => {
		if (!dialogRef.current) return;
		const dialog = dialogRef.current;
		dialog.classList.add(styles["modal-closing"]);
		dialog.addEventListener(
			"animationend",
			() => {
				dialog.classList.remove(styles["modal-closing"]);
				document.body.classList.remove("no-scroll");
				setModalData(null);
				dialog.close();
			},
			{ once: true },
		);
	}, []);

	useEffect(() => {
		ModalController.setData = (data) => {
			if (!dialogRef.current) return;
			const dialog = dialogRef.current;
			const open = data !== null;
			if (open && !dialog.open) {
				document.body.classList.add("no-scroll");
				dialog.showModal();
			} else if (!open && dialog.open) {
				closeModal();
			}
			setModalData(data);
		};

		return () => {
			ModalController.setData = null;
		};
	}, [closeModal]);

	useEffect(() => {
		if (!dialogRef.current) return () => {};
		const dialog = dialogRef.current;

		const onClick = (e: MouseEvent) => {
			if (e.target === dialog) closeModal();
		};

		const onClose = () => {
			modalData?.onClose?.();
		};

		dialog.addEventListener("click", onClick);
		dialog.addEventListener("close", onClose);
		return () => {
			dialog.removeEventListener("click", onClose);
			dialog.removeEventListener("close", onClose);
		};
	}, [closeModal, modalData]);

	return (
		<dialog ref={dialogRef} className={styles.modal}>
			<button className={styles["close-button"]} onClick={closeModal} aria-label="close">
				{}
				<XSVG />
			</button>
			{modalData?.children}
		</dialog>
	);
}
