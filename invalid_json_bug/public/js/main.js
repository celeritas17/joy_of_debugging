$(document).ready(function(){
	$.getJSON('json/bug.json', function(data) {
		console.log('Success!');
		$('#greeting').html(data.greeting);
	});
});
