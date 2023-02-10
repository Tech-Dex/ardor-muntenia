<script>
	import Icon from "@iconify/svelte";
	export let topLeftBackgroundImage,
		topRightIcon,
		topRightHeading,
		topRightText,
		bottomLeftIcon,
		bottomLeftHeading,
		bottomLeftText,
		bottomRightBackgroundImage;
</script>

<div
	class="container"
	style="--topLeftBackgroundImage: url({topLeftBackgroundImage}); --bottomRightBackgroundImage: url({bottomRightBackgroundImage})"
>
	<div class="top">
		<div class="top-left" />
		<div class="top-right">
			{#if topRightIcon}
				<div class="iconify">
					<Icon icon={topRightIcon} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<h1>{topRightHeading}</h1>
			<p>{topRightText}</p>
		</div>
	</div>
	<div class="bottom">
		<div class="bottom-left">
			{#if bottomLeftIcon}
				<div class="iconify">
					<Icon icon={bottomLeftIcon} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<h1>{bottomLeftHeading}</h1>
			<p>{bottomLeftText}</p>
		</div>
		<div class="bottom-right" />
	</div>
</div>

<style>
	.container {
		width: 60%;
		height: 80%;
		position: relative;
		overflow: hidden;
	}

	.top {
		width: 100%;
		height: 50%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.bottom {
		width: 100%;
		height: 50%;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.top-left {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: var(--topLeftBackgroundImage);
		background-size: cover;
		background-position: top;
	}

	.top-right {
		width: 50%;
		height: 100%;
		position: absolute;
		padding: 0 1rem;
		top: 0;
		right: 0;
		background-color: var(--color-senary);
	}

	.top-right .iconify {
		justify-content: center;
		align-items: center;
		display: flex;
		height: 25%;
	}

	.top-right h1 {
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.top-right p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin: 0;
		padding: 0 2rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		display: flex;
	}

	.bottom-left {
		width: 50%;
		height: 100%;
		position: absolute;
		padding: 0 1rem;
		bottom: 0;
		left: 0;
		background-color: var(--color-senary);
	}

	.bottom-left .iconify {
		justify-content: center;
		align-items: center;
		display: flex;
		height: 25%;
	}

	.bottom-left h1 {
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.bottom-left p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin: 0;
		padding: 0 2rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		display: flex;
	}

	.bottom-right {
		width: 50%;
		height: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		background-image: var(--bottomRightBackgroundImage);
		background-size: cover;
		background-position: top;
	}
	@media screen and (min-width: 1440px) {
		.bottom-left .iconify {
			height: 30%;
		}
		.top-right .iconify {
			height: 30%;
		}
	}
	@media screen and (min-width: 680px) and (max-width: 1023px) {
		.container {
			width: 90%;
		}
	}
	@media screen and (max-width: 680px) {
		.container {
			width: 100%;
		}
		.bottom-left .iconify {
			display: none;
		}
		.bottom-left h1 {
			font-size: 1.2rem;
		}
		.bottom-left p {
			font-size: 0.8rem;
			width: 90%;
			padding: 0;
		}
		.top-right .iconify {
			display: none;
		}
		.top-right h1 {
			font-size: 1rem;
		}
		.top-right p {
			font-size: 0.8rem;
			padding: 0;
		}
	}
</style>
