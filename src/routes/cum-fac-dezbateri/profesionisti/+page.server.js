export const ssr = true;

import data from "$lib/data/profesionisti.json";

export async function load() {
	return { data };
}
