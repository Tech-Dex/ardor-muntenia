<script>
	export let heading, subHeading, primaryColor, callToActionLink, callToActionTitle, contentList;

	import Icon from "@iconify/svelte";
	import gestureTap from "@iconify/icons-mdi/gesture-tap";
	import account from "@iconify/icons-mdi/account-school";
	import book from "@iconify/icons-mdi/book-open";

	let icons = {
		account: account,
		book: book,
	};
</script>

<div class="container" style="--primaryColor: {primaryColor};">
	<div class="content">
		<h1>{heading}</h1>
		<h4>{subHeading}</h4>
		<div class="button">
			<div class="iconify">
				<Icon icon={gestureTap} width="30px" />
			</div>
			<a href={callToActionLink}><h3>{callToActionTitle}</h3></a>
		</div>
	</div>
	<div class="icons-container">
		{#each contentList as item}
			<div class="icon">
				<div class="iconify">
					<Icon icon={icons[item.icon]} width="100%" />
				</div>
				<div class="texts">
					<h5>{item.heading}</h5>
					<p>{item.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		color: var(--color-secondary);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.container h1 {
		text-align: left;
		margin: 3rem 2rem 0rem 2rem;
		font-size: 2.4rem;
	}
	.container h4 {
		text-align: left;
		margin: 0.4rem 2rem 1rem 2rem;
		font-size: 1.2rem;
		font-weight: 100;
	}
	.button {
		display: flex;
		width: 10rem;
		height: 3rem;
		padding: 0.2rem 0.6rem;
		margin: 0 2rem;
		background-color: var(--primaryColor);
		align-items: center;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
	}
	.iconify {
		margin-left: 0.4rem;
	}
	.button h3 {
		margin: 0 0.2rem;
		font-size: 1rem;
		font-weight: 400;
	}
	.button a {
		text-decoration: none;
		color: #fff;
	}
	.icons-container {
		width: 100%;
		height: 50%;
		background-color: var(--primaryColor);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.content {
		height: 50%;
	}
	.icon {
		display: flex;
		width: 100%;
		height: 50%;
		align-items: center;
		margin: 0 1.4rem;
		color: #fff;
	}
	.icon h5 {
		font-size: 1.6rem;
		margin: 0.2rem;
	}
	.icon p {
		margin: 0.2rem;
		font-size: 1rem;
		font-weight: 100;
	}
	.icon .iconify {
		border-radius: 50%;
		border: 2px solid #fff;
		width: 3rem;
		margin-left: 0.4rem;
		margin-right: 1rem;
		padding: 0.6rem;
	}
	.icon .texts {
		width: 70%;
	}
	@media screen and (min-width: 680px) {
		.content {
			width: 100%;
			height: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.container h1 {
			font-size: 3.2rem;
			margin-top: 6rem;
			text-align: center;
		}
		.container h4 {
			font-size: 2rem;
			text-align: center;
		}
		.button {
			width: 14rem;
			justify-content: center;
			margin: 2rem;
		}
		.button h3 {
			font-size: 1.4rem;
			font-weight: 400;
		}
		.iconify {
			margin: 0;
		}
		.icons-container {
			height: 35%;
			justify-content: center;
			align-items: center;
		}
		.icon {
			width: 100%;
			height: 20%;
			justify-content: center;
			margin: 2rem 4rem;
		}
		.texts h5 {
			font-size: 1.8rem;
		}
		.texts p {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.content {
			height: 60%;
		}
		.container h1 {
			font-size: 4rem;
			margin-top: 6rem;
			text-align: center;
		}
		.container h4 {
			font-size: 2rem;
		}
		.button {
			width: 12rem;
			height: 3rem;
			justify-content: center;
			margin: 2rem;
		}
		.button h3 {
			font-size: 1.4rem;
			font-weight: 400;
		}
		.icons-container {
			flex-direction: row;
			justify-content: center;
			height: 30%;
		}
		.icon {
			width: 40%;
		}
	}
	@media screen and (min-width: 1440px) {
		.icon {
			width: 30%;
		}
	}
</style>
