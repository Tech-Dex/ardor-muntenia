<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import HeadingWithBackground from "$lib/components/heading/HeadingWithBackground.svelte";
	import TextQuote from "$lib/components/content/TextQuote.svelte";
	import BoxTextImageCenter from "$lib/components/content/BoxTextImageCenter.svelte";

	export let data;

	let viziuneHeading = data.data.heading;
	let viziuneContent = data.data.content;
	let viziuneContentLength = viziuneContent.length;
	let viziuneQuote = data.data.quote;
</script>

<Fullpage>
	<FullpageSection title="Viziune">
		<HeadingWithBackground
			image={viziuneHeading.image}
			title={viziuneHeading.title}
			description={viziuneHeading.description}
		/>
	</FullpageSection>
	{#each viziuneContent as content, i}
		{#if i !== viziuneContentLength - 1}
			{#if i % 2 === 0}
				<!--BoxTextLeftImageRight-->
			{:else}
				<!--BoxTextRightImageLeft-->
			{/if}
		{/if}
	{/each}

	<FullpageSection>
		<div class="column">
			<BoxTextImageCenter
				image={viziuneContent[viziuneContentLength - 1].image}
				title={viziuneContent[viziuneContentLength - 1].title}
				description={viziuneContent[viziuneContentLength - 1].description}
				backgroundColor={viziuneContent[viziuneContentLength - 1].backgroundColor}
			/>
			<TextQuote
				quote={viziuneQuote.text}
				textColor={viziuneQuote.textColor}
				backgroundColor={viziuneQuote.backgroundColor}
			/>
		</div>
	</FullpageSection>
</Fullpage>

<style>
	.column {
		width: 100%;
		height: 100%;
	}
</style>
