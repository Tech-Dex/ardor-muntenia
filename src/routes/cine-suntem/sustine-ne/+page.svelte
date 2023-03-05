<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import cloudDownload from "@iconify/icons-mdi/cloud-download";
	import documentOutline from "@iconify/icons-mdi/file-document-outline";
	import email from "@iconify/icons-mdi/email";
	let path;
	$: path = $page.url.pathname;

	const gif = "/images/sustine.gif";
</script>

<Fullpage>
	<FullpageSection>
		<div class="section-container">
			<div class="content">
				<img src={gif} alt="Sustine-ne cu 2.5%" />
				<div class="texts">
					<h2>Despre ARDOR Mutenia</h2>
					<h5>
						Ajutați-ne să creștem vocea generației viitoare și redirecțioenază 3.5% din impozitul pe
						venit. Poți face asta în 3 pași urmând instrucțiunile de mai jos.
					</h5>
				</div>
			</div>
			<div class="buttons">
				<div class="button">
					<a href={path}>Doneaza</a>
				</div>
				<div class="button">
					<a href={path}>Redirectioneaza</a>
				</div>
				<div class="button">
					<a href={path}>Sponsorizeaza</a>
				</div>
			</div>
			<div class="content">
				<div class="texts">
					<h2 class="align-right">Ce facem?</h2>
					<h5 class="align-right">
						Ajutați-ne să creștem vocea generației viitoare și redirecțioenază 3.5% din impozitul pe
						venit. Poți face asta în 3 pași urmând instrucțiunile de mai jos.
					</h5>
				</div>
				<img src={gif} alt="Sustine-ne cu 2.5%" />
			</div>
		</div>
	</FullpageSection>
	<FullpageSection>
		<div class="section-container" id="section2">
			<div class="header-texts">
				<h1>Doneaza</h1>
				<h1>Redirectioneaza</h1>
			</div>
			<div class="section-content">
				<h1>Pasul 1</h1>
				<h3>Apasă pe butonul „Formular” pentru a-l descărca precompletat cu datele asociației.</h3>
				<br />
				<h3>Dacă dorești să-l trimitem noi, completează și împuternicirea.</h3>
				<div class="buttons">
					<div class="button-icon">
						<div class="iconify">
							<Icon icon={cloudDownload} width="100%" />
						</div>
						<a href="https://redirectioneaza.ro/ardor-muntenia">Formular</a>
					</div>
					<div class="button-icon">
						<div class="iconify">
							<Icon icon={cloudDownload} width="100%" />
						</div>
						<a href="https://redirectioneaza.ro/ardor-muntenia">Împuternicire</a>
					</div>
				</div>
			</div>
			<div class="section-content no-background">
				<h1>Pasul 2</h1>
				<ul>
					<li>Printeaza</li>
					<li>Semneaza</li>
					<li>Scaneaza</li>
				</ul>
			</div>
		</div>
	</FullpageSection>
	<FullpageSection>
		<div class="section-container" id="section3">
			<div class="section-content">
				<h1>Pasul 3 (A)</h1>
				<h3>
					Depune <span>personal</span>, prin <span>scrisoare recomandată </span> sau prin
					<span>SPV</span> formularul la oficiul ANAF de care aparții.
				</h3>
				<div class="button-icon button-icon-margin">
					<div class="iconify">
						<Icon icon={documentOutline} width="100%" />
					</div>
					<a href="https://pfinternet.anaf.ro/my.policy">Depunde prin SPV</a>
				</div>
			</div>
			<div class="section-content">
				<h1>Pasul 3 (B)</h1>
				<h3>
					Sau trimite-ne un email cu <span>formularul</span> și <span>împuternicirea</span> atașate și
					îl depunem noi pentru tine.
				</h3>
				<div class="button-icon button-icon-margin">
					<div class="iconify">
						<Icon icon={email} width="100%" />
					</div>
					<a href="adrian.malaies.popescu@gmail.com">Trimite prin email</a>
				</div>
			</div>
			<h1>Sponsorizeaza</h1>
		</div>
	</FullpageSection>
	<FullpageSection>
		<div class="section-container">
			<div class="section-content" style="background-color: var(--color-primary);">
				<h1>Ce facem cu banii?</h1>
				<ul>
					<li>Susții organizarea de training-uri și competiții pentru elevii din toată țara.</li>
					<li>Susții dezvoltarea multilaterală a noii generații.</li>
					<li>Suții dezvoltarea spiritului civic.</li>
					<li>Susții valori precum gândirea critică cooperarea, fairplay-ul și munca în echipă.</li>
				</ul>
				<p>
					ARDOR Muntenia se ocupă de educarea și formarea profesională a multor tineri de liceu, dar
					și de facultate. Munca noastră este voluntară și consistă în sute de ore de training,
					organizare de evenimente, cursuri și competiții.
				</p>
			</div>
			<div class="counters">
				<div class="counter-container">
					<h2>1,000 +</h2>
					<p>Beneficiari Anuali</p>
				</div>
				<div class="counter-container">
					<h2>50 +</h2>
					<p>Cluburi de Dezbateri</p>
				</div>
				<div class="counter-container">
					<h2>20 +</h2>
					<p>Evenimente Recurente</p>
				</div>
			</div>
		</div>
	</FullpageSection>
