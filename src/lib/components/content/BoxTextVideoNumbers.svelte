<script>
	export let heading, columns;

	import Icon from "@iconify/svelte";
	import handshake from "@iconify/icons-mdi/handshake-outline";
	import newspaper from "@iconify/icons-mdi/newspaper-variant-multiple";
	import account from "@iconify/icons-mdi/account";
	import trophy from "@iconify/icons-mdi/trophy-variant";

	let icons = {
		newspaper: newspaper,
		account: account,
		trophy: trophy,
		handshake: handshake,
	};
</script>

<div class="container">
	<h5>
		{heading}
	</h5>
	<div class="video-background">
		<embed
			src="https://www.youtube.com/embed/3z37Iy3JvB0"
			wmode="transparent"
			type="video/mp4"
			width="100%"
			height="100%"
			allowfullscreen
			title="Tabăra de leadership pentru profesori și instructori de dezbateri (ediția 2018)"
		/>
	</div>
	<div class="columns">
		{#each columns as content}
			<div class="column">
				<div class="iconify">
					<Icon icon={icons[content.icon]} width="50" />
				</div>
				<div class="texts">
					<h1>{content.count}</h1>
					<p>{content.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.container h5 {
		color: #43403e;
		letter-spacing: 1px;
		line-height: 1.4rem;
		margin: 1rem;
	}
	.columns {
		width: 100%;
		height: 50%;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.column {
		padding: 0.5rem 1rem;
		margin: 1rem;
		display: flex;
		align-items: center;
		border-bottom: 1px solid black;
	}
	.texts h1 {
		margin: 0;
		font-size: 2rem;
		color: var(--color-secondary);
	}
	.texts p {
		margin: 0.2rem 0;
		font-size: 0.8rem;
		letter-spacing: 2px;
		color: #43403e;
	}
	.iconify {
		color: var(--color-septenary);
	}
	.video-background {
		display: none;
	}
	@media screen and (min-width: 680px) {
		.container h5 {
			font-size: 1.2rem;
			line-height: 2rem;
		}
		.video-background {
			display: block;
			width: 80%;
			height: 30vh;
		}
		.columns {
			margin-top: 1rem;
			width: 90%;
			height: 30%;
		}
		.texts {
			margin-left: 2rem;
		}
		.texts h1 {
			font-size: 2.4rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.columns {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.video-background {
			display: block;
			width: 50%;
			height: 40vh;
			margin-top: 2rem;
		}
		.texts {
			margin-left: 1rem;
		}
		.texts h1 {
			font-size: 3rem;
		}
		.texts p {
			font-size: 1.2rem;
		}
		.container h5 {
			font-size: 1.4rem;
			line-height: 2.4rem;
			padding: 0 4rem;
		}
	}
</style>
