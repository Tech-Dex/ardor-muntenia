<script>
	export let paragraph, image, name, desc;
</script>

<div class="container">
	<div class="image-container">
		<img src={image} alt={name} />
		<p>{name}</p>
		<p>{desc}</p>
	</div>
	<div class="paragraph">
		<h1>“</h1>
		<p>
			{paragraph}
		</p>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		color: var(--color-secondary);
		background-color: #e7aa6b;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: space-evenly;
		flex-direction: column-reverse;
	}
	.image-container {
		width: 100%;
		height: 40%;
		background: var(--color-background);
		color: #e7aa6b;
	}
	.image-container p {
		margin: 0;
		letter-spacing: 1px;
	}
	.image-container img {
		width: 6rem;
		height: 6rem;
		border-radius: 3rem;
		margin-top: 1rem;
	}
	.paragraph {
		margin: 0 1em 0 1em;
		height: 60%;
	}
	.paragraph h1 {
		font-size: 3rem;
		margin: 0;
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.image-container img {
			width: 12rem;
			height: 12rem;
			border-radius: 6rem;
		}
		.image-container p {
			margin-top: 1rem;
			font-size: 1.2rem;
		}
		.paragraph p {
			font-size: 1.6rem;
			letter-spacing: 2px;
			margin: 0 2rem 0 2rem;
		}
		.paragraph h1 {
			font-size: 4rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
		}
		.image-container {
			height: 80%;
			width: 150%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.image-container img {
			width: 15rem;
			height: 15rem;
			border-radius: 0;
			margin-bottom: 3rem;
		}
		.paragraph {
			width: 200%;
			align-self: start;
		}
		.paragraph h1 {
			margin-top: 6rem;
		}
		.paragraph p {
			font-size: 1.8rem;
		}
	}
	@media screen and (min-width: 1440px) {
		.image-container img {
			width: 20rem;
			height: 20rem;
		}
		.image-container p {
			font-size: 1.6rem;
		}
		.paragraph p {
			line-height: 1.4em;
			font-size: 2rem;
		}
	}
</style>
