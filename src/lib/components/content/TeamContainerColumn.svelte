<script>
	import Icon from "@iconify/svelte";
	import facebook from "@iconify/icons-mdi/facebook";
	import linkedin from "@iconify/icons-mdi/linkedin";
	import instagram from "@iconify/icons-mdi/instagram";
	export let member;
</script>

<div class="container">
	<img src={member.image} alt={member.name} />
	<h2>{member.name}</h2>
	<h5>{member.role}</h5>
	<p>{member.description}</p>
	{#if member.facebook || member.instagram || member.linkedin}
		<div class="icons">
			{#if member.facebook}
				<div class="iconify">
					<a href={member.facebook} target="_blank" rel="noopener noreferrer"
						><Icon icon={facebook} width="100%" /></a
					>
				</div>
			{/if}
			{#if member.linkedin}
				<div class="iconify">
					<a href={member.linkedin} target="_blank" rel="noopener noreferrer"
						><Icon icon={linkedin} width="100%" /></a
					>
				</div>
			{/if}
			{#if member.instagram}
				<div class="iconify">
					<a href={member.linkedin} target="_blank" rel="noopener noreferrer">
						<Icon icon={instagram} width="100%" />
					</a>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		align-items: center;
		text-align: center;
		margin-top: 0.5rem;
	}
	.container img {
		width: 20%;
		height: 20%;
		object-fit: contain;
	}
	.container h2 {
		margin: 0.2rem;
		font-size: 1.2rem;
		color: var(--color-septenary);
	}
	.container h5 {
		margin: 0;
		font-size: 0.7rem;
		color: var(--color-septenary);
		letter-spacing: 4px;
	}
	.container p {
		font-size: 0.7rem;
		margin: 0.4rem;
		font-weight: bold;
	}
	.icons {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.iconify {
		margin: 0 0.4rem;
		width: 15px;
	}
	.iconify a {
		text-decoration: none;
		color: var(--color-septenary);
		cursor: pointer;
	}
	@media screen and (min-width: 680px) {
		.container {
			margin: 2rem;
		}
		.container img {
			width: 50%;
			height: 50%;
		}
		.container h2 {
			margin: 0.4rem;
			font-size: 2rem;
		}
		.container h5 {
			margin: 0.4rem;
			font-size: 1.2rem;
		}
		.container p {
			margin: 0.6rem;
			font-size: 1rem;
			letter-spacing: 1px;
			line-height: 1.4rem;
		}
		.iconify {
			width: 30px;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			margin: 3rem;
		}
		.container img {
			width: 70%;
			height: 70%;
		}
		.container h2 {
			margin: 0.4rem;
			font-size: 2rem;
		}
		.container h5 {
			margin: 0.4rem;
			font-size: 1.2rem;
		}
		.container p {
			margin: 0.6rem;
			line-height: 1.4rem;
		}
		.iconify {
			width: 50px;
		}
	}
</style>
