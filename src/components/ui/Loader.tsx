import styles from "@/styles/components/ui/loader.module.scss";

type LoaderSizes = "small" | "medium";

interface Props {
	size?: LoaderSizes;
}

export default function Loader({ size = "medium" }: Props) {
	return <div className={`${styles.loader} ${styles[size ?? "medium"]}`} />;
}

Loader.defaultProps = {
	size: "medium",
};
