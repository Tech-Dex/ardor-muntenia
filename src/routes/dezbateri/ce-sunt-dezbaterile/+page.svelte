<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import Heading from "$lib/components/heading/Heading.svelte";
	import BoxTextVideoNumbers from "$lib/components/content/TextVideoStats.svelte";
	import BoxTextLeftImageRight from "$lib/components/content/BoxTextLeftImageRight.svelte";
	import BoxTextRightImageLeft from "$lib/components/content/BoxTextRightImageLeft.svelte";
	import TestimonialRightImageSection from "$lib/components/content/TestimonialRightImageSection.svelte";
	export let data;

	let ceSuntDezbaterileHeading = data.data.heading;
	let ceSuntDezbaterileContent = data.data.content;
	let ceSuntDezbaterileTestimonial = data.data.testimonial;
	let stats = data.data.stats;
</script>

<Fullpage>
	<FullpageSection title="Ce sunt dezbaterile?">
		<Heading
			image={ceSuntDezbaterileHeading.image}
			title={ceSuntDezbaterileHeading.title}
			description={ceSuntDezbaterileHeading.description}
			callToActionText={ceSuntDezbaterileHeading.callToAction.text}
			callToActionLink={ceSuntDezbaterileHeading.callToAction.link}
		/>
	</FullpageSection>
	{#each ceSuntDezbaterileContent as content, i}
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
	<FullpageSection title="Statistci ARDOR Muntenia">
		<BoxTextVideoNumbers title={stats.title} numbers={stats.numbers} />
	</FullpageSection>
	<FullpageSection title="{ceSuntDezbaterileTestimonial.author} - Testimonial">
		<TestimonialRightImageSection
			text={ceSuntDezbaterileTestimonial.text}
			image={ceSuntDezbaterileTestimonial.image}
			author={ceSuntDezbaterileTestimonial.author}
			authorDescription={ceSuntDezbaterileTestimonial.authorDescription}
		/>
	</FullpageSection>
</Fullpage>
