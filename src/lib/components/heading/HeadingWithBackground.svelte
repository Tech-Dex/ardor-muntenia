<script>
	export let image, title, description;
</script>

<div class="container" style="--image: url({image})">
	<div>
		<h1>{title}</h1>
		<p>{description}</p>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-image: var(--image);
		background-size: cover;
		background-position: center;
		display: flex;
	}
	.container div {
		background-color: var(--color-novenary);
		width: 40rem;
		height: 30rem;
		align-self: flex-end;
		margin-left: 10%;
		text-align: center;
		padding: 2rem;
		border-radius: 1rem;
	}
	.container h1 {
		font-size: 3.2rem;
		letter-spacing: 0.2rem;
		margin: 0;
		color: var(--color-quaternary);
	}
	.container p {
		font-size: 1.4rem;
		line-height: 2.2rem;
		color: var(--color-quinary);
	}
	@media screen and (min-width: 1024px) and (max-width: 1475px) {
		.container div {
			height: 25rem;
			width: 30rem;
		}
		.container h1 {
			font-size: 2.2rem;
		}
		.container p {
			font-size: 1.1rem;
			line-height: 1.8rem;
		}
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.container {
			justify-content: center;
		}
		.container div {
			align-self: flex-end;
			width: 75%;
			height: 20em;
			margin-left: 0;
			margin-bottom: 5%;
		}
		.container p {
			font-size: 1.1rem;
			line-height: 1.6rem;
		}
		.container h1 {
			font-size: 1.8rem;
		}
	}
	@media screen and (max-width: 679px) {
		.container {
			justify-content: center;
		}
		.container div {
			align-self: flex-end;
			width: 75%;
			height: 20em;
			margin-left: 0;
			margin-bottom: 10%;
		}
		.container p {
			font-size: 0.8rem;
			line-height: 1.3rem;
		}
		.container h1 {
			font-size: 1.4rem;
		}
	}
</style>
