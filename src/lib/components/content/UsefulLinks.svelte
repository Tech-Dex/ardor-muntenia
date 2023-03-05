<script>
	export let data;
</script>

<div class="container">
	<h1>Links utile</h1>
	<div>
		{#if data.length !== 0}
			{#each data as item}
				<li>
					<a href={item.link}> {item.text} </a>
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
	}

	a {
		text-decoration: none;
		color: var(--color-secondary);
	}

	a:hover {
		color: var(--color-primary);
	}

	a:active {
		color: #ff0000;
	}

	a:link {
		color: black;
	}

	a:focus {
		color: black;
	}
</style>
