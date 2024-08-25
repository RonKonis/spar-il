import { ErrorMessage } from "@/types/error";
import styles from "@/styles/components/ui/errorText.module.scss";

interface Props {
	className?: string;
	error: ErrorMessage;
}

export default function ErrorText({ className = undefined, error }: Props) {
	return error !== undefined ? <p className={`${styles.error} ${className ?? ""}`}>{error}</p> : null;
}

ErrorText.defaultProps = {
	className: undefined,
};
