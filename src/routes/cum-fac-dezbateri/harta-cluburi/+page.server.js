export const ssr = true;

import data from "$lib/data/harta-cluburi.json";

export async function load() {
	return { data };
}
