<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import Quadrate from "$lib/content/Quadrate.svelte";
	import castleIcon from "@iconify/icons-mdi/castle";
	import accountStudent from "@iconify/icons-mdi/account-student";
	import FullMap from "$lib/content/FullMap.svelte";

	let topLeftBackgroundImage = "/images/495-1920x1080.webp";
	let bottomRightBackgroundImage = "/images/939-1920x1080.webp";
	let topRightHeading = "Clubul";
	let topRightText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem.";
	let bottomLeftHeading = "Clubul 2";
	let bottomLeftText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem.";
	let iframeSrcGoogleMap =
		"https://www.google.com/maps/d/u/0/embed?mid=1HcJp1Uk-EMvLC_d89fTBsutX9kzQWZuR";
	let iframeTitleGoogleMap = "Harta clubului";
	let mapBackgroundColor = "#1fa2a3";
</script>

<Fullpage>
	<FullpageSection title="Clubul">
		<Quadrate
			{topLeftBackgroundImage}
			{bottomRightBackgroundImage}
			topRightIcon={castleIcon}
			{topRightHeading}
			{topRightText}
			bottomLeftIcon={accountStudent}
			{bottomLeftHeading}
			{bottomLeftText}
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
