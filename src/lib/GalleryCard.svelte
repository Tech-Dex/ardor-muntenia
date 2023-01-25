<script>

	import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
	import { onMount } from "svelte";
	import arrowRight from "@iconify/icons-mdi/arrow-right";
	import Icon from "@iconify/svelte";


	export let backgroundImage, backgroundImageDark, data;
	onMount(() => {
		let image = new Image();
		image.src = backgroundImageDark;
	});
</script>

<div class="card" style="--image: url({backgroundImage}); --imageDark: url({backgroundImageDark})">
	<div class="details">
		<Fullpage>
			<FullpageSection title="{data.title}">
				{#each data.content as { header, summary, page }, i}
					<FullpageSlide title="slides">
						<div class="container text-center">
							{#if i === 0}
								<h1>{data.title}</h1>
								<h2>{data.description}</h2>
							{/if}
							<h3>{header}</h3>
							<p>{summary}</p>
							<a class="icon-arrow-page" href="{page}">
								<Icon icon={arrowRight} width="auto" />
							</a>
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
        transition: all 1s ease-out;
    }

    .details {
        width: 100%;
        height: 100%;
        transition: 0s;
        opacity: 0;
    }

    .card:hover {
        flex-grow: 5;
        background-image: var(--imageDark);
        background-position: 0 20%;
        transition: all 1s ease-in;
    }

    .card:hover .details {
        opacity: 1;
        transition: all 0.2s ease-in;
        transition-delay: 1s;
    }

    .container {
        word-break: break-word;
    }

    .icon-arrow-page {
        color: var(--color-tertiary);
    }

    .icon-arrow-page:hover {
        color: var(--color-primary);
    }

</style>
