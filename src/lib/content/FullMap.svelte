<script>
	export let mapSrc,
		title = "Google Map",
		backgroundColor;
</script>

<div class="container" style="--backgroundColor: {backgroundColor};">
	<iframe
		src={mapSrc}
		{title}
		loading="lazy"
		allowfullscreen
		referrerpolicy="no-referrer-when-downgrade"
	/>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--backgroundColor);
	}

	.container iframe {
		width: 80%;
		height: 80%;
		border: 0;
	}
</style>
