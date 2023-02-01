<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextTwoImages from "$lib/content/BoxTextTwoImages.svelte";

	let imageOneUrl = "/images/elevi.webp";
	let imageTwoUrl = "/images/instructori.webp";
	let titleOne = "Elevi";
	let titleTwo = "Instructori";
	let descOne =
		"Probabil că dezbaterile sunt cea mai bună unealtă prin care poți să îți impresionezi profesorii, prietenii și potențialii angajatori. Noi îți oferim oportunitatea să te dezvolți pe plan personal și profesional într-un cadru academic, dar și să te distrezi în timp ce faci acest lucru.";
	let descTwo =
		"Oferim posibilitatea atât elevilor cât și profesorilor să învețe mai multe despre artă dezbaterii. În acest sens, noi oferim cursuri instructorilor de dezbateri în care aceștia învață cum să predea tinerilor debateri tehnică argumentării și oratoriei.";
</script>

<Fullpage>
	<FullpageSection name="Clubul">
		<BoxTextTwoImages {imageOneUrl} {imageTwoUrl} {titleOne} {titleTwo} {descOne} {descTwo} />
	</FullpageSection>
</Fullpage>
