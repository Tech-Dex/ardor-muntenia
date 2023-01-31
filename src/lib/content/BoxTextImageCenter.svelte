<script>
	import HeadingWithBackground from "../headings/HeadingWithBackground.svelte";

	export let subHeadingText, headingText, headingImageUrl;
</script>

<div class="container">
	<img src={headingImageUrl} alt="Beautiful people" />
	<HeadingWithBackground {headingText} {subHeadingText} headingImageUrl="" />
</div>

<style>
	.container {
		width: 100%;
		height: 70%;
		background-color: #e7aa6b;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.container img {
		width: 20em;
		height: 20em;
		object-fit: contain;
		margin-top: 2.1em;
		border-radius: 1em;
	}
	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
</style>
