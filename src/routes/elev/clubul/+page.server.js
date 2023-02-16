export const ssr = true;

import data from "$lib/data/elev-clubul.json";

export async function load() {
	return { data };
}
