import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "@/styles/components/ui/actionButton.module.scss";

type ButtonVariants = "primary" | "secondary" | "tertiary";

interface Props {
	className?: string;
	variant: ButtonVariants;
	kind?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	onClick?: () => void;
	disabled?: boolean;
	children: ReactNode;
}

export default function ActionButton({ className = undefined, variant, kind = undefined, onClick = () => {}, disabled = false, children }: Props) {
	return (
		<button
			className={`${styles["action-button"]} ${styles[variant]} ${className ?? ""}`}
			type={kind ?? "button"}
			onClick={(e) => {
				if (!disabled) onClick();
				e.currentTarget.blur();
			}}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

ActionButton.defaultProps = {
	className: undefined,
	kind: undefined,
	onClick: () => {},
	disabled: false,
};
