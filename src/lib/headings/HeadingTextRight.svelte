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
		height: 60%;
		width: 60%;
		margin-top: 10%;
		margin-left: 10%;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--color-quaternary);
	}

	.container div:first-child {
		background-color: transparent;
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
		text-align: center;
	}

	h2 {
		font-size: 1.5rem;
		color: var(--color-primary);
		text-shadow: 0 0 10px var(--color-secondary);
		margin-left: 5%;
	}

	a {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 2rem;
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
</style>
