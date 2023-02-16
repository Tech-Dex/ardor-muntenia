export const ssr = true;

import data from "$lib/data/echipa.json";

export async function load() {
	return { data };
}
