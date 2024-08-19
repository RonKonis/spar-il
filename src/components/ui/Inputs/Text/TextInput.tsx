import { ComponentProps, forwardRef } from "react";
import ErrorText from "@/components/ui/ErrorText";
import TextField from "@/components/ui/Inputs/Text/TextField";
import { ErrorMessage } from "@/types/error";
import styles from "@/styles/components/ui/inputs/text/textInput.module.scss";

type Props = {
	className?: string;
	icon?: JSX.Element;
	error?: ErrorMessage;
} & ComponentProps<typeof TextField>;

const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(({ className = undefined, icon = undefined, error = undefined, ...rest }, ref) => (
	<div className={styles["input-container"]}>
		<div className={`${styles.text} ${rest.kind === "textarea" ? styles.textarea : ""} ${className ?? ""} ${error ? styles.invalid : ""}`}>
			<TextField ref={ref} {...rest} />
			{icon}
		</div>
		<ErrorText error={error} />
	</div>
));

export default TextInput;

TextInput.defaultProps = {
	className: undefined,
	icon: undefined,
	error: undefined,
};
