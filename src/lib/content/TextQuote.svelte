<script>
	export let bgColor, textColor, quote;
</script>

<div class="container" style="--bgColor: {bgColor}; --textColor: {textColor};">
	<h1>
		{quote}
	</h1>
	<div class="line" />
</div>

<style>
	.container {
		width: 100%;
		height: 30%;
		background-color: var(--bgColor);
		display: flex;
		flex-direction: column;
	}
	h1 {
		color: var(--textColor);
		text-align: start;
		font-size: 2rem;
		margin: 2rem 2rem 0.5rem 2rem;
		letter-spacing: 1px;
	}
	.line {
		width: 20%;
		height: 1rem;
		background-color: #fff;
		margin-right: 2rem;
		margin-left: 2rem;
	}

	@media screen and (min-width: 1330px) {
		h1 {
			font-size: 2.4rem;
		}
	}

	@media screen and (min-width: 680px) and (max-width: 1023px) {
		h1 {
			font-size: 1.4rem;
			margin: 2rem 2rem 0.5rem 2rem;
			text-align: center;
		}
		.line {
			align-self: center;
			width: 40%;
		}
	}

	@media screen and (max-width: 679px) {
		h1 {
			font-size: 1rem;
			margin: 1rem 1rem 0.5rem 1rem;
			text-align: center;
		}
		.line {
			align-self: center;
			width: 40%;
		}
	}
</style>
