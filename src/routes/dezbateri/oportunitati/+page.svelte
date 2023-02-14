<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import QuadrateText from "$lib/components/content/QuadrateText.svelte";

	export let data;

	let oportunitatiContent = data.data.content;
	let oportunitatiQuadrate = data.data.quadrate;
</script>

<Fullpage>
	{#each oportunitatiContent as content, i}
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
						callToActionText={content.callToAction.text}
						callToActionUrl={content.callToAction.link}
					/>
				{/if}
			</FullpageSection>
		{/if}
	{/each}
	<FullpageSection>
		<QuadrateText
			title="Oportunitati"
			topLeftIcon={oportunitatiQuadrate.topLeftIcon}
			topLeftTitle={oportunitatiQuadrate.topLeftTitle}
			topLeftDescription={oportunitatiQuadrate.topLeftDescription}
			topLeftCallToActionText={oportunitatiQuadrate.topLeftCallToAction.text}
			topLeftCallToActionUrl={oportunitatiQuadrate.topLeftCallToAction.link}
			topRightIcon={oportunitatiQuadrate.topRightIcon}
			topRightTitle={oportunitatiQuadrate.topRightTitle}
			topRightDescription={oportunitatiQuadrate.topRightDescription}
			topRightCallToActionText={oportunitatiQuadrate.topRightCallToAction.text}
			topRightCallToActionUrl={oportunitatiQuadrate.topRightCallToAction.link}
			bottomLeftIcon={oportunitatiQuadrate.bottomLeftIcon}
			bottomLeftTitle={oportunitatiQuadrate.bottomLeftTitle}
			bottomLeftDescription={oportunitatiQuadrate.bottomLeftDescription}
			bottomLeftCallToActionText={oportunitatiQuadrate.bottomLeftCallToAction.text}
			bottomLeftCallToActionUrl={oportunitatiQuadrate.bottomLeftCallToAction.link}
			bottomRightIcon={oportunitatiQuadrate.bottomRightIcon}
			bottomRightTitle={oportunitatiQuadrate.bottomRightTitle}
			bottomRightDescription={oportunitatiQuadrate.bottomRightDescription}
			bottomRightCallToActionText={oportunitatiQuadrate.bottomRightCallToAction.text}
			bottomRightCallToActionUrl={oportunitatiQuadrate.bottomRightCallToAction.link}
		/>
	</FullpageSection>
</Fullpage>
