## Invalid JSON

While in the `invalid_json_bug` directory, start the python http server by typing `python -m SimpleHTTPServer` and navigate to
localhost:8000 in your browser to reproduce the bug.

The script `main.js` fetches a json file that contains a greeting ("Hello, World"), and adds the greeting to index.html:
```
$(document).ready(function(){
	$.getJSON('json/bug.json', function(data) {
		$('#greeting').html(data.greeting);
	});
});
```

We should see this: 
![Good output](https://raw.githubusercontent.com/celeritas17/joy_of_debugging/master/invalid_json_bug/good_output.png)

But instead we see this: 
![Bad output](https://raw.githubusercontent.com/celeritas17/joy_of_debugging/master/invalid_json_bug/bad_output.png)

#Why?

Go [here](https://rkoven.svbtle.com/the-joy-of-debugging-or-finding-out-how-things-dont-work) to find out. 