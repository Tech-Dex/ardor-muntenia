<script>
	export let backgroundColor,
		headingText,
		headingTextColor,
		subHeadingText,
		subHeadingTextColor,
		callToActionText,
		callToActionUrl,
		imageUrl,
		imageAlt;
</script>

<div
	class="container"
	style="--backgroundColor: {backgroundColor}; --headingTextColor: {headingTextColor}; --subHeadingTextColor: {subHeadingTextColor}"
>
	<div>
		<img src={imageUrl} alt={imageAlt} />
	</div>

	<div>
		<h1>{headingText}</h1>
		<h2>{subHeadingText}</h2>
		{#if callToActionText && callToActionUrl}
			<a href={callToActionUrl}>{callToActionText}</a>
		{/if}
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
	}

	.container > div:last-child > h1 {
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		color: var(--headingTextColor);
	}

	.container > div:last-child > h2 {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: center;
		color: var(--subHeadingTextColor);
	}

	.container > div:last-child > a {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: center;
		text-decoration: none;
		color: var(--color-quaternary);
		background-color: var(--color-secondary);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.container > div:last-child > a:hover {
		background-color: var(--color-primary);
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
		.container > div:last-child {
			padding: 0;
		}
		.container > div:first-child {
			padding: 0;
			height: 50%;
		}

		.container > div:last-child > a {
			margin-bottom: 1rem;
		}
		.container > div:first-child > img {
			height: 100%;
			object-fit: cover;
		}
	}
	@media screen and (max-width: 680px) {
		.container {
			flex-direction: column-reverse;
		}
		.container > div:last-child {
			padding: 0;
		}
		.container > div:first-child {
			padding: 0;
			height: 50%;
		}

		.container > div:last-child > a {
			margin-bottom: 1rem;
		}
		.container > div:first-child > img {
			height: 100%;
			object-fit: cover;
		}
		.container > div:last-child > h1 {
			font-size: 2rem;
			margin: 0;
		}

		.container > div:last-child > h2 {
			font-size: 1.2rem;
		}

		.container > div:last-child > a {
			font-size: 1rem;
			padding: 0.4rem 1rem;
			border-radius: 0.5rem;
			margin-top: 1rem;
		}
	}
</style>
