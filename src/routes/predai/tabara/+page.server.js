export const ssr = true;

import data from "$lib/data/predai-tabara.json";

export async function load() {
	return { data };
}
