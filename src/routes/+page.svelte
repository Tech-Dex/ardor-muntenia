<script>
	import GalleryCard from "$lib/GalleryCard.svelte";
	import GalleryCardMobile from "$lib/GalleryCardMobile.svelte";
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import { onMount } from "svelte";

	export let data;

	let galleryCards = data.data;

	onMount(() => {
		document.documentElement.style.setProperty(
			"--landing-image",
			`url(${galleryCards[0].data.image})`,
		);
	});
</script>

<div class="gallery">
	<Fullpage>
		<!--		<FullpageSection>-->
		<!--			<div class="welcome-landing" />-->
		<!--		</FullpageSection>-->
		<FullpageSection>
			{#each galleryCards as card, i}
				{#if i !== 0}
					<GalleryCard data={card.data} backgroundImage={card.data.image} />
				{/if}
			{/each}
		</FullpageSection>
	</Fullpage>
</div>

<div class="gallery-mobile">
	<Fullpage>
		{#each galleryCards as card}
			<GalleryCardMobile data={card.data} backgroundImage={card.data.image} />
		{/each}
	</Fullpage>
</div>

<style>
	.gallery {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.welcome-landing {
		background-image: var(--landing-image);
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100%;
	}

	.gallery-mobile {
		display: none;
	}

	@media only screen and (max-width: 1023px) {
		.gallery {
			display: none;
		}

		.gallery-mobile {
			display: flex;
			width: 100%;
			height: 100%;
		}
	}
</style>
