<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import RetroContainer from "$lib/components/content/RetroContainer.svelte";
	import Heading from "$lib/components/heading/Heading.svelte";

	export let data;

	let elevOlimpiadaHeading = data.data.heading;
	let elevOlimpiadaContent = data.data.content;
	let retroBgImage = data.data.retroContent.backgroundImage;
	let retroHeading = data.data.retroContent.heading;
	let columns = data.data.retroContent.columns;
</script>

<Fullpage>
	<FullpageSection title="Olimpiada">
		<Heading
			image={elevOlimpiadaHeading.image}
			title={elevOlimpiadaHeading.title}
			description={elevOlimpiadaHeading.description}
		/>
	</FullpageSection>
	{#each elevOlimpiadaContent as content, i}
		{#if !(Object.keys(content).length === 0)}
			<FullpageSection title={content.title}>
				{#if i % 2 === 0}
					<BoxTextLeftImageRight
						icon={content.icon}
						title={content.title}
						description={content.description}
						image={content.image.src}
						imageAlt={content.image.alt}
						boxColor={content.boxColor}
						callToActionText={content.callToAction.text}
						callToActionUrl={content.callToAction.link}
					/>
				{:else}
					<BoxTextRightImageLeft
						icon={content.icon}
						title={content.title}
						description={content.description}
						image={content.image.src}
						imageAlt={content.image.alt}
						boxColor={content.boxColor}
						callToActionText={content.callToActionText}
						callToActionUrl={content.callToActionLink}
					/>
				{/if}
			</FullpageSection>
		{/if}
	{/each}
	<FullpageSection title="Elev Olimpiada Retro">
		<RetroContainer backgroundImage={retroBgImage} {columns} heading={retroHeading} />
	</FullpageSection>
</Fullpage>
