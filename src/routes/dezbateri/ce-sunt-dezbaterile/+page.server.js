export const ssr = true;

import data from "$lib/data/ce-sunt-dezbaterile.json";

export async function load() {
	return { data };
}
