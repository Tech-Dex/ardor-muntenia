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
	import chevronDown from "@iconify/icons-mdi/chevron-down";

	let path;
	let enableMobileMenu;

	let subListOpened;

	$: path = $page.url.pathname;

	function openSubList(number) {
		if (subListOpened === number) subListOpened = null;
		else subListOpened = number;
	}
</script>

<svelte:head>
	<title>Ardor Muntenia</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Ardor Muntenia, Asociat ARDOR" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		rel="preconnect"
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
	/>
</svelte:head>
<header>
	<div class="logo">
		<a href="/" title="Ardor Muntenia"><img src="/images/logo.webp" alt="logo" /></a>
	</div>
	<nav>
		<ul>
			<li><a class:active={path === "/"} href="/">Home</a></li>
			<li class="dropdown">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					class:active={path === "/cine-suntem"}
					class:sub-active={[
						"/cine-suntem/viziune",
						"/cine-suntem/proiecte",
						"/cine-suntem/echipa",
						"/cine-suntem/sustinatori",
						"/cine-suntem/sustine-ne",
						"/cine-suntem/testimoniale",
					].includes(path)}
					>Cine suntem?
					<Icon icon={chevronDown} width="auto" />
				</a>
				<div class="dropdown-content">
					<a class:active-child={path === "/cine-suntem/viziune"} href="/cine-suntem/viziune"
						>Viziune</a
					>
					<a class:active-child={path === "/cine-suntem/proiecte"} href="/cine-suntem/proiecte"
						>Proiecte</a
					>
					<a class:active-child={path === "/cine-suntem/echipa"} href="/cine-suntem/echipa"
						>Echipa</a
					>
					<a
						class:active-child={path === "/cine-suntem/sustinatori"}
						href="/cine-suntem/sustinatori">Sustinatori</a
					>
					<a class:active-child={path === "/cine-suntem/sustine-ne"} href="/cine-suntem/sustine-ne"
						>Sustine-ne</a
					>
					<a
						class:active-child={path === "/cine-suntem/testimoniale"}
						href="/cine-suntem/testimoniale">Testimoniale</a
					>
				</div>
			</li>
			<li class="dropdown">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					class:active={path === "/dezbateri"}
					class:sub-active={[
						"/dezbateri/ce-sunt-dezbaterile",
						"/dezbateri/beneficii",
						"/dezbateri/competitii",
						"/dezbateri/oportunitati",
						"/dezbateri/cursuri",
						"/dezbateri/calendar",
						"/dezbateri/arhiva",
					].includes(path)}
				>
					Dezbateri
					<Icon icon={chevronDown} width="auto" />
				</a>

				<div class="dropdown-content">
					<a
						class:active-child={path === "/dezbateri/ce-sunt-dezbaterile"}
						href="/dezbateri/ce-sunt-dezbaterile">Ce sunt dezbaterile?</a
					>
					<a class:active-child={path === "/dezbateri/beneficii"} href="/dezbateri/beneficii"
						>Beneficii</a
					>
					<a class:active-child={path === "/dezbateri/competitii"} href="/dezbateri/competitii"
						>Competitii</a
					>
					<a class:active-child={path === "/dezbateri/oportunitati"} href="/dezbateri/oportunitati"
						>Oportunitati</a
					>
					<a class:active-child={path === "/dezbateri/cursuri"} href="/dezbateri/cursuri">Cursuri</a
					>
					<a class:active-child={path === "/dezbateri/calendar"} href="/dezbateri/calendar"
						>Calendar</a
					>
					<a class:active-child={path === "/dezbateri/arhiva"} href="/dezbateri/arhiva">Arhiva</a>
				</div>
			</li>
			<li class="dropdown">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					class:active={path === "/cum-fac-dezbateri"}
					class:sub-active={[
						"/cum-fac-dezbateri/clubul",
						"/cum-fac-dezbateri/optional-dor",
						"/cum-fac-dezbateri/profesionisti",
						"/cum-fac-dezbateri/harta-cluburi",
					].includes(path)}
					>Cum fac Dezbateri?
					<Icon icon={chevronDown} width="auto" />
				</a>
				<div class="dropdown-content">
					<a
						class:active-child={path === "/cum-fac-dezbateri/clubul"}
						href="/cum-fac-dezbateri/clubul">Clubul</a
					>
					<a
						class:active-child={path === "/cum-fac-dezbateri/harta-cluburi"}
						href="/cum-fac-dezbateri/harta-cluburi">Harta Cluburi</a
					>
					<a
						class:active-child={path === "/cum-fac-dezbateri/optional-dor"}
						href="/cum-fac-dezbateri/optional-dor">Optionalul Dor</a
					>
					<a
						class:active-child={path === "/cum-fac-dezbateri/profesionisti"}
						href="/cum-fac-dezbateri/profesionisti">Profesionisti</a
					>
				</div>
			</li>
			<li class="dropdown">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					class:active={path === "/resurse-debate"}
					class:sub-active={["/resurse-debate/elevi", "/resurse-debate/profesori"].includes(path)}
					>Resurse Debate
					<Icon icon={chevronDown} width="auto" />
				</a>
				<div class="dropdown-content">
					<a class:active-child={path === "/resurse-debate/elevi"} href="/resurse-debate/elevi"
						>Elevi</a
					>
					<a
						class:active-child={path === "/resurse-debate/profesori"}
						href="/resurse-debate/profesori">Profesori</a
					>
				</div>
			</li>
			<li>
				<a class:active={path === "/contact"} href="/contact">Contact </a>
			</li>
		</ul>
	</nav>
	<div class={enableMobileMenu ? "navbar-mobile open-nav" : "navbar-mobile"}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="close" on:click={() => (enableMobileMenu = false)}>
			<Icon icon={closeIcon} width="auto" style="color:white" />
		</div>

		<ul>
			<li>
				<a class:active={path === "/"} href="/" on:click={() => (enableMobileMenu = false)}
					><h4>Home</h4></a
				>
			</li>
			<li>
				<a href={path} on:click={() => openSubList(1)}
					><h4>Cine suntem?</h4>
					<div class="chevron-down">
						<Icon icon={chevronDown} width="auto" style="color:white" />
					</div>
				</a>
				<div
					class={subListOpened === 1 ? "nav-item-sub-container-display" : "nav-item-sub-container"}
				>
					<h4 class:active={path === "/cine-suntem/viziune"}>
						<a href="/cine-suntem/viziune" on:click={() => (enableMobileMenu = false)}>Viziune</a>
					</h4>
					<h4 class:active={path === "/cine-suntem/proiecte"}>
						<a href="/cine-suntem/proiecte" on:click={() => (enableMobileMenu = false)}>Proiecte</a>
					</h4>
					<h4 class:active={path === "/cine-suntem/echipa"}>
						<a href="/cine-suntem/echipa" on:click={() => (enableMobileMenu = false)}>Echipa</a>
					</h4>
					<h4 class:active={path === "/cine-suntem/sustinatori"}>
						<a href="/cine-suntem/sustinatori" on:click={() => (enableMobileMenu = false)}
							>Sustinatori</a
						>
					</h4>
					<h4 class:active={path === "/cine-suntem/sustine-ne"}>
						<a href="/cine-suntem/sustine-ne" on:click={() => (enableMobileMenu = false)}
							>Sustine-ne</a
						>
					</h4>
					<h4 class:active={path === "/cine-suntem/testimoniale"}>
						<a href="/cine-suntem/testimoniale" on:click={() => (enableMobileMenu = false)}
							>Testimoniale</a
						>
					</h4>
				</div>
			</li>
			<li>
				<a href={path} on:click={() => openSubList(2)}
					><h4>Dezbateri</h4>
					<div class="chevron-down">
						<Icon icon={chevronDown} width="auto" style="color:white" />
					</div>
				</a>
				<div
					class={subListOpened === 2 ? "nav-item-sub-container-display" : "nav-item-sub-container"}
				>
					<h4 class:active={path === "/dezbateri/ce-sunt-dezbaterile"}>
						<a href="/dezbateri/ce-sunt-dezbaterile" on:click={() => (enableMobileMenu = false)}
							>Ce sunt dezbaterile?</a
						>
					</h4>
					<h4 class:active={path === "/dezbateri/beneficii"}>
						<a href="/dezbateri/beneficii" on:click={() => (enableMobileMenu = false)}>Beneficii</a>
					</h4>
					<h4 class:active={path === "/dezbateri/competitii"}>
						<a href="/dezbateri/competitii" on:click={() => (enableMobileMenu = false)}
							>Competitii</a
						>
					</h4>
					<h4 class:active={path === "/dezbateri/oportunitati"}>
						<a href="/dezbateri/oportunitati" on:click={() => (enableMobileMenu = false)}
							>Oportunitati</a
						>
					</h4>
					<h4 class:active={path === "/dezbateri/cursuri"}>
						<a href="/dezbateri/cursuri" on:click={() => (enableMobileMenu = false)}>Cursuri</a>
					</h4>
					<h4 class:active={path === "/dezbateri/calendar"}>
						<a href="/dezbateri/calendar" on:click={() => (enableMobileMenu = false)}>Calendar</a>
					</h4>
					<h4 class:active={path === "/dezbateri/arhiva"}>
						<a href="/dezbateri/arhiva" on:click={() => (enableMobileMenu = false)}>Arhiva</a>
					</h4>
				</div>
			</li>
			<li>
				<a href={path} on:click={() => openSubList(3)}
					><h4>Cum fac Dezbateri?</h4>
					<div class="chevron-down">
						<Icon icon={chevronDown} width="auto" style="color:white" />
					</div>
				</a>
				<div
					class={subListOpened === 3 ? "nav-item-sub-container-display" : "nav-item-sub-container"}
				>
					<h4 class:active={path === "/cum-fac-dezbateri/clubul"}>
						<a href="/cum-fac-dezbateri/clubul" on:click={() => (enableMobileMenu = false)}
							>Clubul</a
						>
					</h4>
					<h4 class:active={path === "/cum-fac-dezbateri/harta-cluburi"}>
						<a href="/cum-fac-dezbateri/harta-cluburi" on:click={() => (enableMobileMenu = false)}
							>harta-cluburi</a
						>
					</h4>
					<h4 class:active={path === "/cum-fac-dezbateri/optional-dor"}>
						<a href="/cum-fac-dezbateri/optional-dor" on:click={() => (enableMobileMenu = false)}
							>Optionalul Dor</a
						>
					</h4>
					<h4 class:active={path === "/cum-fac-dezbateri/profesionisti"}>
						<a href="/cum-fac-dezbateri/profesionisti" on:click={() => (enableMobileMenu = false)}
							>Profesionisti</a
						>
					</h4>
				</div>
			</li>
			<li>
				<a href={path} on:click={() => openSubList(4)}
					><h4>Resurse Debate</h4>
					<div class="chevron-down">
						<Icon icon={chevronDown} width="auto" style="color:white" />
					</div>
				</a>
				<div
					class={subListOpened === 4 ? "nav-item-sub-container-display" : "nav-item-sub-container"}
				>
					<h4 class:active={path === "/resurse-debate/elevi"}>
						<a href="/resurse-debate/elevi" on:click={() => (enableMobileMenu = false)}>Elevi</a>
					</h4>
					<h4 class:active={path === "/resurse-debate/profesori"}>
						<a href="/resurse-debate/profesori" on:click={() => (enableMobileMenu = false)}
							>Profesori</a
						>
					</h4>
				</div>
			</li>
			<li>
				<a
					class:active={path === "/contact"}
					href="/contact"
					on:click={() => (enableMobileMenu = false)}><h4>Contact</h4></a
				>
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
			<a class="iconify" href="https://www.facebook.com/ARDORMuntenia/">
				<Icon icon={facebookIcon} width="auto" />
			</a>
			<Icon icon={slashForward} width="auto" />
			<a class="iconify" href="https://www.instagram.com/ardormuntenia/">
				<Icon icon={instagramIcon} width="auto" />
			</a>
			<Icon icon={slashForward} width="auto" />
			<a class="iconify" href="https://www.youtube.com/@ARDORnational">
				<Icon icon={youtubeIcon} width="auto" />
			</a>
			<Icon icon={slashForward} width="auto" />
			<a class="iconify" href="https://www.linkedin.com/company/ardor-muntenia">
				<Icon icon={linkedinIcon} width="auto" />
			</a>
		</div>
		<div class="footer-details">
			<div class="footer-links">
				<div class="footer-links-center">
					<span>ARDOR MUNTENIA © 2023 - </span> <span> Built by</span>
					<a
						href="https://www.linkedin.com/in/cucereanum/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>Marius Cucereanu</p>
					</a>
					&
					<a
						href="https://www.facebook.com/alexandru.rominu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>Dex</p>
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
		height: 6dvh;
		background-color: var(--color-quaternary);
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 3rem;
	}

	:global(.slot-content) {
		height: 85dvh;
	}

	:global(footer) {
		height: 9dvh;
		background-color: var(--color-secondary);
		color: var(--color-tertiary);
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: "footer-social" "footer-details";
		min-height: 5.6rem;
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

	.logo a img {
		width: 100%;
		height: 100%;
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
		display: flex;
	}

	nav ul li:last-child {
		margin-right: 0rem;
	}

	nav ul li a {
		text-decoration: none;
		color: var(--color-secondary);
		font-family: "Poppins", sans-serif;
		font-weight: 700;
		font-size: 1rem;
		padding: 0.5rem 1rem 0.5rem 1rem;
		border: none;
		display: flex;
		align-items: center;
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
		display: flex;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--color-quaternary);
		z-index: 100;
		top: 2.5rem;
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
		color: var(--color-quinary);
	}

	footer .footer-socials .iconify:hover {
		color: var(--color-senary);
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

	footer .footer-details .footer-links-center {
		grid-area: footer-links-center;
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
		margin: 0.5rem 0.5rem;
	}

	footer .footer-details .footer-links-center a:hover {
		text-decoration: none;
		color: var(--color-quinary);
	}
	footer .footer-details .footer-links-center span:first-child {
		text-decoration: none;
		color: var(--color-tertiary);
		font-size: 1rem;
		font-weight: bold;
		font-style: italic;
		margin: 0.5rem 0.5rem;
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

	@media screen and (min-width: 1024px) and (max-width: 1360px) {
		nav ul li a {
			font-size: 0.9rem;
		}

		.dropdown-content {
			top: 2.5rem;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1264px) {
		.dropdown-content {
			top: 3rem;
		}

		footer {
			min-height: 6.1rem;
		}
	}

	@media screen and (max-width: 1023px) {
		footer .footer-details {
			display: none;
		}

		footer .footer-socials a {
			margin: 0 1rem;
		}

		footer .footer-socials {
			margin-top: 2rem;
		}

		footer .footer-socials :global(svg) {
			width: 1.8rem;
			height: 1.8rem;
		}

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
			overflow-y: scroll;
			position: fixed;
			right: 0;
			top: 0;
			z-index: 999;
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

		.chevron-down {
			padding-left: 0.5rem;
			padding-top: 0.3rem;
		}

		.navbar-mobile ul li a {
			color: rgb(255, 255, 255);
			font-family: "Poppins-Bold", sans-serif;
			padding: 0.75em 2em;
			display: flex;
			text-decoration: none;
			align-items: center;
			font-size: 1rem;
			cursor: pointer;
		}

		.navbar-mobile ul li a.active {
			font-size: 1rem;
			background: #c4132c;
		}

		.nav-item-sub-container {
			display: none;
			margin-bottom: 1em;
		}

		.nav-item-sub-container-display {
			display: block;
			margin-bottom: 1em;
		}

		.nav-item-sub-container-display h4 {
			color: #fff;
			font-size: 1rem;
			font-family: "Poppins-Medium";
			margin: 0.5rem auto 0 auto;
			padding: 0.2em 0 0.2em 1em;
		}

		.nav-item-sub-container-display h4.active {
			background: #c4132c;
		}
	}
</style>
