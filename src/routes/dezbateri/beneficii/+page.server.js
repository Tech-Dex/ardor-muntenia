export const ssr = true;

import data from "$lib/data/beneficii.json";

export async function load() {
	return { data };
}
