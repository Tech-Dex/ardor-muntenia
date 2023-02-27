<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import RetroContainer from "$lib/components/content/RetroContainer.svelte";
	import HeadingTextRight from "$lib/components/heading/HeadingTextRight.svelte";

	export let data;

	let predaiOlimpiadaHeading = data.data.heading;
	let predaiOlimpiadaContent = data.data.content;
	let retroBgImage = data.data.retroContent.backgroundImage;
	let retroHeading = data.data.retroContent.heading;
	let columns = data.data.retroContent.columns;
</script>

<Fullpage>
	<FullpageSection title="Olimpiada Tinerii Dezbat">
		<HeadingTextRight
			image={predaiOlimpiadaHeading.image}
			title={predaiOlimpiadaHeading.title}
			description={predaiOlimpiadaHeading.description}
		/>
	</FullpageSection>
	{#each predaiOlimpiadaContent as content, i}
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
					/>
				{:else}
					<BoxTextRightImageLeft
						icon={content.icon}
						title={content.title}
						description={content.description}
						image={content.image.src}
						imageAlt={content.image.alt}
						boxColor={content.boxColor}
					/>
				{/if}
			</FullpageSection>
		{/if}
	{/each}
	<FullpageSection title="Predai Olimpiada Retro">
		<RetroContainer backgroundImage={retroBgImage} {columns} heading={retroHeading} />
	</FullpageSection>
</Fullpage>
