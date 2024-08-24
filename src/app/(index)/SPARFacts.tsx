import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "@/styles/pages/sparFacts.module.scss";

interface SPARFact {
	description: string;
	icon: JSX.Element;
}

const sparFacts: SPARFact[] = [
	{
		description: "בספאר תוכלו למצוא מגוון של מוצרים מתוצרת הארץ ומוצרים מיובאים ייחודיים",
		icon: <>xd</>,
	},
	{
		description: "יש לנו 13,112 סניפים ברחבי העולם ואחת חדשה כאן בכפר סבא",
		icon: <>xd</>,
	},
	{
		description: "הקמנו את מסלול הבאולינג הראשון בעולם בסופרמרקט",
		icon: <>xd</>,
	},
	{
		description: "מערת בירה- חלל מקורר עם מגוון מטורף של 350 בירות מהארץ והעולם",
		icon: <>xd</>,
	},
	{
		description: "קרח ומלח חינם- לחברי המועדון שלנו למימוש בכל קניה",
		icon: <>xd</>,
	},
];

export default function SPARFacts() {
	return (
		<div className={styles["spar-facts"]}>
			<h4>{`${sparFacts.length} דברים שלא ידעתם על ספאר`}</h4>
			<div className={styles["facts-list"]}>
				{sparFacts.map((fact) => (
					<ScrollReveal as="div" key={fact.description} className={styles.fact} threshold={0.8}>
						<div className={styles["fact-icon"]}>{fact.icon}</div>
						{fact.description}
					</ScrollReveal>
				))}
			</div>
		</div>
	);
}
