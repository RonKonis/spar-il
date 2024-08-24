import styles from "@/styles/pages/sparBranch.module.scss";

export default function SPARBranch() {
	return (
		<div className={styles["spar-branch"]}>
			<p>
				תנו קפיצה אם אתם קרובים - <span className={styles.location}>הורוביץ 26, כפר סבא</span>
			</p>
			<div className={styles["opening-hours"]}>
				<h4 className={styles.label}>שעות פתיחה</h4>
				<p>{`א'-ד' 8:00-22:00 | ה' 7:00-23:00 | ו' 7:00-15:00 | שבת סגור (אנחנו נחים ונהנים)`}</p>
			</div>
		</div>
	);
}
