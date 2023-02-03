<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import TestimonialRightImageSection from "../../../lib/content/TestimonialRightImageSection.svelte";
	import TestimonialSection from "../../../lib/content/TestimonialSection.svelte";

	let testimonialHeader = "PEOPLE TALK";
	let testimonialSubheader =
		"“Să mă apuc de dezbateri și să mă țin de ele sunt probabil cele mai bune decizii pe care aș fi putut să le iau în liceu. Pe lângă avantajele evidente(te învață să vorbești în public, să nu mai ai trac, să îți structurezi un discurs), cred că face trei lucruri esențiale.”";
	let firstParagraph =
		"Îți dă acces la o comunitate cu oameni incredibili, cu experiețe și cunoștinte vast diferite de ale tale, oameni mai mari ca tine, care au trecut prin mai multe și te pot învăța și oameni tineri, care te fac să treci prin experiențe prin care trecusei deja, dar din perspectiva lor a cuiva care îi sustine acum pe ei . Îți dă un sentiment de apartenență și stabilitate; rare sunt momentele când rămâi singur.";
	let secondParagraph =
		"	Tocmai datorită acestei comunități, te face să vrei să dai înapoi, după. Să fii trainer, să organizezi competiții, să arbitrezi. Și când te prinde, e un sentiment incredibil de plăcut.";
	let image = "/images/elevi.webp";
	let name = "John Smith";
	let desc = "DEBATER DIN LOTUL NATIONAL";
</script>

<Fullpage>
	<FullpageSection title="Beneficii">
		<TestimonialSection
			{testimonialHeader}
			{testimonialSubheader}
			{firstParagraph}
			{secondParagraph}
			{image}
			{name}
		/>
	</FullpageSection>
	<FullpageSection title="Beneficii">
		<TestimonialRightImageSection paragraph={firstParagraph} {name} {image} {desc} />
	</FullpageSection>
</Fullpage>
