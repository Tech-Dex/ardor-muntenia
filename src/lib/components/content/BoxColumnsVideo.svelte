<script>
	export let beneficiiColumns;
	import Icon from "@iconify/svelte";
	import messageProcessing from "@iconify/icons-mdi/message-processing";
	import cardsHeart from "@iconify/icons-mdi/cards-heart";
	import camera from "@iconify/icons-mdi/camera";
	import headphones from "@iconify/icons-mdi/headphones";

	let icons = {
		messageProcessing: messageProcessing,
		cardsHeart: cardsHeart,
		camera: camera,
		headphones: headphones,
	};
	console.log(beneficiiColumns);
</script>

<div class="container">
	<h1>THE THINGS WE DO BEST</h1>
	<div class="columns">
		{#each beneficiiColumns as content}
			<div class="column">
				<div class="iconify">
					<Icon icon={icons[content.icon]} width="50" color="#fff" />
				</div>
				<h3>{content.title}</h3>
				<p>{content.description}</p>
			</div>
		{/each}
	</div>

	<iframe
		class="video"
		src="https://www.youtube.com/embed/3z37Iy3JvB0?autoplay=1&mute=1&controls=0&rel=0"
		title="Tabăra de leadership pentru profesori și instructori de dezbateri (ediția 2018)"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-color: #51b4c0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.columns {
		width: 100%;
		height: 100%;
		color: #fff;
		display: grid;
		text-align: center;
		grid-template-columns: 1fr 1fr;
	}
	.column h3 {
		font-size: 1.4rem;
		margin: 0.6rem;
	}
	.column p {
		margin: 0.4rem;
		font-size: 1rem;
	}
	.video {
		display: none;
	}
	.container h1 {
		color: var(--color-secondary);
		font-size: 2rem;
		text-align: center;
		margin: 2rem;
	}
	@media screen and (min-width: 680px) {
		.container {
			position: relative;
		}
		.video {
			display: block;
			height: 50%;
			width: 100%;
			pointer-events: none;
		}
		.columns {
			display: flex;
			height: 40%;
			width: 95%;
			margin-bottom: 1rem;
		}
		.iconify {
			margin: 1rem 1.2rem;
		}
		.column h3 {
			font-size: 1.4rem;
			margin: 1rem;
			letter-spacing: 1px;
		}
		.column p {
			letter-spacing: 1px;
		}
	}
	@media screen and (min-width: 1024px) {
		.container h1 {
			font-size: 2.6rem;
		}
		.columns {
			height: 50%;
			width: 90%;
		}
		.column {
			margin: 0 2rem;
		}
		.column p {
			font-size: 1.2rem;
		}
		.column h3 {
			font-size: 1.8rem;
		}
	}
	@media screen and (min-width: 1440px) {
		.columns {
			width: 80%;
		}
		.column p {
			font-size: 1.4rem;
		}
		.column h3 {
			font-size: 2rem;
		}
	}
</style>
