<script>
	import "@event-calendar/core/index.css";
	import Calendar from "@event-calendar/core";
	import TimeGrid from "@event-calendar/time-grid";
	import TimeGridDay from "@event-calendar/day-grid";
	import TimeGridList from "@event-calendar/list";

	export let data;

	let plugins = [TimeGrid, TimeGridDay, TimeGridList];
	let options = {
		view: "dayGridMonth",
		height: "100%",
		headerToolbar: {
			start: "prev,next today",
			center: "title",
			end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
		},
		nowIndicator: true,
		selectable: true,
		eventClick: (info) => {
			if (info.event.extendedProps.eventLink) {
				window.open(info.event.extendedProps.eventLink, "_blank");
			}
		},

		events: data.data,
	};
</script>

<Calendar {plugins} {options} />
