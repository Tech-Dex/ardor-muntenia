<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import Heading from "$lib/components/heading/Heading.svelte";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import UsefulLinks from "$lib/components/content/UsefulLinks.svelte";
	export let data;
	let resurseProfesoriHeading = data.data.heading;
	let resurseProfesoriUsefulLinks = data.data.usefulLinks;
	let resurseProfesoriContent = data.data.content;
</script>

<Fullpage>
	<FullpageSection title="Dezbateri - Resurse Profesori">
		<Heading
			image={resurseProfesoriHeading.image}
			title={resurseProfesoriHeading.title}
			description={resurseProfesoriHeading.description}
			callToActionText={resurseProfesoriHeading.callToAction.text}
			callToActionLink={resurseProfesoriHeading.callToAction.link}
		/>
	</FullpageSection>
	<FullpageSection title="Dezbateri - Links Utile Profesori">
		<UsefulLinks data={resurseProfesoriUsefulLinks} />
	</FullpageSection>
	{#each resurseProfesoriContent as content, i}
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
