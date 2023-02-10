export const ssr = true;

import data from "$lib/data/optional-dor.json";

export async function load() {
	return { data };
}
