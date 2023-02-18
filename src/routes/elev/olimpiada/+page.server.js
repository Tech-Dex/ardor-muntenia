export const ssr = true;

import data from "$lib/data/elev-olimpiada.json";

export async function load() {
	return { data };
}
