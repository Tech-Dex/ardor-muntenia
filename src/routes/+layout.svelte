<script>
	import "$globalCss";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import facebookIcon from "@iconify/icons-fe/facebook";
	import instagramIcon from "@iconify/icons-fe/instagram";
	import youtubeIcon from "@iconify/icons-fe/youtube";
	import linkedinIcon from "@iconify/icons-mdi/linkedin";
	import slashForward from "@iconify/icons-mdi/slash-forward";

	let path;
	let enableMobileMenu;

	$: path = $page.url.pathname;
</script>

<svelte:head>
	<title>Ardor Muntenia</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<header>
	<div class="logo">
		<a href="/"><img src="images/logo.png" alt="logo" /></a>
	</div>
	<nav>
		<ul>
			<li><a class:active={path === "/"} href="/">Home</a></li>
			<li class="dropdown">
				<a
					class:active={path === "/cine-suntem"}
					class:sub-active={path === "/despre-noi"}
					href="/cine-suntem">Cine suntem?</a
				>
				<div class="dropdown-content">
					<a class:active-child={path === "/despre-noi"} href="/despre-noi">Despre noi</a>
				</div>
			</li>
			<li class="dropdown">
				<a class:active={path === "/dezbateri"} href="/dezbateri">Dezbateri</a>
				<div class="dropdown-content">
					<a href="/dezbateri">Despre noi</a>
					<a href="/dezbateri">Echipa</a>
					<a href="/dezbateri">Parteneri</a>
				</div>
			</li>
			<li class="dropdown">
				<a class:active={path === "/cum-fac-dezbateri"} href="/cum-fac-dezbateri"
					>Cum fac Dezbateri?</a
				>
				<div class="dropdown-content">
					<a href="/cum-fac-dezbateri">Despre noi</a>
					<a href="/cum-fac-dezbateri">Echipa</a>
					<a href="/cum-fac-dezbateri">Parteneri</a>
				</div>
			</li>
			<li class="dropdown">
				<a class:active={path === "/resurse-debate"} href="/resurse-debate">Resurse Debate</a>
				<div class="dropdown-content">
					<a href="/resurse-debate">Despre noi</a>
					<a href="/resurse-debate">Echipa</a>
					<a href="/resurse-debate">Parteneri</a>
				</div>
			</li>
			<li><a class:active={path === "/contact"} href="/contact">Contact</a></li>
		</ul>
	</nav>
	<div class={enableMobileMenu ? "navbar-mobile open-nav" : "navbar-mobile"}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg
			on:click={() => (enableMobileMenu = false)}
			width="35"
			height="35"
			viewBox="0 0 35 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="close"
		>
			<path
				d="M28.3281 6.6719C27.9179 6.26181 27.3616 6.03143 26.7815 6.03143C26.2015 6.03143 25.6452 6.26181 25.235 6.6719L17.5 14.4069L9.76497 6.6719C9.3524 6.27343 8.79984 6.05294 8.22628 6.05793C7.65273 6.06291 7.10407 6.29297 6.69849 6.69855C6.29291 7.10413 6.06286 7.65278 6.05787 8.22634C6.05289 8.79989 6.27338 9.35246 6.67185 9.76503L14.4068 17.5L6.67185 25.235C6.27338 25.6476 6.05289 26.2002 6.05787 26.7737C6.06286 27.3473 6.29291 27.8959 6.69849 28.3015C7.10407 28.7071 7.65273 28.9371 8.22628 28.9421C8.79984 28.9471 9.3524 28.7266 9.76497 28.3282L17.5 20.5932L25.235 28.3282C25.6475 28.7266 26.2001 28.9471 26.7737 28.9421C27.3472 28.9371 27.8959 28.7071 28.3014 28.3015C28.707 27.8959 28.9371 27.3473 28.9421 26.7737C28.9471 26.2002 28.7266 25.6476 28.3281 25.235L20.5931 17.5L28.3281 9.76503C28.7382 9.35481 28.9686 8.79851 28.9686 8.21847C28.9686 7.63842 28.7382 7.08212 28.3281 6.6719Z"
				fill="white"
			/>
		</svg>
		<ul class="nav-mobile-list">
			<li class="menu-nav-item">
				<h4 class="nav-item-text">
					<a class="nav-item nav-item-container" href="/">Home</a>
				</h4>
			</li>
			<li class="menu-nav-item">
				<h4 class="nav-item-text">
					<a class="nav-item nav-item-container" href="/">Cine suntem?</a>
				</h4>
			</li>
			<li class="menu-nav-item">
				<h4 class="nav-item-text">
					<a class="nav-item nav-item-container" href="/">Dezbateri</a>
				</h4>
			</li>
			<li class="menu-nav-item">
				<h4 class="nav-item-text">
					<a class="nav-item nav-item-container" href="/">Cum fac Dezbateri?</a>
				</h4>
			</li>
			<li class="menu-nav-item">
				<h4 class="nav-item-text">
					<a class="nav-item nav-item-container" href="/">Resurse Debate</a>
				</h4>
			</li>
			<li class="menu-nav-item">
				<h4 class="nav-item-text">
					<a class="nav-item nav-item-container" href="/">Contact</a>
				</h4>
			</li>
		</ul>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="menu" on:click={() => (enableMobileMenu = !enableMobileMenu)}>
		<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.375 6.5625H30.625V8.75H4.375V6.5625ZM4.375 26.25H30.625V28.4375H4.375V26.25ZM4.375 13.125H30.625V15.3125H4.375V13.125ZM4.375 19.6875H30.625V21.875H4.375V19.6875Z"
				fill="#EA2340"
			/>
		</svg>
	</div>
