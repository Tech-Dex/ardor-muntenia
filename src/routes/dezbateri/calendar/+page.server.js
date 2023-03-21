import { parse } from "csv-parse/sync";

export async function load() {
	const response = await fetch(
		"https://docs.google.com/spreadsheets/d/1tVl_gnvAe-xQxec8np15XkJf4yLx9sCd-UL_lHLz91s/gviz/tq?tqx=out:csv&sheet=Sheet1",
	);
	const csv = await response.text();

	const records = parse(csv, {
		columns: true,
		skip_empty_lines: true,
	});

	const data = records.map((record) => {
		return {
			start: record["Start"],
			end: record["End"],
			titleHTML: record["Title"],
			extendedProps: {
				eventLink: record["Event Link"],
			},
			color: record["Color"],
			allDay: record["All Day"] === "TRUE",
		};
	});
	console.log(data);
	return { data };
}
