export const ssr = true;

import data from "$lib/data/oportunitati.json";

export async function load() {
	return { data };
}
