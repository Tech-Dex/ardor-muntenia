<script>
	import "$globalCss";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import facebookIcon from "@iconify/icons-fe/facebook";
	import instagramIcon from "@iconify/icons-fe/instagram";
	import youtubeIcon from "@iconify/icons-fe/youtube";
	import linkedinIcon from "@iconify/icons-mdi/linkedin";
	import slashForward from "@iconify/icons-mdi/slash-forward";
	import hamburgerMenu from "@iconify/icons-mdi/hamburger-menu";
	import closeIcon from "@iconify/icons-mdi/close";

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
		<div class="close" on:click={() => (enableMobileMenu = false)}>
			<Icon icon={closeIcon} width="auto" style="color:white" />
		</div>

		<ul>
			<li>
				<h4>
					<a class="nav-item-current" href="/">Home</a>
				</h4>
			</li>
			<li>
				<h4>
					<a class="nav-item-container" href="/">Cine suntem?</a>
				</h4>
			</li>
			<li>
				<h4>
					<a class="nav-item-container" href="/">Dezbateri</a>
				</h4>
			</li>
			<li>
				<h4>
					<a class="nav-item-container" href="/">Cum fac Dezbateri?</a>
				</h4>
			</li>
			<li>
				<h4>
					<a class="nav-item-container" href="/">Resurse Debate</a>
				</h4>
			</li>
			<li>
				<h4>
					<a class="nav-item-container" href="/">Contact</a>
				</h4>
			</li>
		</ul>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="menu" on:click={() => (enableMobileMenu = !enableMobileMenu)}>
		<Icon icon={hamburgerMenu} width="auto" />
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

	.navbar-mobile {
		display: none;
	}

	.menu {
		display: none;
	}
	.navbar-mobile ul {
		display: none;
	}

	@media screen and (max-width: 1023px) {
		nav {
			display: none;
		}
		.menu {
			color: var(--color-primary);
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
		.navbar-mobile ul {
			display: block;
			list-style-type: none;
			padding: 0;
			margin-top: 8em;
		}
		.navbar-mobile ul li h4 {
			margin: 0;
		}
		.navbar-mobile ul li h4 a {
			color: rgb(255, 255, 255);
			font-size: 1rem;
			font-family: "Poppins-Bold", sans-serif;
			padding: 0.75em 2em;
			display: block;
			text-decoration: none;
		}
		.nav-item-current {
			background: #c4132c;
		}
		.nav-item-container {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
