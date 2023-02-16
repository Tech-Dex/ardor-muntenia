<script>
	export let mapSrc,
		title = "Google Map";
</script>

<div class="container">
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
	}

	.container iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
