<script>
	export let data;
</script>

<div class="container">
	<h1>Links utile</h1>
	<div>
		{#if data.length !== 0}
			{#each data as item}
				<li>
					<a class="link" href={item.link}> {item.text} </a>
				</li>
			{/each}
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid var(--color-secondary);
		border-radius: 10px;
		padding: 4rem;
	}

	.container div {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.link {
		text-decoration: none;
		color: var(--color-secondary);
		font-size: 2.4rem;
		margin: 0;
	}

	li {
		margin: 1rem;
		vertical-align: middle;
		font-size: 2.4rem;
	}

	.link:hover {
		color: var(--color-primary);
	}

	h1 {
		font-size: 5rem;
		letter-spacing: 2px;
	}

	@media screen and (max-width: 679px) {
		.container {
			padding: 1rem;
			border: none;
		}

		.container div {
			display: flex;
			flex-direction: column;
		}

		h1 {
			font-size: 3.2rem;
		}

		li {
			margin: 0;
		}
	}
</style>
