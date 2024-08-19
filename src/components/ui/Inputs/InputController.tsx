import { ComponentProps, forwardRef } from "react";
import TextInput from "@/components/ui/Inputs/Text/TextInput";

type Props = {
	inputKind: "text";
} & ComponentProps<typeof TextInput>;

const InputController = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>((props, ref) => {
	const { inputKind, ...rest } = props;

	if (inputKind === "text") return <TextInput ref={ref} {...rest} />;
	return null;
});

export default InputController;
