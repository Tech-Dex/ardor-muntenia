<script>
	import Icon from "@iconify/svelte";
	export let title, description, image, icon;
</script>

<div class="container">
	<div class="content">
		{#if icon}
			<div class="iconify">
				<Icon {icon} width="60" color="var(--color-primary)" />
			</div>
		{/if}
		<h1>{title}</h1>
		<h3>{description}</h3>
	</div>
	<img src={image} alt={title} />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem 0 0 0;
		text-align: center;
		color: var(--color-secondary);
	}
	.content {
		width: 100%;
		height: 40%;
	}
	.content h1 {
		font-size: 1.2rem;
		margin: 0.4rem 0 0 0;
	}
	.content h3 {
		font-size: 0.9rem;
		margin: 0.8rem 1rem 0 1rem;
		letter-spacing: 1px;
	}
	img {
		width: 100%;
		height: 60%;
		object-fit: cover;
	}
	@media screen and (min-width: 680px) {
		.content h1 {
			font-size: 2rem;
			margin: 1rem 0 0 0;
		}
		.content h3 {
			font-size: 1rem;
			margin: 0.8rem 1rem 0 1rem;
			letter-spacing: 1px;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
			padding: 0 2rem 0 2rem;
			align-items: flex-start;
		}
		.iconify {
			margin-top: 6rem;
		}
		img {
			height: 80%;
			object-fit: contain;
			align-self: center;
		}
		.content h1 {
			font-size: 2.4rem;
			margin: 2rem 2rem 2rem 0;
		}
		.content h3 {
			font-size: 1.2rem;
			margin-bottom: 4rem;
		}
	}
	@media screen and (min-width: 1440px) {
		.container {
			padding: 0 4rem 0 4rem;
		}
		.content h1 {
			font-size: 2.4rem;
			margin: 2rem 2rem 2rem 0;
		}
		.content h3 {
			font-size: 1.4rem;
			margin-bottom: 4rem;
		}
	}
</style>
