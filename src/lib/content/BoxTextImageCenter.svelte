<script>
	export let subHeadingText, headingText, headingImageUrl;
</script>

<div class="container">
	<div class="content">
		<h1>{headingText}</h1>
		<h3>{subHeadingText}</h3>
	</div>
	<img src={headingImageUrl} alt="Beautiful people" />
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
		width: 15em;
		height: 30%;
		object-fit: contain;
	}
	.content {
		background-color: #3b4048;
		width: 18em;
		height: 14em;
		text-align: center;
		color: #fff;
		padding: 1em;
		margin-top: 1em;
	}
	h3 {
		font-size: 0.6rem;
	}
	h1 {
		font-size: 1.6rem;
		margin: 0;
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.content {
			width: 70%;
		}
		.container img {
			width: 50%;
			height: 15em;
		}
		h3 {
			font-size: 0.8rem;
			letter-spacing: 1px;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
		.content {
			width: 30em;
			height: 25em;
		}
		.container img {
			width: 30em;
			height: 20em;
		}
		h3 {
			font-size: 1rem;
			letter-spacing: 1px;
		}
		h1 {
			font-size: 2.4rem;
			margin: 0.5em 0 0 0;
		}
	}
</style>
