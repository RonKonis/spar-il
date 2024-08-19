import { forwardRef, InputHTMLAttributes, Ref, TextareaHTMLAttributes } from "react";
import styles from "@/styles/components/ui/inputs/text/textField.module.scss";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	kind?: "text" | "email" | "password" | "tel";
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	kind: "textarea";
}

type Props = InputProps | TextareaProps;

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>((props, ref) => {
	const { kind } = props;

	return kind === "textarea" ? (
		<textarea ref={ref as Ref<HTMLTextAreaElement>} className={styles.textarea} autoComplete="on" {...props} />
	) : (
		<input ref={ref as Ref<HTMLInputElement>} className={styles.input} type={kind} autoComplete="on" {...props} />
	);
});

export default TextField;
