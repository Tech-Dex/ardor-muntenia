export const ssr = true;

import data from "$lib/data/arhiva.json";

export async function load() {
	return { data };
}
