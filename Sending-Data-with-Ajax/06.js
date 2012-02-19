//6.1 Appending HTML
/*  $(document).ready(function() {
	 $('#letter-a a').click(function() {
		 $('#dictionary').load('a.html');
		 return false;
	 });
}); */
$(document).ready(function() {
	$('#letter-a a').click(function() {
	//The .load() can take a callback to be fired on completion
		$('#dictionary').hide().load('a.html', function(){  //First, we hide the target element, and then initiate the load.
			$(this).fadeIn();
		});
		return false;
	});
});


/**6.6   $.getJSON(),   
$.each()	
this function takes an array or map as its first parameter and a callback function as its second. 
Each time through the loop, the current iteration index and the current item in the array or map are passed as two
parameters to the callback function,
  *
  */
$(document).ready(function() {
	$('#letter-b a').click(function() {
		$.getJSON('b.json', function(data) {
			var html = '';
			$.each(data, function(entryIndex, entry) {      //global functions, $.each()
			html += '<div class="entry">';
			html += '<h3 class="term">' + entry.term + '</h3>';
			html += '<div class="part">' + entry.part + '</div>';
			html += '<div class="definition">';
			html += entry.definition;
			if (entry.quote) {
				html += '<div class="quote">';
				$.each(entry.quote, function(lineIndex, line) {       //global functions, $.each()
					html += '<div class="quote-line">' + line + '</div>';
				});
				if (entry.author) {
					html += '<div class="quote-author">' + entry.author +'</div>';
				}
				html += '</div>';
			}
			html += '</div>';
			html += '</div>';
			});
		$('#dictionary').html(html);
		});
		return false;
	});
});



//6.7 Executing a script (javascript)
$(document).ready(function() {
$('#letter-c a').click(function() {
$.getScript('c.js');
return false;
});
});



/**6.9 Loading an XML document
  *use the normal .find(), .filter(), and other traversal methods on the XML document
  *
  *to limit the entries to those with nested <quote> elements by changing entry to entry:has(quote).  
  *entry:has(quote[author])
  */
$(document).ready(function() {
$('#letter-d a').click(function() {
$.get('d.xml', function(data) {
$('#dictionary').empty();
$(data).find('entry').each(function() {  //$(data).find('entry:has(quote[author])').each(function() {
var $entry = $(this);
var html = '<div class="entry">';
html += '<h3 class="term">' + $entry.attr('term');
html += '</h3>';
html += '<div class="part">' + $entry.attr('part');
html += '</div>';
html += '<div class="definition">';
html += $entry.find('definition').text();
var $quote = $entry.find('quote');
if ($quote.length) {
html += '<div class="quote">';
$quote.find('line').each(function() {
html += '<div class="quote-line">';
html += $(this).text() + '</div>';
});
if ($quote.attr('author')) {
html += '<div class="quote-author">';
html += $quote.attr('author') + '</div>';
}
html += '</div>';
}
html += '</div>';
html += '</div>';
$('#dictionary').append($(html));
});
});
return false;
});
});

/***************************************************
  *Passing data to the server
  **************************************************/


//6.10  GET
$(document).ready(function() {
	$('#letter-e a').click(function() {
		var requestData = {term: $(this).text()};  
		$.get('e.php', requestData, function(data) { //the second parameter, which allows us to supply a map of keys and values that become part of the query string.
			$('#dictionary').html(data);
		});
		return false;
	});
});
//.load() mechanism, appending the query string right to the URL and fetching data with addresses like
//'e.php?term=eavesdrop' directly

//6.11 POST
/* $(document).ready(function() {
	$('#letter-e a').click(function() {
		var requestData = {term: $(this).text()};  //have jQuery construct the query string based on a map we provide to the $.get() function
		$.post('e.php', requestData, function(data) {
			$('#dictionary').html(data);
		});
		return false;
	});
}); */



//6.12 .load() uses POST by default
/* $(document).ready(function() {
	$('#letter-e a').click(function() {
		var requestData = {term: $(this).text()};
		$('#dictionary').load('e.php', requestData);  //.load() uses POST by default
		return false;
	});
}); */


//6.13
/* $(document).ready(function() {
	$('#letter-f form').submit(function(event) {
		event.preventDefault();
		$.get('f.php', {'term': $('input[name="term"]').val()},function(data) {
			$('#dictionary').html(data);
		});
	});
}); */


//6.14 Serializing a form
$(document).ready(function() {
	$('#letter-f form').submit(function(event) {
		event.preventDefault();
		//.serialize() method acts on a jQuery object and translates the matched DOM elements into a query string that can be passed
        //along with an Ajax request.
		var formValues = $(this).serialize();
		//$.get('f.php', {'term': $('input[name="term"]').val()}, function(data) {		
		$.get('f.php', formValues, function(data) {
			$('#dictionary').html(data);
		});
	});
});


/**6.15 Observer Functions 
  *.ajaxStart() and .ajaxStop(), All of the observers are global,
  */
$(document).ready(function() {
	$('<div id="loading">Loading...</div>')
	.insertBefore('#dictionary')
	.ajaxStart(function() {
		$(this).show();
	}).ajaxStop(function() {
		$(this).hide();
	});
});

/**
  *Ajax and events
  *Aim: clicking on the term name would show or hide the associated definition
  */
$(document).ready(function() {
	//$('h3.term').click(function() {    //a click does nothing with this code
		//$(this).siblings('.definition').slideToggle(); //the terms have not yet been added to the document when we attach the click handlers
	$('h3.term').live('click',function() {  //event delegation
		$(this).siblings('.definition').slideToggle();
	});
});


/**
  *6.20 Using JSONP for remote data
  *
  *A PHP implementation of the JSONP technique is quite simple, as follows:
  *<?php
  *  print($_GET['callback'] .'('. $data .')');  //$data is a variable containing a string representation of a JSON file
  *?>
  */
$(document).ready(function() {
	var url = 'http://examples.learningjquery.com/jsonp/g.php';
	$('#letter-g a').click(function() {
		$.getJSON(url + '?callback=?', function(data) {
			var html = '';
			$.each(data, function(entryIndex, entry) {
			html += '<div class="entry">';
			html += '<h3 class="term">' + entry.term + '</h3>';
			html += '<div class="part">' + entry.part + '</div>';
			html += '<div class="definition">';
			html += entry.definition;
			if (entry.quote) {
				html += '<div class="quote">';
				$.each(entry.quote, function(lineIndex, line) {
				html += '<div class="quote-line">' + line + '</div>';
			});
				if (entry.author) {
					html += '<div class="quote-author">' +
					entry.author + '</div>';
				}
				html += '</div>';
			}
		html += '</div>';
		html += '</div>';
		});
		$('#dictionary').html(html);
		});
	return false;
	});
});

/**6.23 Loading parts of an HTML page
provide a jQuery
selector expression. If present, then this expression is used to locate a portion of the
loaded document. Only the matched part of the document is inserted into the page.
  */
$(document).ready(function() {
	$('#letter-h a').click(function() {
		$('#dictionary').load('h.html .entry');
		return false;
	});
});