import { FormEvent, ReactNode } from "react";
import styles from "@/styles/components/ui/form/form.module.scss";

interface Props {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
}

export default function Form({ onSubmit, children }: Props) {
	return (
		<form
			className={styles.form}
			autoComplete="on"
			spellCheck="false"
			noValidate
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(e);
			}}
		>
			{children}
		</form>
	);
}
