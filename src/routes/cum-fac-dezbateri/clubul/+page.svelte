<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextIconImageCenter from "$lib/components/content/BoxTextIconImageCenter.svelte";
	import Quadrate from "$lib/components/content/Quadrate.svelte";
	import Heading from "$lib/components/heading/Heading.svelte";
	import castleIcon from "@iconify/icons-mdi/castle";
	import accountStudent from "@iconify/icons-mdi/account-student";
	import FullMap from "$lib/components/content/FullMap.svelte";

	export let data;

	let heading = data.data.heading;
	let heading_2 = data.data.heading_2;
	let content = data.data.content;

	let iframeSrcGoogleMap =
		"https://www.google.com/maps/d/u/0/embed?mid=1HcJp1Uk-EMvLC_d89fTBsutX9kzQWZuR";
	let iframeTitleGoogleMap = "Harta clubului";
	let mapBackgroundColor = "#1fa2a3";
</script>

<Fullpage>
	<FullpageSection title="Ce sunt dezbaterile?">
		<Heading
			headingImageUrl={heading.image}
			headingText={heading.title}
			subHeadingText={heading.description}
			callToActionText="Contact"
			callToActionUrl="/contact"
		/>
	</FullpageSection>
	<FullpageSection title="Clubul">
		<Quadrate
			topLeftBackgroundImage={content[0].image}
			bottomRightBackgroundImage={content[1].image}
			topRightIcon={castleIcon}
			topRightHeading={content[0].title}
			topRightText={content[0].description}
			bottomLeftIcon={accountStudent}
			bottomLeftHeading={content[1].title}
			bottomLeftText={content[1].description}
		/>
	</FullpageSection>
	<FullpageSection title="Clubul">
		<BoxTextIconImageCenter
			icon={accountStudent}
			backgroundColor={heading_2.boxColor}
			title={heading_2.title}
			description={heading_2.description}
			image={heading_2.image}
		/>
	</FullpageSection>
	<FullpageSection title="Harta">
		<FullMap
			mapSrc={iframeSrcGoogleMap}
			title={iframeTitleGoogleMap}
			backgroundColor={mapBackgroundColor}
		/>
	</FullpageSection>
</Fullpage>
