import SPARBranch from "@/app/SPARBranch";
import SPARFacts from "@/app/SPARFacts";
import SPARIntroduction from "@/app/SPARIntroduction";
import styles from "@/styles/pages/index.module.scss";

export default function Index() {
	return (
		<section className={styles.spar}>
			<SPARIntroduction />
			<SPARFacts />
			<SPARBranch />
		</section>
	);
}
