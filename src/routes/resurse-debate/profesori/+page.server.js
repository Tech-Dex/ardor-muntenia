export const ssr = true;

import data from "$lib/data/resurse-profesori.json";

export async function load() {
	return { data };
}