</Fullpage>

<style>
	.section-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.content {
		display: flex;
		align-items: center;
		margin: 1rem 0;
	}
	.content img {
		width: 12rem;
		height: 10rem;
	}
	.content h2 {
		margin: 0 1rem 0 1rem;
	}
	.content h5 {
		margin: 0 1rem 0 1rem;
		font-weight: 400;
		letter-spacing: 1px;
	}
	.align-right {
		text-align: right;
	}
	.buttons {
		width: 100%;
		background-color: var(--color-secondary);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.button {
		width: 40%;
		background-color: var(--color-primary);
		text-align: center;
		padding: 0.4rem;
		margin: 1rem;
		border-radius: 0.5rem;
	}
	.button a {
		color: #fff;
		text-decoration: none;
	}
	.header-texts {
		text-align: center;
	}
	.header-texts h1 {
		margin: 1rem;
		letter-spacing: 4px;
	}
	.section-content {
		width: 100%;
		background-color: var(--color-secondary);
		color: #fff;
		display: flex;
		text-align: center;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
	}
	.section-content p {
		margin: 0 2rem;
		font-style: italic;
		letter-spacing: 1px;
		text-align: center;
	}
	.section-content ul li {
		margin: 0.4rem 1rem;
		list-style-type: decimal;
		line-height: 1.4rem;
		text-align: left;
	}
	.section-content h1 {
		margin: 1rem;
		font-size: 1.8rem;
		letter-spacing: 2px;
	}
	.section-content h3 {
		margin: 0 1rem;
		font-size: 1rem;
		font-weight: 100;
	}
	.section-content span {
		font-weight: bold;
	}
	.button-icon {
		display: flex;
		align-items: center;
		border: 1px solid #fff;
		border-radius: 0.5rem;
		padding: 0.2rem;
		margin: 0.4rem 0;
	}
	.button-icon a {
		text-decoration: none;
		color: #fff;

		margin-right: 0.4rem;
	}
	.button-icon-margin {
		margin: 1rem 0;
	}
	.iconify {
		width: 2rem;
		margin: 0 0.4rem;
	}
	.no-background {
		background-color: #fff;
		color: var(--color-secondary);
	}
	.no-background h1 {
		margin: 0;
	}
	.no-background ul li {
		font-size: 1.2rem;
		letter-spacing: 2px;
		margin: 0.4rem 0;
	}
	#section3 {
		margin-top: 3rem;
	}
	#section3 h1 {
		font-size: 2rem;
	}
	.counters {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}
	.counter-container {
		text-align: center;
	}
	.counter-container h2 {
		margin: 0.4rem 0.4rem 0.1rem 0.4rem;
		font-weight: 100;
		color: var(--color-primary);
	}
	.counter-container p {
		margin: 0 1rem;
		color: var(--color-secondary);
	}

	@media screen and (min-width: 680px) {
		.content {
			justify-content: center;
			margin-top: 1rem;
		}
		.content img {
			width: 20rem;
			height: 20rem;
		}
		.content h2 {
			font-size: 2rem;
			margin: 1rem;
		}
		.content h5 {
			font-size: 1.4rem;
		}
		.texts {
			width: 50%;
		}
		.buttons {
			flex-direction: row;
			justify-content: center;
		}
		.button {
			margin: 1.4rem;
		}
		.button a {
			font-size: 1.4rem;
		}
		.button-icon {
			margin: 2rem;
			padding: 0.4rem 1rem;
		}
		.button-icon a {
			font-size: 1.2rem;
		}
		.header-texts {
			margin-top: 3rem;
		}
		.header-texts h1 {
			font-size: 2rem;
		}
		.section-content h1 {
			font-size: 2rem;
		}
		.section-content h3 {
			font-size: 1.4rem;
			margin: 0 2rem;
			letter-spacing: 1px;
			line-height: 2rem;
		}
		.no-background h1 {
			margin: 1rem;
		}
		.no-background ul li {
			font-size: 1.6rem;
			letter-spacing: 4px;
			margin: 1.6rem 0;
		}
		.section-content p {
			margin: 1rem 2rem;
			font-style: italic;
			letter-spacing: 1px;
			font-size: 1.4rem;
			line-height: 2rem;
			text-align: center;
		}
		.section-content ul li {
			margin: 0.4rem 4rem;
			list-style-type: decimal;
			line-height: 2rem;
			font-size: 1.6rem;
			text-align: left;
		}
		.counters {
			margin: 4rem;
		}
		.counter-container {
			margin: 1rem 0;
		}
		.counter-container h2 {
			font-size: 3rem;
			margin: 0 1rem;
		}
		.counter-container p {
			margin: 0 1rem;
			color: var(--color-secondary);
			font-size: 1.6rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.content img {
			width: 25rem;
			height: 25rem;
		}
		.content h2 {
			font-size: 2.4rem;
			margin: 1rem;
		}
		.content h5 {
			font-size: 1.6rem;
		}
		.button {
			width: 20rem;
		}
		.header-texts h1 {
			font-size: 3rem;
		}
		.section-content h1 {
			font-size: 2.4rem;
		}
		#section3 h1 {
			font-size: 2.4rem;
		}
		.section-content h3 {
			margin: 0 6rem;
			font-size: 1.8rem;
		}
		.no-background h1 {
			margin: 0;
		}
		.no-background ul li {
			font-size: 2rem;
			letter-spacing: 2.4px;
			margin: 0.4rem 0;
		}
	}
	@media screen and (min-width: 1400px) {
		.content img {
			width: 25rem;
			height: 25rem;
		}
		.content h2 {
			font-size: 3rem;
			margin: 1rem;
		}
		.content h5 {
			font-size: 1.6rem;
			line-height: 3rem;
		}
		.header-texts h1 {
			font-size: 3rem;
		}
		.section-content h1 {
			font-size: 3rem;
		}
		.section-content h3 {
			margin: 0 6rem;
			font-size: 2rem;
		}
		#section3 h1 {
			font-size: 3rem;
		}
		.no-background ul li {
			font-size: 2.4rem;
			letter-spacing: 2.4px;
			line-height: 3.2rem;
			margin: 1rem 0;
		}
		.section-content p {
			margin: 2rem 10rem;
			font-style: italic;
			letter-spacing: 4px;
			font-size: 1.6rem;
			text-align: center;
		}
		.section-content ul li {
			margin: 0.4rem 1rem;
			font-size: 2rem;
			line-height: 3rem;
		}
		.counter-container {
			margin: 2rem 0;
		}
		.counter-container h2 {
			font-size: 4rem;
			margin: 1rem 2rem;
		}
		.counter-container p {
			margin: 0 2rem;
			color: var(--color-secondary);
			font-size: 2rem;
		}
	}
</style>
