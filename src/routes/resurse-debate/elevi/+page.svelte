<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import Heading from "$lib/components/heading/Heading.svelte";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	export let data;
	let resurseEleviHeading = data.data.heading;
	let resurseEleviContent = data.data.content;
</script>

<Fullpage>
	<FullpageSection title="Dezbateri - Resurse Elevi">
		<Heading
			image={resurseEleviHeading.image}
			title={resurseEleviHeading.title}
			description={resurseEleviHeading.description}
			callToActionText={resurseEleviHeading.callToAction.text}
			callToActionLink={resurseEleviHeading.callToAction.link}
		/>
	</FullpageSection>
	{#each resurseEleviContent as content, i}
		<FullpageSection title={content.title}>
			{#if i % 2 === 0}
				<BoxTextLeftImageRight
					backgroundColor={content.backgroundColor}
					textColor={content.textColor}
					title={content.title}
					description={content.description}
					image={content.image.link}
					imageAlt={content.image.alt}
					boxColor={content.boxColor}
					callToActionText={content.callToAction.text}
					callToActionUrl={content.callToAction.link}
				/>
			{:else}
				<BoxTextRightImageLeft
					backgroundColor={content.backgroundColor}
					textColor={content.textColor}
					title={content.title}
					description={content.description}
					image={content.image.link}
					imageAlt={content.image.alt}
					boxColor={content.boxColor}
					callToActionText={content.callToAction.text}
					callToActionUrl={content.callToAction.link}
				/>
			{/if}
		</FullpageSection>
	{/each}
</Fullpage>
