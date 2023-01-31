<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import Heading from "$lib/headings/Heading.svelte";
	import HeadingTextLeft from "$lib/headings/HeadingTextLeft.svelte";
	import HeadingTextRight from "$lib/headings/HeadingTextRight.svelte";

	let headingImageUrl = "/images/495-1920x1080.webp";
	let headingText = "Dezbaterile Academice";
	let subHeadingText = "Dezvoltare ";
	let subHeadingTextAlternative =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl.";
	let callToActionText = "Inscrie-te";
	let callToActionUrl = "/inscriere";
	let videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
</script>

<Fullpage>
	<FullpageSection title="Ce sunt dezbaterile?">
		<Heading
			{headingImageUrl}
			{headingText}
			{subHeadingText}
			{callToActionText}
			{callToActionUrl}
		/>
	</FullpageSection>
	<FullpageSection title="Lorem Ipsum">
		<HeadingTextLeft
			{headingImageUrl}
			{headingText}
			subHeadingText={subHeadingTextAlternative}
			{callToActionText}
			{callToActionUrl}
			{videoUrl}
		/>
	</FullpageSection>
	<FullpageSection title="Lorem Ipsum">
		<HeadingTextRight
			{headingImageUrl}
			{headingText}
			subHeadingText={subHeadingTextAlternative}
			{callToActionText}
			{callToActionUrl}
			{videoUrl}
		/>
	</FullpageSection>
</Fullpage>
