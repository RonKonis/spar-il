"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";
import { InView } from "react-intersection-observer";
import styles from "@/styles/components/ui/scrollReveal.module.scss";

type Props = ComponentPropsWithoutRef<typeof InView> & {
	className?: string;
	children: ReactNode;
};

export default function ScrollReveal({ className, children, ...rest }: Props) {
	return (
		<InView
			className={`${styles["scroll-reveal"]} ${className}`}
			onChange={(inView, entry) => {
				if (inView) entry.target.classList.add(styles["in-view"]);
				else if (entry.boundingClientRect.top > 0) entry.target.classList.remove(styles["in-view"]);
			}}
			{...rest}
		>
			{children}
		</InView>
	);
}

ScrollReveal.defaultProps = {
	className: undefined,
};
