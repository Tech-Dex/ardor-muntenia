export const ssr = true;

import data from "$lib/data/home.json";

export async function load() {
	return { data };
}
