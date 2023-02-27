export const ssr = true;

import data from "$lib/data/predai-clubul.json";

export async function load() {
	return { data };
}
