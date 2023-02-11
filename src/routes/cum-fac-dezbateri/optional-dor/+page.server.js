export const ssr = true;

import data from "$lib/data/optionalul-dor.json";

export async function load() {
	return { data };
}
