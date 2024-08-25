import Contact from "@/components/layout/Footer/Contact";
import styles from "@/styles/components/layout/footer/index.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				לשאלות או לבירור על תעסוקה <span className={styles["enter-details"]}>השאירו את פרטיכם</span>
			</p>
			<Contact />
		</footer>
	);
}
