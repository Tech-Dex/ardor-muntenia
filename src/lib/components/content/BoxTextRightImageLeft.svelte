<script>
	export let backgroundColor,
		textColor,
		title,
		description,
		callToActionText,
		callToActionUrl,
		boxColor,
		imageUrl,
		imageAlt;
</script>

<div
	class="container"
	style="--backgroundColor: {backgroundColor}; --textColor: {textColor}; --boxColor: {boxColor};"
>
	<div>
		<img src={imageUrl} alt={imageAlt} />
	</div>

	<div>
		<h1>{title}</h1>
		<div class="box-subheading">
			<h2>{description}</h2>
			{#if callToActionText && callToActionUrl}
				<a href={callToActionUrl}>{callToActionText}</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-color: var(--backgroundColor);
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: row;
	}

	.container > div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.container > div:last-child {
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.container > div:last-child > .box-subheading {
		height: 80%;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--boxColor);
	}

	.container > div:last-child > h1 {
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		color: var(--boxColor);
		height: 20%;
	}

	.container > div:last-child .box-subheading > h2 {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: justify;
		padding: 0 2rem 0 2rem;
		color: var(--textColor);
	}

	.container > div:last-child > .box-subheading > a {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: justify;
		text-decoration: none;
		color: var(--boxColor);
		background-color: var(--color-quaternary);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.container > div:last-child > .box-subheading > a:hover {
		background-color: var(--color-primary);
		color: var(--textColor);
	}

	.container > div:first-child {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 2rem;
	}

	.container > div:first-child > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.container {
			flex-direction: column-reverse;
		}
		.container > div:last-child .box-subheading > h2 {
			text-align: center;
		}
		.container > div:last-child > .box-subheading > a {
			margin-bottom: 1rem;
		}
		.container > div:first-child > img {
			object-fit: cover;
		}
		.container > div:first-child {
			padding: 0;
			height: 40%;
		}
		.container > div:last-child {
			padding: 0;
		}
		.container > div:last-child > .box-subheading {
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 680px) {
		.container {
			flex-direction: column-reverse;
		}
		.container > div:last-child > h1 {
			font-size: 1.2rem;
			height: 20%;
			margin-top: 2rem;
		}
		.container > div:last-child > .box-subheading > a {
			padding: 0.4rem 0.6rem;
			font-size: 1.2rem;
		}
		.container > div:last-child .box-subheading > h2 {
			text-align: center;
			font-size: 0.8rem;
		}
		.container > div:first-child > img {
			object-fit: cover;
		}
		.container > div:first-child {
			padding: 0;
			height: 40%;
		}
		.container > div:last-child {
			padding: 0;
		}
		.container > div:last-child > .box-subheading {
			margin-bottom: 0;
		}
	}
</style>
