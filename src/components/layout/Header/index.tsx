import Image from "next/image";
import styles from "@/styles/components/layout/header/index.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles["welcome-container"]}>
				<h1 className={styles.title}>Welcome to</h1>
				<Image className={styles.logo} src="/images/logo.png" width={199} height={34} alt="logo" />
			</div>
			<h1 className={styles.title}>סופר מתרגשים שבאת לבקר</h1>
		</header>
	);
}
