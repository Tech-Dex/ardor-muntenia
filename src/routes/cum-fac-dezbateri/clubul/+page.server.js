export const ssr = true;

import data from "$lib/data/clubul.json";

export async function load() {
	return { data };
}
