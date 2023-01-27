<script>
	import GalleryCard from "$lib/GalleryCard.svelte";
	import accountSchool from "@iconify/icons-mdi/account-school";
	import schoolIcon from "@iconify/icons-mdi/school";
	import GalleryCardMobile from "$lib/GalleryCardMobile.svelte";
	import { Fullpage, FullpageSection } from "svelte-fullpage";

	let dataInveti = {
		title: "Inveti",
		description:
			"La școală, la facultate, sau cu prietenii, dezbaterile te ajută să ieși în evidență",
		content: [
			{
				icon: accountSchool,
				header: "Sunt Elev",
				summary: "Află cum poți să devii mai persuasiv cu profesorii tăi",
				page: "inveti/elev",
			},
			{
				icon: schoolIcon,
				header: "Sunt Student",
				summary: "Află cum poți deveni cel mai bun debater din facultatea ta",
			},
		],
	};

	let dataPredai = {
		title: "Predai",
		description:
			"Cei mai buni profesori folosesc educația deliberativă la clasă. Intră aici să afli cum poți fi printre ei",
		content: [
			{
				header: "Opțional",
				summary:
					"Răspunde la nevoia a programei școlare de a fi reîmprospătată. Astfel, profesorii au un rol cheie în a învăța să predea această materie",
			},
			{
				header: "Olimpiadă",
				summary:
					"În cadrul olimpiadei naționale de dezbateri, profesorii au un rol fundamental în educarea elevilor prin calitatea de arbitru.",
			},
			{
				header: "Club",
				summary:
					"Profesorii se ocupă cu deschiderea cluburilor în școlile în care predau, cu ajutorul ARDOR Muntenia, care se ocupă de toate formele birocratice.",
			},
			{
				header: "Cursuri acrditate",
				summary:
					"ARDOR, asociația noastră umbrelă, a dezvoltat un curs acreditat de formare profesională adrsat cadrelor didactice.",
			},
			{
				header: "Tabăra de Leadership",
				summary:
					"Un eveniment ARDOR, care reunește în fiecare an, în Bucureșt, profesorii din întreaga țară.",
			},
		],
	};

	let dataMuncesti = {
		title: "Muncesti",
		description: "Învață dezbateri de la cei mai buni și transformă-ți viața profesională",
		content: [
			{
				header: "DialogON",
				summary: "Află cum poți să devii mai persuasiv cu profesorii tăi",
			},
			{
				header: "British Council Debate",
				summary: "Află cum poți deveni cel mai bun debater din facultatea ta",
			},
			{
				header: "Coaching",
				summary: "Află cum poți deveni cel mai bun debater din facultatea ta",
			},
		],
	};

	let dataLanding = {
		title: "Bine ai venit",
		description: "Hai la dezbateri!",
		content: [],
	};
</script>

<div class="gallery">
	<Fullpage>
		<FullpageSection title={dataLanding.title}>
			<div class="welcome-landing"></div>
		</FullpageSection>
		<FullpageSection>
			<GalleryCard
				data={dataInveti}
				backgroundImage="/images/home-section-1.png"
				backgroundImageDark="/images/home-section-1-dark.png"
			/>
			<GalleryCard
				data={dataPredai}
				backgroundImage="/images/home-section-2.png"
				backgroundImageDark="/images/home-section-2-dark.png"
			/>
			<GalleryCard
				data={dataMuncesti}
				backgroundImage="/images/home-section-3.png"
				backgroundImageDark="/images/home-section-3-dark.png"
			/>
				</FullpageSection>
	</Fullpage>
</div>

<div class="gallery-mobile">
	<Fullpage>
		<GalleryCardMobile data={dataLanding} backgroundImage="/images/home-section-1.png" />
		<GalleryCardMobile data={dataInveti} backgroundImage="/images/home-section-1-dark.png" />
		<GalleryCardMobile data={dataPredai} backgroundImage="/images/home-section-2-dark.png" />
		<GalleryCardMobile data={dataMuncesti} backgroundImage="/images/home-section-3-dark.png" />
	</Fullpage>
</div>

<style>
	.gallery {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.welcome-landing {
		background-image: url("https://4kwallpapers.com/images/walls/thumbs_3t/2068.jpg");
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
