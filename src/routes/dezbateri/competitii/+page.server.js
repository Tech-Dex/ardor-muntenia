export const ssr = true;

import data from "$lib/data/competitii.json";

export async function load() {
	return { data };
}
