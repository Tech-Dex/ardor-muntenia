<script>
	import Icon from "@iconify/svelte";
	import castleIcon from "@iconify/icons-mdi/castle";
	import accountStudent from "@iconify/icons-mdi/account-student";
	import cardsHeart from "@iconify/icons-mdi/cards-heart";
	import teachIcon from "@iconify/icons-mdi/teach";
	import graphLine from "@iconify/icons-mdi/graph-line";

	let icons = {
		castleIcon: castleIcon,
		accountStudent: accountStudent,
		cardsHeart: cardsHeart,
		teachIcon: teachIcon,
		graphLine: graphLine,
	};

	export let topLeftImage,
		topRightIcon,
		topRightTitle,
		topRightDescription,
		bottomLeftIcon,
		bottomLeftTitle,
		bottomLeftDescription,
		bottomRightImage;
</script>

<div
	class="container"
	style="--topLeftBackgroundImage: url({topLeftImage}); --bottomRightBackgroundImage: url({bottomRightImage})"
>
	<div class="top">
		<div class="top-left" />
		<div class="top-right">
			{#if topRightIcon}
				<div class="iconify">
					<Icon icon={icons[topRightIcon]} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<h1>{topRightTitle}</h1>
			<p>{topRightDescription}</p>
		</div>
	</div>
	<div class="bottom">
		<div class="bottom-left">
			{#if bottomLeftIcon}
				<div class="iconify">
					<Icon icon={icons[bottomLeftIcon]} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<h1>{bottomLeftTitle}</h1>
			<p>{bottomLeftDescription}</p>
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
		height: 25%;
	}

	.top-right h1 {
		font-size: 1.8rem;
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
		padding: 0 1rem;
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
		font-size: 1.8rem;
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
		padding: 0 1rem;
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
		.bottom-left h1 {
			font-size: 1.2rem;
		}
		.bottom-left p {
			font-size: 0.8rem;
			width: 90%;
			padding: 0;
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
