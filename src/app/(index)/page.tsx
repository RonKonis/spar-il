import SPARBranch from "@/app/(index)/SPARBranch";
import SPARFacts from "@/app/(index)/SPARFacts";
import SPARIntroduction from "@/app/(index)/SPARIntroduction";
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
