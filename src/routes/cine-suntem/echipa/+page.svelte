<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import TeamContainer from "$lib/components/content/TeamContainer.svelte";
	export let data;

	let heading = data.data.heading;
	let members = data.data.members;
</script>

<Fullpage>
	<FullpageSection title="Echipa">
		<TeamContainer {heading} members={[members[0], members[1]]} />
	</FullpageSection>
	<FullpageSection title="Echipa">
		<TeamContainer members={[members[2], members[3]]} />
	</FullpageSection>
	<FullpageSection title="Echipa">
		<TeamContainer members={[members[4], members[5]]} />
	</FullpageSection>
	<FullpageSection title="Echipa">
		<TeamContainer members={[members[6], members[7]]} />
	</FullpageSection>
	<FullpageSection title="Echipa">
		<TeamContainer members={[members[8], members[9]]} />
	</FullpageSection>
</Fullpage>
