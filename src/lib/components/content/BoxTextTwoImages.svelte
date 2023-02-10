<script>
	export let imageOneUrl, imageTwoUrl, titleOne, titleTwo, descOne, descTwo;
</script>

<div class="container">
	<div class="content">
		<div>
			<h1>{titleOne}</h1>
			<p>{descOne}</p>
		</div>
		<img loading="lazy" src={imageOneUrl} alt={titleOne} />
		<img loading="lazy" src={imageTwoUrl} alt={titleTwo} />
		<div>
			<h1>{titleTwo}</h1>
			<p>{descTwo}</p>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-self: center;
		text-align: center;
		margin-top: 1rem;
	}
	.content div {
		background-color: gainsboro;
		padding: 1rem 1rem 0 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		justify-self: center;
		object-fit: cover;
	}
	h1 {
		font-size: 1rem;
		margin: 0.2rem 0 0 0;
		color: #283138;
	}
	p {
		font-size: 0.65rem;
		font-weight: bold;
		letter-spacing: 0.5px;
		color: #283138;
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.content {
			margin: 0;
			width: 70%;
			height: 70%;
		}
		.container {
			padding-top: 2rem;
		}
		p {
			font-size: 0.9rem;
			letter-spacing: 1px;
		}
		h1 {
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.content {
			width: 40rem;
			height: 40%;
		}
		.container {
			padding-top: 2rem;
		}
		p {
			font-size: 1rem;
		}
		h1 {
			font-size: 2.4rem;
		}
	}
	@media screen and (min-width: 1980px) {
		.content {
			width: 40%;
		}
		p {
			font-size: 1.4rem;
		}
		h1 {
			font-size: 2.6rem;
		}
	}
</style>
