<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import HeadingWithBackground from "$lib/headings/HeadingWithBackground.svelte";

	let headingImageUrl = "/images/939-1920x1080.webp";
	let headingText = "ARDOR Muntenia";
	let subHeadingText =
		"În cadrul societății, ARDOR Muntenia își asumă misiunea de a contribui activ la educarea tinerilor pentru o cultură a dialogului și a dezbaterii în România. Printre valorile la care asociația aderă, se numără profesionalismul, toleranța și echitatea, acestea regăsindu-se atât în relația cu beneficiarii direcți ai dezbaterilor cât și cu celelalte asociații regionale ARDOR din țară.Asociatia Regionala de Dezbateri, Oratorie si Dezbateri – Muntenia (ARDOR Muntenia) este entitatea care gestioneaza activitatea de dezbateri in spatiul geografic al regiunii istorice Muntenia.";
</script>

<Fullpage>
	<FullpageSection title="Viziune">
		<HeadingWithBackground {headingImageUrl} {headingText} {subHeadingText} />
	</FullpageSection>
</Fullpage>
