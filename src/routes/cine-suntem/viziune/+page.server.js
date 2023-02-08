export const ssr = true;

import data from "$lib/data/viziune.json";

export async function load() {
	return { data };
}