</header>

<div class="slot-content">
	<slot />
</div>

<footer>
	<div>
		<div class="footer-socials">
			<a class="iconify" href="facebook.com">
				<Icon icon={facebookIcon} width="auto" />
			</a>
			<Icon icon={slashForward} width="auto" />
			<a class="iconify" href="instagram.com">
				<Icon icon={instagramIcon} width="auto" />
			</a>
			<Icon icon={slashForward} width="auto" />
			<a class="iconify" href="youtube.com">
				<Icon icon={youtubeIcon} width="auto" />
			</a>
			<Icon icon={slashForward} width="auto" />
			<a class="iconify" href="linkedin.com">
				<Icon icon={linkedinIcon} width="auto" />
			</a>
		</div>
		<div class="footer-details">
			<div class="footer-links">
				<div class="footer-links-left">
					<a href="/">
						<p>Home</p>
					</a>
					<a href="/cine-suntem">
						<p>Cine suntem?</p>
					</a>
					<a href="/dezbateri">
						<p>Dezbateri</p>
					</a>
				</div>
				<div class="footer-links-center">
					<a href="google.com">
						<p>Marius Cucereanu</p>
					</a>
					<a href="google.com">
						<p>Dex</p>
					</a>
				</div>
				<div class="footer-links-right">
					<a href="/cum-fac-dezbateri">
						<p>Cum fac Dezbateri?</p>
					</a>
					<a href="/resurse-debate">
						<p>Resurse Debate</p>
					</a>
					<a href="/contact">
						<p>Contact</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(html) {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		font-family: "Poppins", sans-serif;
	}

	:global(header) {
		height: 6vh;
		background-color: var(--color-quaternary);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	:global(.slot-content) {
		height: 85vh;
		background-color: lightblue;
	}

	:global(footer) {
		height: 9vh;
		background-color: var(--color-secondary);
		color: var(--color-tertiary);
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: "footer-social" "footer-details";
	}

	:global(body) {
		margin: 0;
	}

	.logo {
		margin-left: 4rem;
	}

	.logo a {
		cursor: pointer;
	}

	nav {
		margin-right: 4rem;
	}

	nav ul {
		display: flex;
		list-style: none;
	}

	nav ul li {
		margin-right: 2rem;
	}

	nav ul li a {
		text-decoration: none;
		color: var(--color-secondary);
		font-family: "Poppins", sans-serif;
		font-weight: 700;
		font-size: 1rem;
		padding: 0.5rem 1rem 0.5rem 1rem;
		border: none;
	}

	nav ul li a:hover {
		color: var(--color-primary);
		background-color: transparent;
	}

	nav ul li a:has(.active):hover {
		color: var(--color-primary);
		background-color: transparent;
	}

	nav ul li a.active {
		color: var(--color-quaternary);
		background-color: var(--color-primary);
		border-radius: 5px;
	}

	nav ul li a.sub-active {
		color: var(--color-quaternary);
		background-color: var(--color-primary);
		border-radius: 5px;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--color-quaternary);
		z-index: 1;
		top: 2rem;
		box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		min-width: 5rem;
		width: 100%;
	}

	.dropdown-content a {
		color: var(--color-secondary);
		padding: 0.75rem 1rem;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		color: var(--color-primary) !important;
		background-color: transparent !important;
	}

	.dropdown-content .active-child {
		color: var(--color-primary);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	footer .footer-socials {
		margin-top: 1rem;
		grid-area: footer-social;
		text-align: center;
	}

	footer .footer-socials a {
		margin: 0 2rem;
	}

	footer .footer-socials .iconify {
		color: var(--color-tertiary);
	}

	footer .footer-socials .iconify:hover {
		color: var(--color-quinary);
	}

	footer .footer-details {
		grid-area: footer-details;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer .footer-details p {
		margin: 0;
	}

	footer .footer-details .footer-links {
		grid-area: footer-details-links;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: "footer-links-left footer-links-center footer-links-right";
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	footer .footer-details .footer-links-left {
		grid-area: footer-links-left;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	footer .footer-details .footer-links-center {
		grid-area: footer-links-center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	footer .footer-details .footer-links-right {
		grid-area: footer-links-right;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	footer .footer-details a {
		text-decoration: none;
		color: var(--color-tertiary);
		font-size: 1rem;
		font-weight: 700;
		margin-right: 2rem;
	}

	footer .footer-details a:hover {
		text-decoration: none;
		color: var(--color-quinary);
		font-size: 1rem;
		font-weight: 700;
		margin-right: 2rem;
	}

	footer .footer-details .footer-links-center a {
		text-decoration: none;
		color: var(--color-tertiary);
		font-size: 1rem;
		font-weight: 500;
		margin: 0.5rem 2rem;
	}

	footer .footer-details .footer-links-center a:hover {
		text-decoration: none;
		color: var(--color-quinary);
		font-size: 1rem;
		font-weight: 500;
		margin: 0.5rem 2rem;
	}

  .menu {
      display: none;
  }
  .nav-mobile-list {
      display: none;
  }
	@media screen and (max-width: 1024px) {
		nav {
			display: none;
		}
		.menu {
			cursor: pointer;
			display: block;
			margin-right: 2rem;
		}
		.navbar-mobile {
			display: block;
			overflow: scroll;
			position: fixed;
			right: 0;
			top: 0;
			height: 100vh;
			width: 50%;
			background: var(--color-primary);
			transform: translateX(100%);
			transition: transform 0.5s ease-in-out;
		}
		.close {
			float: right;
			margin: 2rem;
			width: 2.5rem;
			cursor: pointer;
		}
		.open-nav {
			transform: translateX(0%);
		}
		.nav-mobile-list {
			display: block;
			list-style-type: none;
			padding: 0;
			margin-top: 8em;
		}
		.nav-item-text {
			margin: 0;
		}
		.nav-item {
			color: rgb(255, 255, 255);
			font-size: 1rem;
			font-family: "Poppins-Bold", sans-serif;
			padding: 0.75em 2em;
			display: block;
			text-decoration: none;
		}
		/* .nav-item-current {
			background: #c4132c;
		} */
		.nav-item-container {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
