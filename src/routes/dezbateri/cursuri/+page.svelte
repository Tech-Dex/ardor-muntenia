<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import HeadingTextLeft from "$lib/components/heading/HeadingTextLeft.svelte";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import RetroContainer from "$lib/components/content/RetroContainer.svelte";

	export let data;

	let cursuriHeading = data.data.heading;
	let cursuriContent = data.data.content;

	let retroBgImage = data.data.retroContent.backgroundImage;
	let retroHeading = data.data.retroContent.heading;
	let columns = data.data.retroContent.columns;
</script>

<Fullpage>
	<FullpageSection title="Clubul">
		<HeadingTextLeft
			image={cursuriHeading.image}
			title={cursuriHeading.title}
			description={cursuriHeading.description}
			callToActionText={cursuriHeading.callToAction.text}
			callToActionLink={cursuriHeading.callToAction.link}
		/>
	</FullpageSection>
	{#each cursuriContent as content, i}
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
	<FullpageSection title="Cursuri Retro">
		<RetroContainer backgroundImage={retroBgImage} {columns} heading={retroHeading} />
	</FullpageSection>
</Fullpage>
