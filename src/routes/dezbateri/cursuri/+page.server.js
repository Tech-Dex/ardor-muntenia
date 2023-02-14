export const ssr = true;

import data from "$lib/data/cursuri.json";

export async function load() {
	return { data };
}
