<script>
	export let title, description, image, backgroundColor;
</script>

<div class="container" style="--backgroundColor: {backgroundColor};">
	<div class="content">
		<h1>{title}</h1>
		<h3>{description}</h3>
	</div>
	<img loading="lazy" src={image} alt="Beautiful people" />
</div>

<style>
	.container {
		width: 100%;
		height: 70%;
		background-color: var(--backgroundColor);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.container img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.content {
		background-color: var(--color-novenary);
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	h3 {
		font-size: 0.7rem;
		font-weight: 300;
		padding: 0 1rem;
		text-align: center;
	}

	h1 {
		font-size: 1.6rem;
		font-weight: 700;
		margin: 0;
	}

	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.content {
			width: 70%;
		}

		.container img {
			width: 100%;
			height: 50%;
		}

		h3 {
			font-size: 0.8rem;
			letter-spacing: 1px;
		}
	}

	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		.content {
			width: 30rem;
			height: 20rem;
		}

		.container img {
			width: 30rem;
			height: 20rem;
		}

		h3 {
			font-size: 1.2rem;
			letter-spacing: 1px;
		}

		h1 {
			font-size: 2.4rem;

			margin: 0.5rem 0 0 0;
		}
	}
</style>
