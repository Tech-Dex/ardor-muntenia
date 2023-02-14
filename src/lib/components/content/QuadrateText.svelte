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

	export let topLeftIcon,
		topLeftTitle,
		topLeftDescription,
		topLeftCallToActionText,
		topLeftCallToActionUrl,
		topRightIcon,
		topRightTitle,
		topRightDescription,
		topRightCallToActionText,
		topRightCallToActionUrl,
		bottomLeftIcon,
		bottomLeftTitle,
		bottomLeftDescription,
		bottomLeftCallToActionText,
		bottomLeftCallToActionUrl,
		bottomRightIcon,
		bottomRightTitle,
		bottomRightDescription,
		bottomRightCallToActionText,
		bottomRightCallToActionUrl;
</script>

<div class="container">
	<div class="top">
		<div class="top-left">
			{#if topLeftIcon}
				<div class="iconify">
					<Icon icon={icons[topLeftIcon]} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<div class="content">
				<h1>{topLeftTitle}</h1>
				<p>{topLeftDescription}</p>
				{#if topLeftCallToActionText && topLeftCallToActionUrl}
					<a href={topLeftCallToActionUrl}>{topLeftCallToActionText}</a>
				{/if}
			</div>
		</div>
		<div class="top-right">
			{#if topRightIcon}
				<div class="iconify">
					<Icon icon={icons[topRightIcon]} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<div class="content">
				<h1>{topRightTitle}</h1>
				<p>{topRightDescription}</p>
				{#if topRightCallToActionText && topRightCallToActionUrl}
					<a href={topRightCallToActionUrl}>{topRightCallToActionText}</a>
				{/if}
			</div>
		</div>
	</div>
	<div class="bottom">
		<div class="bottom-left">
			{#if bottomLeftIcon}
				<div class="iconify">
					<Icon icon={icons[bottomLeftIcon]} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<div class="content">
				<h1>{bottomLeftTitle}</h1>
				<p>{bottomLeftDescription}</p>
				{#if bottomLeftCallToActionText && bottomLeftCallToActionUrl}
					<a href={bottomLeftCallToActionUrl}>{bottomLeftCallToActionText}</a>
				{/if}
			</div>
		</div>
		<div class="bottom-right">
			{#if bottomRightIcon}
				<div class="iconify">
					<Icon icon={icons[bottomRightIcon]} width="80" color="var(--color-primary)" />
				</div>
			{/if}
			<div class="content">
				<h1>{bottomRightTitle}</h1>
				<p>{bottomRightDescription}</p>
				{#if bottomRightCallToActionText && bottomRightCallToActionUrl}
					<a href={bottomRightCallToActionUrl}>{bottomRightCallToActionText}</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		width: 80%;
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bottom {
		width: 100%;
		height: 50%;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container .content {
		width: 100%;
		height: 75%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.top-left {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--color-senary);
	}

	.top-left .iconify {
		justify-content: center;
		align-items: center;
		display: flex;
		height: 25%;
	}

	.top-left h1 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.top-left p {
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

	.top-left .content > a {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: justify;
		text-decoration: none;
		color: var(--color-senary);
		background-color: var(--color-tertiary);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.top-left .content > a:hover {
		background-color: var(--color-primary);
		color: var(--color-senary);
	}

	.top-right {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		background-color: var(--color-tertiary);
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
		color: var(--color-senary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.top-right p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-senary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		text-align: center;
		display: flex;
	}

	.top-right .content > a {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: justify;
		text-decoration: none;
		color: var(--color-secondary);
		background-color: var(--color-senary);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.top-right .content > a:hover {
		background-color: var(--color-primary);
		color: var(--color-senary);
	}

	.bottom-left {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--color-tertiary);
		color: var(--color-senary);
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
		color: var(--color-senary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.bottom-left p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-senary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		text-align: center;
		display: flex;
	}
	.bottom-left .content > a {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: justify;
		text-decoration: none;
		color: var(--color-secondary);
		background-color: var(--color-senary);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.bottom-left .content > a:hover {
		background-color: var(--color-primary);
		color: var(--color-senary);
	}
	.bottom-right {
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		background-color: var(--color-senary);
	}

	.bottom-right .iconify {
		justify-content: center;
		align-items: center;
		display: flex;
		height: 30%;
	}

	.bottom-right h1 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin: 0;
		padding: 0;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.bottom-right p {
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

	.bottom-right .content > a {
		font-size: 1.5rem;
		font-weight: 400;
		text-align: justify;
		text-decoration: none;
		color: var(--color-senary);
		background-color: var(--color-tertiary);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.bottom-right .content > a:hover {
		background-color: var(--color-primary);
		color: var(--color-senary);
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
		}
		.top-right h1 {
			font-size: 1rem;
		}
		.top-right p {
			font-size: 0.8rem;
		}

		.bottom-right h1 {
			font-size: 1.2rem;
		}
		.bottom-right p {
			font-size: 0.8rem;
			width: 90%;
		}
		.top-left h1 {
			font-size: 1rem;
		}
		.top-left p {
			font-size: 0.8rem;
		}
	}
</style>
