<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import HeadingTextLeft from "$lib/components/heading/HeadingTextLeft.svelte";
	import Quadrate from "$lib/components/content/Quadrate.svelte";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import CallToAction from "../../../lib/components/content/CallToAction.svelte";

	export let data;

	let clubulHeading = data.data.heading;
	let clubulContent = data.data.content;
	let clubulQuadrate = data.data.quadrate;
	let callToAction = data.data.callToAction;
</script>

<Fullpage>
	<FullpageSection title="Profesionisti">
		<HeadingTextLeft
			image={clubulHeading.image}
			title={clubulHeading.title}
			description={clubulHeading.description}
			callToActionText={clubulHeading.callToAction.text}
			callToActionLink={clubulHeading.callToAction.link}
		/>
	</FullpageSection>
	{#each clubulContent as content, i}
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
			title="DialogOn"
			topLeftImage={clubulQuadrate.topLeftImage}
			topRightIcon={clubulQuadrate.topRightIcon}
			topRightTitle={clubulQuadrate.topRightTitle}
			topRightDescription={clubulQuadrate.topRightDescription}
			bottomLeftIcon={clubulQuadrate.bottomLeftIcon}
			bottomLeftTitle={clubulQuadrate.bottomLeftTitle}
			bottomLeftDescription={clubulQuadrate.bottomLeftDescription}
			bottomRightImage={clubulQuadrate.bottomRightImage}
		/>
	</FullpageSection>
	<FullpageSection>
		<CallToAction
			heading={callToAction.heading}
			subHeading={callToAction.subHeading}
			primaryColor={callToAction.primaryColor}
			callToActionLink={callToAction.callToActionLink}
			contentList={callToAction.contentList}
			callToActionTitle={callToAction.callToActionTitle}
		/>
	</FullpageSection>
</Fullpage>
