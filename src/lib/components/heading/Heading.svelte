<script>
	export let image, title, description, callToActionText, callToActionLink;
</script>

<div class="container" style="--headingImageUrl: url({image})">
	<div>
		<h1>{title}</h1>
		<hr />
		<h2>{description}</h2>
		{#if callToActionText && callToActionLink}
			<a href={callToActionLink}>{callToActionText}</a>
		{/if}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-image: var(--headingImageUrl);
		box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.85);
		background-size: cover;
		background-position: center;
	}

	.container div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
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
	}

	hr {
		width: 50%;
		border: 1px solid var(--color-primary);
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
	}

	a:hover {
		background-color: var(--color-primary);
		color: var(--color-quaternary);
	}
</style>
