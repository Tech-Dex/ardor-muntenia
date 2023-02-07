<script>
	export let data;
</script>

<div class="container">
	{#each data as item}
		<div class="testimonial">
			<img src={item.imageUrl} alt={item.name} />
			<div>
				<h1>{item.name}</h1>
				<h3>{item.role}</h3>
				<p>{item.description}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-color: var(--color-aqua);
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
	}
	.testimonial {
		width: 85%;
		height: 30%;
		background-color: var(--color-secondary);
		margin: 0.5em 0 0 0;
		padding: 0 1em;
		display: flex;
		align-items: center;
	}
	.testimonial img {
		width: 6rem;
		height: 6rem;
		border-radius: 3rem;
	}
	.testimonial div {
		margin-left: 1rem;
	}
	.testimonial div h1 {
		margin: 0.5rem 0 0 0;
		font-size: 1.2rem;
	}
	.testimonial div h3 {
		color: var(--color-quinary);
		margin: 0;
		font-size: 0.8rem;
	}
	.testimonial div p {
		margin: 0;
		font-size: 0.7rem;
		font-weight: 500;
	}
	@media screen and (min-width: 680px) and (max-width: 1024px) {
		.container {
			flex-direction: row;
		}
		.testimonial {
			flex-direction: column;
			text-align: center;
			height: 60%;
			min-height: 32em;
			width: 100%;
			margin: 0 0.5rem;
		}
		.testimonial img {
			width: 8rem;
			height: 8rem;
			border-radius: 4rem;
			margin: 1rem 0;
		}
		.testimonial div h1 {
			font-size: 1.6rem;
		}
		.testimonial div h3 {
			font-size: 1.2rem;
		}
		.testimonial div p {
			margin-top: 0.5rem;
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
			padding: 0 4rem;
		}
		.testimonial {
			flex-direction: column;
			text-align: center;
			height: 60%;
			min-height: 32em;
			width: 100%;
			margin: 0 0.5rem;
		}
		.testimonial img {
			width: 10rem;
			height: 10rem;
			border-radius: 5rem;
			margin: 1rem 0;
		}
		.testimonial div h1 {
			font-size: 1.6rem;
		}
		.testimonial div h3 {
			font-size: 1.2rem;
		}
		.testimonial div p {
			margin-top: 0.5rem;
			font-size: 1rem;
			letter-spacing: 1px;
		}
	}
	@media screen and (min-width: 1440px) {
		.container {
			padding: 0 6rem;
		}
		.testimonial div h1 {
			font-size: 1.8rem;
		}
		.testimonial div h3 {
			font-size: 1.4rem;
		}

		.testimonial div p {
			font-size: 1.2rem;
			letter-spacing: 1px;
		}
	}
</style>
