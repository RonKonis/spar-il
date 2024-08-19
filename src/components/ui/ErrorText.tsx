import { ErrorMessage } from "@/types/error";
import styles from "@/styles/components/ui/errorText.module.scss";

interface Props {
	error: ErrorMessage;
}

export default function ErrorText({ error }: Props) {
	return error !== undefined ? <p className={styles.error}>{error}</p> : null;
}
