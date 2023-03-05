export async function load() {
	const response = await fetch(
		"https://raw.githubusercontent.com/Tech-Dex/ardor-muntenia/master/src/lib/data/calendar.json",
	);
	const data = await response.json();
	return { data };
}
