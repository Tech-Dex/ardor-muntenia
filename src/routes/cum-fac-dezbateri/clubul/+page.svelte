<script>
	import { Fullpage, FullpageSection } from "svelte-fullpage";
	import BoxTextTwoImages from "$lib/content/BoxTextTwoImages.svelte";
	import Quadrate from "$lib/content/Quadrate.svelte";
	import castleIcon from "@iconify/icons-mdi/castle";
	import accountStudent from "@iconify/icons-mdi/account-student";

	let topLeftBackgroundImage = "/images/495-1920x1080.webp";
	let bottomRightBackgroundImage = "/images/939-1920x1080.webp";
	let topRightHeading = "Clubul";
	let topRightText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem.";
	let bottomLeftHeading = "Clubul 2";
	let bottomLeftText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet lorem.";

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
	<FullpageSection title="Clubul">
		<Quadrate
			{topLeftBackgroundImage}
			{bottomRightBackgroundImage}
			topRightIcon={castleIcon}
			{topRightHeading}
			{topRightText}
			bottomLeftIcon={accountStudent}
			{bottomLeftHeading}
			{bottomLeftText}
		/>
	</FullpageSection>
	<FullpageSection title="Clubul">
		<BoxTextTwoImages {imageOneUrl} {imageTwoUrl} {titleOne} {titleTwo} {descOne} {descTwo} />
	</FullpageSection>
</Fullpage>
