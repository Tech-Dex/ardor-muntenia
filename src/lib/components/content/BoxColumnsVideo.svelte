<script>
	import Icon from "@iconify/svelte";
	import messageProcessing from "@iconify/icons-mdi/message-processing";
	import cardsHeart from "@iconify/icons-mdi/cards-heart";
	import camera from "@iconify/icons-mdi/camera";
	import headphones from "@iconify/icons-mdi/headphones";

	export let beneficiiColumns, video;

	let icons = {
		messageProcessing: messageProcessing,
		cardsHeart: cardsHeart,
		camera: camera,
		headphones: headphones,
	};
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
	<div class="video-background">
		<embed
			src="{video}?autohide=1&autoplay=1&mute=1"
			wmode="transparent"
			type="video/mp4"
			width="100%"
			height="100%"
			allow="autoplay; encrypted-media; picture-in-picture"
			allowfullscreen
			title="Tabăra de leadership pentru profesori și instructori de dezbateri (ediția 2018)"
		/>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-color: var(--color-octonary);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.video-background {
		position: relative;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
	}

	.video-background embed {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100vw;
		height: 100vh;
		transform: translate(-50%, -50%);
	}

	@media (min-aspect-ratio: 16/9) {
		.video-background embed {
			height: 56.25vw;
		}
	}

	@media (max-aspect-ratio: 16/9) {
		.video-background embed {
			width: 177.78vh;
		}
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

	.container h1 {
		color: var(--color-secondary);
		font-size: 2rem;
		text-align: center;
		font-weight: 800;
		margin: 2rem;
	}

	@media screen and (min-width: 680px) {
		.container {
			position: relative;
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
