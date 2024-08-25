import { ComponentProps, forwardRef } from "react";
import ErrorText from "@/components/ui/ErrorText";
import TextField from "@/components/ui/Inputs/Text/TextField";
import { ErrorMessage } from "@/types/error";
import styles from "@/styles/components/ui/inputs/text/textInput.module.scss";

interface TextInputClassNames {
	container?: string;
	input?: string;
	error?: string;
}

type Props = {
	classNames?: TextInputClassNames;
	icon?: JSX.Element;
	error?: ErrorMessage;
} & ComponentProps<typeof TextField>;

const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(({ classNames = {}, icon = undefined, error = undefined, ...rest }, ref) => (
	<div className={`${styles["input-container"]} ${classNames.container ?? ""}`}>
		<div className={`${styles.text} ${rest.kind === "textarea" ? styles.textarea : ""} ${error ? styles.invalid : ""}`}>
			<TextField ref={ref} className={classNames.input} {...rest} />
			{icon}
		</div>
		<ErrorText className={classNames.error} error={error} />
	</div>
));

export default TextInput;

TextInput.defaultProps = {
	classNames: undefined,
	icon: undefined,
	error: undefined,
};
