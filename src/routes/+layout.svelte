<script>
	import "$globalCss";
	import { page } from "$app/stores";

	let path;

	$: path = $page.url.pathname;


</script>

<svelte:head>
	<title>Ardor Muntenia</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="/favicon.png">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
				rel="stylesheet">
</svelte:head>
<header>
	<div class="logo">
		<a href="/"><img src="images/logo.png" alt="logo" /></a>
	</div>
	<nav>
		<ul>
			<li><a class:active={path === "/" } href="/">Home</a></li>
			<li class="dropdown">
				<a class:active={path === "/cine-suntem"}
					 class:sub-active={path === "/despre-noi"}
					 href="/cine-suntem">Cine suntem?</a>
				<div class="dropdown-content">
					<a class:active-child={path === "/despre-noi"} href="/despre-noi">Despre noi</a>
				</div>
			</li>
			<li class="dropdown">
				<a class:active={path === "/dezbateri" } href="/dezbateri">Dezbateri</a>
				<div class="dropdown-content">
					<a href="/dezbateri">Despre noi</a>
					<a href="/dezbateri">Echipa</a>
					<a href="/dezbateri">Parteneri</a>
				</div>
			</li>
			<li class="dropdown">
				<a class:active={path === "/cum-fac-dezbateri" } href="/cum-fac-dezbateri">Cum fac Dezbateri?</a>
				<div class="dropdown-content">
					<a href="/cum-fac-dezbateri">Despre noi</a>
					<a href="/cum-fac-dezbateri">Echipa</a>
					<a href="/cum-fac-dezbateri">Parteneri</a>
				</div>
			</li>
			<li class="dropdown">
				<a class:active={path === "/resurse-debate" } href="/resurse-debate">Resurse Debate</a>
				<div class="dropdown-content">
					<a href="/resurse-debate">Despre noi</a>
					<a href="/resurse-debate">Echipa</a>
					<a href="/resurse-debate">Parteneri</a>
				</div>
			</li>
			<li><a class:active={path === "/contact" } href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<div class="slot-content">
	<slot />
</div>

<footer>
	<div>
		&copy; 2023
	</div>
</footer>
<style>
    :global(html) {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }

    :global(header) {
        height: 10vh;
        background-color: var(--color-quaternary);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    :global(.slot-content) {
        height: 80vh;
        background-color: lightblue;
    }

    :global(footer) {
        height: 10vh;
        background-color: var(--color-secondary);
        color: var(--color-tertiary);
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
        border-radius: 5px;;
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


</style>
