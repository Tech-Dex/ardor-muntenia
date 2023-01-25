<script>
	import GalleryCard from "$lib/GalleryCard.svelte";
	import { onMount } from "svelte";

	let dataInveti = {
		title: "Inveti",
		description: "La școală, la facultate, sau cu prietenii, dezbaterile te ajută să ieși în evidență",
		content: [{
			header: "Sunt Elev",
			summary: "Află cum poți să devii mai persuasiv cu profesorii tăi",
			page: "inveti/elev"
		},
			{
				header: "Sunt Student",
				summary: "Află cum poți deveni cel mai bun debater din facultatea ta",
			},
		],
	};

	let dataPredai = {
		title: "Predai",
		description: "Cei mai buni profesori folosesc educația deliberativă la clasă. Intră aici să afli cum poți fi printre ei",
		content: [{
			header: "Opțional",
			summary: "Răspunde la nevoia a programei școlare de a fi reîmprospătată. Astfel, profesorii au un rol cheie în a învăța să predea această materie",
		},
			{
				header: "Olimpiadă",
				summary: "În cadrul olimpiadei naționale de dezbateri, profesorii au un rol fundamental în educarea elevilor prin calitatea de arbitru.",
			},
			{
				header: "Club",
				summary: "Profesorii se ocupă cu deschiderea cluburilor în școlile în care predau, cu ajutorul ARDOR Muntenia, care se ocupă de toate formele birocratice.",
			},
			{
				header: "Cursuri acrditate",
				summary: "ARDOR, asociația noastră umbrelă, a dezvoltat un curs acreditat de formare profesională adrsat cadrelor didactice.",
			},
			{
				header: "Tabăra de Leadership",
				summary: "Un eveniment ARDOR, care reunește în fiecare an, în Bucureșt, profesorii din întreaga țară.",
			},
		],
	};

	let dataMuncesti = {
		title: "Muncesti",
		description: "Învață dezbateri de la cei mai buni și transformă-ți viața profesională",
		content: [{
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


</script>

<div class="gallery">
	<GalleryCard data={dataInveti} backgroundImage="/images/home-section-1.png"
							 backgroundImageDark="/images/home-section-1-dark.png" />
	<GalleryCard data={dataPredai} backgroundImage="/images/home-section-2.png"
							 backgroundImageDark="/images/home-section-2-dark.png" />
	<GalleryCard data={dataMuncesti} backgroundImage="/images/home-section-3.png"
							 backgroundImageDark="/images/home-section-3-dark.png" />
</div>

<style>
    .gallery {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>
