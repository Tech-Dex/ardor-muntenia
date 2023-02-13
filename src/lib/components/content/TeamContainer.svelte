<script>
	import TeamContainerColumn from "./TeamContainerColumn.svelte";

	export let heading, members;
</script>

<div class="container">
	{#if heading}
		<h1>{heading}</h1>
	{/if}
	<div class={heading ? "columns" : "columns-no-heading"}>
		<TeamContainerColumn member={members[0]} />
		<TeamContainerColumn member={members[1]} />
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
	}
	.container h1 {
		text-align: center;
		margin: 0.6rem;
		font-size: 1.2rem;
	}
	.columns {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.columns-no-heading {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	@media screen and (min-width: 680px) {
		.container h1 {
			font-size: 2.4rem;
			margin: 2rem;
		}
		.columns {
			flex-direction: row;
			height: 50%;
		}
		.columns-no-heading {
			flex-direction: row;
			margin-top: 2rem;
			height: 50%;
		}
	}
	@media screen and (min-width: 1024px) {
		.columns-no-heading {
			margin-top: 2rem;
		}
	}
</style>
