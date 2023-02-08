export const ssr = true;

import data from "$lib/data/proiecte.json";

export async function load() {
	return { data };
}
