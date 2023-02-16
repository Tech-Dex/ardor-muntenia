<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import RetroContainer from "$lib/components/content/RetroContainer.svelte";

	export let data;

	let proiecteContent = data.data.content;
	let retroBgImage = data.data.retroContent.backgroundImage;
	let retroHeading = data.data.retroContent.heading;
	let columns = data.data.retroContent.columns;
</script>

<Fullpage>
	{#each proiecteContent as content, i}
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
	<FullpageSection title="Arhiva Retro">
		<RetroContainer backgroundImage={retroBgImage} {columns} heading={retroHeading} />
	</FullpageSection>
</Fullpage>
