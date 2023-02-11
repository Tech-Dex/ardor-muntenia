<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import TestimonialSection from "$lib/components/content/TestimonialSection.svelte";
	import Heading from "$lib/components/heading/Heading.svelte";
	import BoxColumnsVideo from "$lib/components/content/BoxColumnsVideo.svelte";
	export let data;

	let beneficiiHeading = data.data.heading;
	// let beneficiiContent = data.data.content;
	// let beneficiiContentLength = beneficiiContent.length;
	let beneficiiTestimonial = data.data.testimonial;
	let beneficiiColumns = data.data.columns;
</script>

<Fullpage>
	<FullpageSection title="Beneficii debate">
		<Heading
			image={beneficiiHeading.image}
			title={beneficiiHeading.title}
			description={beneficiiHeading.description}
			callToActionText={beneficiiHeading.callToAction.text}
			callToActionLink={beneficiiHeading.callToAction.link}
		/>
	</FullpageSection>
	<FullpageSection title="Lista beneficii debate">
		<BoxColumnsVideo {beneficiiColumns} />
	</FullpageSection>
	<FullpageSection title="{beneficiiTestimonial.author} - Testimonial">
		<TestimonialSection
			title={beneficiiTestimonial.title}
			description={beneficiiTestimonial.description}
			text={beneficiiTestimonial.text}
			image={beneficiiTestimonial.image}
			author={beneficiiTestimonial.author}
			authorDescription={beneficiiTestimonial.authorDescription}
		/>
	</FullpageSection>
</Fullpage>
