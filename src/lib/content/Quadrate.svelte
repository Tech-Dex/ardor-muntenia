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
					<Icon icon={topRightIcon} width="96" color="var(--color-primary)" />
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
					<Icon icon={bottomLeftIcon} width="96" color="var(--color-primary)" />
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
		width: 50%;
		height: 80%;
		position: relative;
		overflow: hidden;
		background-color: red;
	}

	.top {
		width: 100%;
		height: 50%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: blue;
	}

	.bottom {
		width: 100%;
		height: 50%;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: green;
	}

	.top-left {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: var(--topLeftBackgroundImage);
		background-size: cover;
		background-position: center;
	}

	.top-right {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		background-color: var(--color-senary);
	}

	.top-right .iconify {
		justify-content: center;
		align-items: center;
		display: flex;
		height: 30%;
	}

	.top-right h1 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		height: 30%;
	}

	.top-right p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		text-align: center;
		display: flex;
	}

	.bottom-left {
		width: 50%;
		height: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--color-senary);
	}

	.bottom-left .iconify {
		justify-content: center;
		align-items: center;
		display: flex;
		height: 30%;
	}

	.bottom-left h1 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
		height: 30%;
	}

	.bottom-left p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
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
		background-position: center;
	}
</style>
