<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import HeadingWithBackground from "$lib/components/heading/HeadingWithBackground.svelte";
	import TextQuote from "$lib/components/content/TextQuote.svelte";
	import BoxTextImageCenter from "$lib/components/content/BoxTextImageCenter.svelte";

	let headingImageUrl = "/images/939-1920x1080.webp";
	let headingText = "ARDOR Muntenia";
	let subHeadingText =
		"În cadrul societății, ARDOR Muntenia își asumă misiunea de a contribui activ la educarea tinerilor pentru o cultură a dialogului și a dezbaterii în România. Printre valorile la care asociația aderă, se numără profesionalismul, toleranța și echitatea, acestea regăsindu-se atât în relația cu beneficiarii direcți ai dezbaterilor cât și cu celelalte asociații regionale ARDOR din țară.Asociatia Regionala de Dezbateri, Oratorie si Dezbateri – Muntenia (ARDOR Muntenia) este entitatea care gestioneaza activitatea de dezbateri in spatiul geografic al regiunii istorice Muntenia.";

	let quote =
		"Dezbaterile sunt cea mai mare oportunitate de dezvoltare personală în viața unei persoane care își dorește să fie mai creativă, mai ageră, mai calculată.";
	let bgColor = "#292d33";
	let textColor = "#fff";
</script>

<Fullpage>
	<FullpageSection title="Viziune">
		<HeadingWithBackground {headingImageUrl} {headingText} {subHeadingText} />
	</FullpageSection>
	<FullpageSection>
		<div class="column">
			<BoxTextImageCenter {headingImageUrl} {headingText} {subHeadingText} />
			<TextQuote {bgColor} {textColor} {quote} />
		</div>
	</FullpageSection>
</Fullpage>

<style>
	.column {
		width: 100%;
		height: 100%;
	}
</style>
