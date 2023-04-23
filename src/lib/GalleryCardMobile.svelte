<script>
	import { FullpageSection, FullpageSlide } from "svelte-fullpage";
	import accountSchool from "@iconify/icons-mdi/account-school.js";
	import schoolIcon from "@iconify/icons-mdi/school.js";
	import arrowRight from "@iconify/icons-mdi/arrow-right";
	import Icon from "@iconify/svelte";

	let icons = {
		accountSchool: accountSchool,
		schoolIcon: schoolIcon,
	};
	export let backgroundImage, data;
</script>

<div class="card" style="--image: url({backgroundImage});">
	<div class="details">
		<FullpageSection title={data.title}>
			{#each data.content as { icon, heading, paragraph, link }, i}
				<FullpageSlide title="slides">
					<div class="container text-center">
						<div class="heading">
							{#if i === 0}
								<h1>{data.title}</h1>
								<h2>{data.description}</h2>
							{/if}
						</div>
						<div class="box">
							<Icon icon={icons[icon]} width="84" />
							<h3>{heading}</h3>
							<p>{paragraph}</p>
							<a class="icon-arrow-page" href={link.url}>
								<div class="more-details">
									<p>
										{link.text}
										<Icon icon={arrowRight} width="auto" />
									</p>
								</div>
							</a>
						</div>
					</div>
				</FullpageSlide>
			{/each}
		</FullpageSection>
	</div>
</div>

<style>
	.card {
		background-repeat: no-repeat;
		background-image: var(--image);
		box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.8);
		background-size: cover;
		background-position: 50% 20%;
		color: white;
		width: 100%;
		height: 100%;
		flex: 1;
		transition: all 1s ease-out;
	}

	.details {
		width: 100%;
		height: 100%;
	}

	.container {
		word-break: break-word;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.icon-arrow-page {
		text-decoration: none;
		color: var(--color-tertiary);
	}

	.icon-arrow-page:hover {
		color: var(--color-primary);
	}

	.more-details {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	.more-details p {
		padding: 0;
		margin: 0 0.5rem 0 0;
		text-decoration: none;
		color: var(--color-quaternary);
		font-size: 1rem;
		font-weight: 800;
		display: flex;
		flex-direction: row !important;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--color-quaternary);
		border-radius: 0.5rem;
	}

	.more-details p:hover {
		color: var(--color-primary);
		border: 1px solid var(--color-primary);
	}

	.heading {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-bottom: 2rem;
	}

	.heading h1 {
		font-size: 2rem;
		margin: 0;
		padding: 0;
	}

	.heading h2 {
		font-size: 1rem;
		margin: 0;
		padding: 0;
	}

	.box {
		width: 50%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 3px solid var(--color-quaternary);
		border-radius: 1rem;
	}

	.box h3 {
		font-size: 1.4rem;
		margin: 0 0 1rem 0;
		padding: 0;
	}

	.box p {
		width: 80%;
		margin: 0 0 1rem 0;
		padding: 0;
		display: flex;
		font-size: 0.8rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@media screen and (min-width: 680px) {
		.box h3 {
			font-size: 2rem;
			margin: 0 0 2rem 0;
		}
		.heading h1 {
			font-size: 3.2rem;
			margin: 0;
			padding: 0;
		}

		.heading h2 {
			font-size: 1.8rem;
			margin: 1rem 0 1rem 0;
			padding: 0;
		}
		.box p {
			margin: 0 0 2rem 0;
			display: flex;
			font-size: 1.2rem;
		}
	}
</style>
