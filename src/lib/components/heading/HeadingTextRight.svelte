<script>
	export let headingImageUrl,
		headingText,
		subHeadingText,
		callToActionText,
		callToActionUrl,
		videoUrl;
</script>

<div class="container" style="--headingImageUrl: url({headingImageUrl})">
	<div>
		{#if videoUrl}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video preload controls>
				<source src={videoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		{/if}
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
		background-image: var(--headingImageUrl);
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: row;
	}

	.container div {
		height: 65%;
		width: 65%;
		margin-top: 5%;
		margin-left: 10%;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--color-quaternary);
		padding: 1rem;
		border-radius: 1rem;
	}

	.container div:first-child {
		background-color: transparent;
		align-self: center;
	}
	.container div:last-child {
		margin-right: 10%;
	}

	.container div video {
		width: 100%;
	}

	h1 {
		font-size: 3rem;
		color: var(--color-primary);
		text-shadow: 0 0 10px var(--color-secondary);
		margin-left: 5%;
	}

	h2 {
		font-size: 1.5rem;
		color: var(--color-primary);
		text-shadow: 0 0 10px var(--color-secondary);
		margin-left: 5%;
	}

	a {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
		color: var(--color-primary);
		text-decoration: none;
		font-size: 1.5rem;
		transition: all 0.2s ease-in-out;
		background-color: var(--color-quaternary);
		margin-left: 5%;
	}

	a:hover {
		background-color: var(--color-primary);
		color: var(--color-quaternary);
	}
	@media screen and (min-width: 1450px) and (max-width: 1700px) {
		.container div {
			height: 75%;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1450px) {
		.container div {
			height: 75%;
		}
		h1 {
			font-size: 2.4rem;
		}
		h2 {
			font-size: 1.3rem;
		}
	}

	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.container {
			flex-direction: column;
		}
		.container div {
			width: 80%;
			height: 80%;
			border-radius: 2rem;
			display: flex;
			flex-direction: column;
			align-self: center;
			margin-left: 0;
			margin-top: 3%;
		}
		.container div:nth-child(2) {
			margin-right: 0;
			margin-top: 5%;
			margin-bottom: 5%;
		}

		h1 {
			font-size: 2rem;
			text-align: center;
		}
		h2 {
			font-size: 1rem;
			text-align: center;
			margin-right: 5%;
		}
		a {
			align-self: center;
			margin-left: 0;
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 679px) {
		.container {
			flex-direction: column;
		}
		.container div {
			width: 80%;
			height: 80%;
			border-radius: 2rem;
			display: flex;
			flex-direction: column;
			align-self: center;
			margin-left: 0;
			padding: 1rem;
		}
		.container div:nth-child(2) {
			margin-right: 0;
			margin-top: 0;
			margin-bottom: 5%;
		}
		a {
			align-self: center;
			margin-left: 0;
			font-size: 1rem;
		}
		h1 {
			font-size: 1.5rem;
			text-align: center;
		}
		h2 {
			font-size: 0.8rem;
			text-align: center;
			margin-right: 5%;
		}
	}
</style>
