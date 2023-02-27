export const ssr = true;

import data from "$lib/data/predai-olimpiada.json";

export async function load() {
	return { data };
}
