export const ssr = true;

import data from "$lib/data/resurse-elevi.json";

export async function load() {
	return { data };
}
