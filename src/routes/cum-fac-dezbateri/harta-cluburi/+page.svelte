<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import FullscreenMap from "$lib/components/content/FullscreenMap.svelte";

	export let data;

	let map = data.data.map;
</script>

<Fullpage>
	<FullpageSection title="Harta Cluburilor Ardor Muntenia">
		<FullscreenMap mapSrc={map.link} title={map.title} />
	</FullpageSection>
</Fullpage>
