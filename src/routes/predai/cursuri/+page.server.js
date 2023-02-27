export const ssr = true;

import data from "$lib/data/predai-cursuri.json";

export async function load() {
	return { data };
}
