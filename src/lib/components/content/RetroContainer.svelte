<script>
	export let backgroundImage, heading, columns;
	import Icon from "@iconify/svelte";
	import calendar from "@iconify/icons-mdi/calendar-month";
	import card from "@iconify/icons-mdi/credit-card-settings-outline";
	import notebook from "@iconify/icons-mdi/notebook";
	import headphones from "@iconify/icons-mdi/headphones";

	let icons = {
		calendar: calendar,
		card: card,
		notebook: notebook,
		headphones: headphones,
	};
</script>

<div class="container" style="--image: url({backgroundImage});">
	<h1>"{heading}"</h1>
	<div class="columns">
		{#each columns as column}
			<div class="column">
				<div class="iconify">
					<Icon icon={icons[column.icon]} width="100%" />
				</div>
				<div class="texts">
					<a href={column.link}><h3>{column.heading}</h3></a>
					<p>
						{column.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-image: var(--image);
		background-size: cover;
		background-position: center;
		box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.55);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h1 {
		text-align: center;
		color: #fff;
		font-size: 1.6rem;
		margin: 0.2rem 0.4rem;
	}
	.columns {
		margin-top: 1rem;
	}
	.column .iconify {
		width: 2.8rem;
		height: 2.8rem;
		padding: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;

		border: 2px solid #fff;
		border-radius: 50%;
	}
	.column {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		margin: 1rem;
	}
	.column .texts {
		width: 75%;
		margin: 0 0.4rem;
	}
	.column h3 {
		font-size: 1.4rem;
		margin: 0.2rem;
	}
	.column p {
		margin: 0.2rem;
		letter-spacing: 2px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.texts a {
		text-decoration: none;
		color: #fff;
		cursor: pointer;
	}
	@media screen and (min-width: 680px) {
		h1 {
			font-size: 3rem;
			margin: 0 3rem;
		}
		.column {
			flex-direction: column;
			text-align: center;
			justify-content: flex-start;
		}
		.column .iconify {
			width: 2rem;
			height: 2rem;
			padding: 0.4rem;
		}
		.column h3 {
			font-size: 1.8rem;
			margin: 1rem;
		}
		.column p {
			margin: 0.6rem;
			letter-spacing: 2px;
			font-size: 1.2rem;
			font-weight: 600;
			line-height: 1.4rem;
		}
		.column .texts {
			width: 100%;
		}
		.columns {
			display: flex;
		}
	}
	@media screen and (min-width: 1024px) {
		h1 {
			margin: 4rem;
		}
		.columns {
			margin: 0 4rem;
		}
		.column h3 {
			font-size: 2.4rem;
			margin: 1rem;
		}
		.column p {
			margin: 0.6rem;
			letter-spacing: 2px;
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}
	@media screen and (min-width: 1440px) {
		.columns {
			margin: 0 8rem;
		}
	}
</style>
