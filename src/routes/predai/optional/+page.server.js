export const ssr = true;

import data from "$lib/data/predai-optional.json";

export async function load() {
	return { data };
}
