$(document).ready(function() {
	var event_name = $('#task');
	var event_start = $('#start_event');
	$('#start_event').pickmeup();	
	$('#calendar').fullCalendar({
		firstDay:1,
		header:{
			left:'prev',
			center:'title',
			right:'next'
		},
		monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень','Травень', 'Червень', 'Липень', 'Серпень',  'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
		dayNamesShort: ["НЕДІЛЯ","ПОНЕДІЛОК","ВІВТОРОК","СЕРЕДА","ЧЕТВЕР","П'ЯТНИЦЯ","СУБОТА"],
		dayNames: ["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],
		selectable: true,
		editable: true,
		eventLimit: true,

		select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
			},
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Зустріч',
					start: '2016-03-01'
				},
				{
					title: 'Подорож',
					start: '2016-03-07',
					end: '2016-03-13'
				},
				{
					title: 'Свято',
					start: '2016-03-08'
				},
				{
					title: 'Відпочинок',
					start: '2016-03-08'
				},
				{
					title: 'Подія2',
					start: '2016-03-08'
				},
				{
					title: 'Подія3',
					start: '2016-03-08'
				}
			]

	});		
	});

$(document).ready(function(){
	$(".up").magnificPopup();
});
