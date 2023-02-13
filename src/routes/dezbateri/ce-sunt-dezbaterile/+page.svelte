<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import Heading from "$lib/components/heading/Heading.svelte";
	import HeadingTextLeft from "$lib/components/heading/HeadingTextLeft.svelte";
	import HeadingTextRight from "$lib/components/heading/HeadingTextRight.svelte";
	import BoxTextVideoNumbers from "$lib/components/content/BoxTextVideoNumbers.svelte";
	export let data;

	let headingImageUrl = "/images/495-1920x1080.webp";
	let headingText = "Dezbaterile Academice";
	let subHeadingText = "Dezvoltare ";
	let subHeadingTextAlternative =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec luctus nunc nisl eget nisl.";
	let callToActionText = "Inscrie-te";
	let callToActionUrl = "/inscriere";
	let videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

	let heading = data.data.heading;
	let columns = data.data.columns;
</script>

<Fullpage>
	<FullpageSection title="Ce sunt dezbaterile?">
		<Heading
			image={headingImageUrl}
			title={headingText}
			description={subHeadingText}
			{callToActionText}
			callToActionLink={callToActionUrl}
		/>
	</FullpageSection>
	<FullpageSection title="Lorem Ipsum">
		<HeadingTextLeft
			image={headingImageUrl}
			title={headingText}
			description={subHeadingTextAlternative}
			{callToActionText}
			callToActionLink={callToActionUrl}
			{videoUrl}
		/>
	</FullpageSection>
	<FullpageSection title="Lorem Ipsum">
		<HeadingTextRight
			image={headingImageUrl}
			title={headingText}
			description={subHeadingTextAlternative}
			{callToActionText}
			callToActionLink={callToActionUrl}
			{videoUrl}
		/>
	</FullpageSection>
	<FullpageSection title="Lorem Ipsum">
		<BoxTextVideoNumbers {heading} {columns} />
	</FullpageSection>
</Fullpage>
