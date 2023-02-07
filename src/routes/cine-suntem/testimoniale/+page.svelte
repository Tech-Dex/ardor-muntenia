<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import TestimonialsContainerSection from "$lib/components/content/TestimonialsContainerSection.svelte";

	let data = [
		{
			imageUrl: "/images/elevi.webp",
			name: "Ana Smith",
			role: "Debate Officer",
			description:
				"Tocmai datorită acestei comunități, te face să vrei să dai înapoi, după. Să fii trainer, să organizezi competiții, să arbitrezi. Și când te prinde, e un sentiment incredibil de plăcut.",
		},
		{
			imageUrl: "/images/elevi.webp",
			name: "Ana Smith",
			role: "Debate Officer",
			description:
				"Tocmai datorită acestei comunități, te face să vrei să dai înapoi, după. Să fii trainer, să organizezi competiții, să arbitrezi. Și când te prinde, e un sentiment incredibil de plăcut.",
		},
		{
			imageUrl: "/images/elevi.webp",
			name: "Ana Smith",
			role: "Debate Officer",
			description:
				"Tocmai datorită acestei comunități, te face să vrei să dai înapoi, după. Să fii trainer, să organizezi competiții, să arbitrezi. Și când te prinde, e un sentiment incredibil de plăcut.",
		},
	];
</script>

<Fullpage>
	<FullpageSection title="Testimoniale">
		<TestimonialsContainerSection {data} />
	</FullpageSection>
	<FullpageSection title="Testimoniale">
		<TestimonialsContainerSection {data} />
	</FullpageSection>
	<FullpageSection title="Testimoniale">
		<TestimonialsContainerSection {data} />
	</FullpageSection>
</Fullpage>
