$(document).ready(function(){
	$.getJSON('json/bug.json', function(data) {
		$('#greeting').html(data.greeting);
	});
});
