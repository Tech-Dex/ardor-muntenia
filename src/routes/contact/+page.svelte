<script>
	import houseIcon from "@iconify/icons-mdi/house";
	import emailIcon from "@iconify/icons-mdi/email";
	import Icon from "@iconify/svelte";
</script>

<div class="container">
	<div class="heading">
		<h1>CONTACT</h1>
		<p>
			Ne place să avem o legătură strânsă cu oamenii din comunitate, de aceea, dacă ai vreo idee sau
			vreo propunere sau vrei să afli mai multe informații despre programele noastre,
			contactează-ne.
		</p>
	</div>
	<div class="details">
		<div class="address">
			<div class="iconify">
				<Icon icon={houseIcon} width="48" />
			</div>
			<h3>VIZITEAZĂ-NE</h3>
			<p>
				Poți ajunge la sediul nostru foarte simplu, cu metroul pana la piata Victoriei sau
				autobuzele 381, 300, 783, 205.
			</p>
			<p>Strada Louis Blanc 2, AP. 40, sector 1, Bucuresti.</p>
		</div>
		<div class="email">
			<div class="iconify">
				<Icon icon={emailIcon} width="48" />
			</div>
			<h3>CONTACTEAZĂ-NE</h3>
			<p>
				Dacă vrei să afli mai multe despre programele pe care le oferim, dar și să ne oferi
				sugestii, contactează-ne.
			</p>
			<p>office@ardor-muntenia.ro</p>
		</div>
	</div>
	<div class="map">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.0525721538665!2d26.086915015776025!3d44.452593208388244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8aaa9401d75%3A0x956c0eedb0b2bbbb!2sBloc%20I1%2C%20Strada%20Louis%20Blanc%202%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1675612138811!5m2!1sen!2sro"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.heading {
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.heading h1 {
		font-size: 3rem;
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 1rem;
	}

	.heading p {
		font-size: 1.5rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin-bottom: 1rem;
	}

	.details {
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.details .address {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.details .iconify {
		color: var(--color-primary);
	}

	.details .address h3 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin-bottom: 1rem;
	}

	.details .address p {
		font-size: 1.5rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin-bottom: 1rem;
	}

	.details .address p:last-child {
		color: var(--color-primary);
	}

	.details .email {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.details .email h3 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-secondary);
		margin-bottom: 1rem;
	}

	.details .email p {
		font-size: 1.5rem;
		font-weight: 400;
		color: var(--color-secondary);
		margin-bottom: 1rem;
	}

	.details .email p:last-child {
		color: var(--color-primary);
	}

	.map {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.map iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
