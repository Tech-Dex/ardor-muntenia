<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import FullMap from "$lib/components/content/FullMap.svelte";
	import Quadrate from "$lib/components/content/Quadrate.svelte";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import HeadingTextRight from "$lib/components/heading/HeadingTextRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";

	export let data;

	let optionalDorHeading = data.data.heading;
	let optionalDorContent = data.data.content;
	let optionalDorQuadrate = data.data.quadrate;
	let optionalDorMap = data.data.map;
</script>

<Fullpage>
	<FullpageSection title="Optionalul Dezbatere, Oratorie și Retorică">
		<HeadingTextRight
			image={optionalDorHeading.image}
			title={optionalDorHeading.title}
			description={optionalDorHeading.description}
			callToActionText={optionalDorHeading.callToAction.text}
			callToActionLink={optionalDorHeading.callToAction.link}
		/>
	</FullpageSection>
	{#each optionalDorContent as content, i}
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
	<FullpageSection>
		<Quadrate
			title="Profesori si elevi"
			topLeftImage={optionalDorQuadrate.topLeftImage}
			topRightIcon={optionalDorQuadrate.topRightIcon}
			topRightTitle={optionalDorQuadrate.topRightTitle}
			topRightDescription={optionalDorQuadrate.topRightDescription}
			bottomLeftIcon={optionalDorQuadrate.bottomLeftIcon}
			bottomLeftTitle={optionalDorQuadrate.bottomLeftTitle}
			bottomLeftDescription={optionalDorQuadrate.bottomLeftDescription}
			bottomRightImage={optionalDorQuadrate.bottomRightImage}
		/>
	</FullpageSection>
	<FullpageSection title="Harta Cluburilor Ardor Muntenia">
		<FullMap
			mapSrc={optionalDorMap.link}
			title={optionalDorMap.title}
			backgroundColor={optionalDorMap.backgroundColor}
		/>
	</FullpageSection>
</Fullpage>
