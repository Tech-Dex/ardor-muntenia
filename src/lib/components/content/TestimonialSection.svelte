<script>
	export let testimonialHeader, testimonialSubheader, firstParagraph, secondParagraph, image, name;
</script>

<div class="container">
	<h1>{testimonialHeader}</h1>
	<h3>
		{testimonialSubheader}
	</h3>
	<div class="content">
		<h1>“</h1>
		<p>
			{firstParagraph}
		</p>
		<p>
			{secondParagraph}
		</p>
		<img src={image} alt="Elev" />
		<div class="name">
			<p>-- {name}</p>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background: var(--color-novenary);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		color: #fff;
	}
	.container h1 {
		font-size: 1.6rem;
		margin: 0.5rem 0 0 0;
	}
	.container h3 {
		margin: 0.5rem 1rem 0 1rem;
		font-size: 0.8rem;
		font-style: italic;
	}
	.content {
		width: 100%;
		height: 68%;
		background-color: #3b4048;
		margin: 1em 0 0 0;
	}
	.content h1 {
		font-size: 3rem;
		margin: 0;
		height: 0.8em;
	}
	.content p {
		margin: 0.4em 1em 0 1em;
		font-size: 0.8rem;
	}
	.content p:last-child {
		padding-top: 0.8em;
	}

	.content img {
		width: 5em;
		height: 5em;
		border-radius: 2.5em;
		margin-top: 0.5em;
		object-fit: cover;
	}
	.content .name p {
		font-weight: 700;
		font-size: 0.8rem;
		margin: 0;
		padding: 0;
		color: gray;
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.container h1 {
			font-size: 3rem;
		}
		.container h3 {
			font-size: 1.2rem;
		}
		.content {
			height: 60%;
			margin-top: 3em;
		}
		.content h1 {
			font-size: 6rem;
		}
		.content p {
			font-size: 1rem;
			margin-top: 0.8rem;
		}
		.content img {
			width: 6rem;
			height: 6rem;
			border-radius: 4rem;
			margin-top: 0.2rem;
		}
		.content .name p {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.container h1 {
			font-size: 3rem;
		}
		.container h3 {
			font-size: 1.4rem;
		}
		.content {
			width: 50em;
			height: 35em;
		}
		.content h1 {
			font-size: 5rem;
		}
		.content p {
			font-size: 1.2rem;
			letter-spacing: 1px;
			margin-top: 1rem;
		}
		.content img {
			width: 8rem;
			height: 8rem;
			border-radius: 4rem;
		}
		.content .name p {
			font-size: 1.6rem;
		}
	}
	@media screen and (min-width: 1440px) {
		.content img {
			width: 12rem;
			height: 12rem;
			border-radius: 6rem;
		}
		.content {
			width: 55em;
			height: 40em;
		}
	}
</style>
