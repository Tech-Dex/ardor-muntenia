<script>
	import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
	import accountSchool from "@iconify/icons-mdi/account-school";
	import schoolIcon from "@iconify/icons-mdi/school";
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
		<Fullpage>
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
		</Fullpage>
	</div>
</div>

<style>
	.card {
		background-repeat: no-repeat;
		background-image: var(--image);
		background-size: cover;
		background-position: center;
		color: white;
		width: 100%;
		height: 100%;
		flex: 1;
		transition: all 1s ease-out, box-shadow 0.1s;
	}

	.details {
		width: 100%;
		height: 100%;
		transition: 0s;
		opacity: 0;
	}

	.card:hover {
		flex-grow: 5;
		background-image: var(--image);
		box-shadow: inset 0 0 0 2000px rgb(0, 0, 0, 0.9);
		background-position: 0 20%;
		transition: all 1s ease-in, box-shadow 0.8s;
		transition-delay: 0.3s;
	}

	.card:hover .details {
		opacity: 1;
		transition: all 0.2s ease-in;
		transition-delay: 1.3s;
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
		font-size: 3rem;
		margin: 0;
		padding: 0;
	}

	.heading h2 {
		font-size: 1.5rem;
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
		font-size: 2rem;
		margin: 0 0 2rem 0;
		padding: 0;
	}

	.box p {
		width: 80%;
		margin: 0 0 2rem 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
