<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";

	let backgroundColor = "#ffffff";
	let backgroundColorAlternate = "#9f9d34";
	let headingText = "Muntenia Monthly Open";
	let subHeadingText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl.";
	let callToActionText = "Pagina de Facebook";
	let callToActionUrl = "facebook.com";
	let imageUrl = "/images/495-1920x1080.webp";
	let imageAlt = "competitie-muntenia-monthly-open";
	let boxColor = "#1ea0cc";
	let boxColorAlternate = "#536dc0";
</script>

<Fullpage>
	<FullpageSection title="MMO">
		<BoxTextLeftImageRight
			{backgroundColor}
			{headingText}
			{subHeadingText}
			{callToActionText}
			{callToActionUrl}
			{imageUrl}
			{imageAlt}
			{boxColor}
		/>
	</FullpageSection>
	<FullpageSection title="MMO-2">
		<BoxTextRightImageLeft
			backgroundColor={backgroundColorAlternate}
			{headingText}
			{subHeadingText}
			{callToActionText}
			{callToActionUrl}
			{imageUrl}
			{imageAlt}
			boxColor={boxColorAlternate}
		/>
	</FullpageSection>
</Fullpage>
