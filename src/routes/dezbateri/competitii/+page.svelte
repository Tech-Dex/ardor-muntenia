<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import TextLeftImageRight from "$lib/components/content/TextLeftImageRight.svelte";
	import TextRightImageLeft from "$lib/components/content/TextRightImageLeft.svelte";

	let backgroundColor = "#ffffff";
	let backgroundColorAlternative = "#474a5c";
	let headingText = "MMO";
	let headingTextColor = "#000000";
	let headingTextColorAlternative = "#ffffff";
	let subHeadingText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl.";
	let subHeadingTextColor = "#000000";
	let subHeadingTextColorAlternative = "#ffffff";
	let callToActionText = "Pagina de Facebook";
	let callToActionUrl = "facebook.com";
	let imageUrl = "/images/495-1920x1080.webp";
	let imageAlt = "competitie-mmo";
</script>

<Fullpage>
	<FullpageSection title="MMO">
		<TextLeftImageRight
			{backgroundColor}
			{headingText}
			{headingTextColor}
			{subHeadingText}
			{subHeadingTextColor}
			{callToActionText}
			{callToActionUrl}
			{imageUrl}
			{imageAlt}
		/>
	</FullpageSection>
	<FullpageSection title="MMO-2">
		<TextRightImageLeft
			backgroundColor={backgroundColorAlternative}
			{headingText}
			headingTextColor={headingTextColorAlternative}
			{subHeadingText}
			subHeadingTextColor={subHeadingTextColorAlternative}
			{callToActionText}
			{callToActionUrl}
			{imageUrl}
			{imageAlt}
		/>
	</FullpageSection>
</Fullpage>
