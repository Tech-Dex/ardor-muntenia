<script>
	export let title, description, text, image, author, authorDescription;
</script>

<div class="container">
	<h1>{title}</h1>
	<h3>
		{description}
	</h3>
	<div class="content">
		<h1>“</h1>
		<p>{text}</p>
		<img src={image} alt={author} />
		<div class="author">
			<p>-- {author}</p>
		</div>
		<div class="author-description">
			<p>{authorDescription}</p>
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
		justify-content: center;
		color: var(--color-quaternary);
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
		background-color: var(--color-tertiary);
		margin: 1rem 0 0 0;
	}
	.content h1 {
		font-size: 3rem;
		margin: 0 0 1.5rem 0;
		height: 0.8rem;
	}
	.content p {
		margin: 0.4rem 1rem 0 1rem;
		font-size: 0.8rem;
		white-space: pre-line;
	}
	.content p:last-child {
		padding-top: 0.8rem;
	}

	.content img {
		width: 5rem;
		height: 5rem;
		border-radius: 2.5rem;
		margin-top: 0.5rem;
		object-fit: cover;
	}
	.content .author p {
		font-weight: 700;
		font-size: 0.8rem;
		margin: 0;
		padding: 0;
		color: var(--color-quaternary);
	}

	.content .author-description p {
		font-weight: 100;
		font-size: 0.6rem;
		margin: 0;
		padding: 0;
		color: var(--color-quinary);
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
			margin-top: 3rem;
		}
		.content h1 {
			font-size: 6rem;
			margin: 0 0 3rem 0;
		}
		.content p {
			font-size: 0.8rem;
			margin-top: 0.8rem;
		}
		.content img {
			width: 6rem;
			height: 6rem;
			border-radius: 4rem;
			margin-top: 0.2rem;
		}
		.content .author p {
			font-size: 1.2rem;
		}
		.content .author-description p {
			font-size: 0.8rem;
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
			width: 50rem;
			height: 35rem;
		}
		.content h1 {
			font-size: 5rem;
			margin: 0 0 2rem 0;
		}
		.content p {
			font-size: 1rem;
			letter-spacing: 1px;
			margin-top: 1rem;
		}
		.content img {
			width: 8rem;
			height: 8rem;
			border-radius: 4rem;
		}
		.content .author p {
			font-size: 1.6rem;
		}
		.content .author-description p {
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1440px) {
		.content img {
			width: 12rem;
			height: 12rem;
			border-radius: 6rem;
		}
		.content {
			width: 55rem;
			height: 40rem;
		}

		.content p {
			font-size: 1.2rem;
			letter-spacing: 1px;
			margin-top: 1rem;
		}
	}
</style>
