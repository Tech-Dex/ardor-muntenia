export const ssr = true;

import data from "$lib/data/sustinatori.json";

export async function load() {
	return { data };
}
