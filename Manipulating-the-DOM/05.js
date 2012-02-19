
//5.1 Non-class Attributes
/* $(document).ready(function() {
	$('div.chapter a').attr({rel: 'external'});
});
 */

/**
  *5.3 Value Callback
  *Aim: the attributes we add or change must have different values each time
  *This function is then invoked once per element in the matched set.
  *Whatever data is returned from the function is used as the new value for the
  *attribute.
  */
/* $(document).ready(function() {
	$('div.chapter a').attr({
		rel: 'external',
		title: 'Learn more at Wikipedia',
		id: function(index, oldValue) {   //The first is an integer indicating the iteration count, The second contains the value of the attribute prior to modification.
			return 'wikilink-' + index;   //value callback
		}
	});
}); */

/**
  *5.4
  *  Aim:we'll enhance the title attribute of these links to be more specific about the link destination.
  */
$(document).ready(function() {
$('div.chapter a[href*="wikipedia"]').attr({  //by using [href*="wikipedia"] condition
	rel: 'external',
	title: function() {
		return 'Learn more about ' + $(this).text()  //context this: point to dom element we are manipulating each time callback in involved
				+ ' at Wikipedia.';                  //retrieve the textual content of the link. This makes our link titles nicely specific
	},
	id: function(index, oldValue) {
		return 'wikilink-' + index;
	}
});
});
//For these Boolean attributes, it is best to test and set the 'property'[.prop()] rather than the attribute to ensure consistent cross-browser behavior.


/**5.6 Creating new elements
  *While the two lines of code we've written do indeed create the elements, they don't yet
  *add the elements to the page. We need to tell the browser where these new elements should go. ---insertion method
  */
/*$(document).ready(function() {
$('<a href="#top">back to top</a>');
$('<a id="top"></a>');
});
*/
  
/**5.8 Inserting new element 
  *Aim: we will want our back to top links to appear after each paragraph
  *
  */
$(document).ready(function() {
	$('<a href="#top">back to top</a>').insertAfter('div.chapter p'); //insertAfter and insertBefore add content outside the specified element, .insertAfter() method for the links
	$('<a id="top"></a>').prependTo('body');  //inserts the anchor right at the beginning of the <body>; .prependTo() method for the anchor
});
/**1. .insertBefore() adds content outside of and before existing elements
  *2. .prependTo() adds content inside of and before existing elements
  *3. .appendTo() adds content inside of and after existing elements
  *4. .insertAfter() adds content outside of and after existing elements
  */


/**
  *5.9 Moveing Elements
  */
/* $(document).ready(function() {
	$('span.footnote').insertBefore('#footer'); //giving span.footnote elements a display value of block when they are
												//outside of <div class="chapter">
}); */


/* $(document).ready(function() {
	$('span.footnote')	
		.insertBefore('#footer')
		.wrapAll('<ol id="notes"></ol>')  //wrap the entire set inside a single <ol> using .wrapAll()
		.wrap('<li></li>'); //the order is important
		//first move all footnote before footer, then wrap the entire set in to ol, at last, wrap each individual footnote inside its own li		
}); */

/**
  *5.12 .each() method,which acts as an explicit iterator
  *It can be employed when the code we want to use on each of the matched elements
  *is too complex for the implicit iteration syntax
  *
  */
 $(document).ready(function() {
	var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
	$('span.footnote').each(function(index) {
		$(['<a href="#footnote-',index + 1,'" id="context-',index + 1,'" class="context">','<sup>',index + 1,'</sup></a>'].join('')).insertBefore(this);
		$(this).appendTo($notes).wrap('<li id="footnote-' + (index + 1) + '"></li>');
		$(['&nbsp;(<a href="#context-',index + 1,'">context</a>)'].join('')).appendTo(this);
	});
}); 


//.join()
var str = 'a' + 'b' + 'c';
var str = ['a', 'b', 'c'].join('');



/**
  *5.19 Copying Elements  .clone()
  *Aim: Cloning for pull quotes
  */
$(document).ready(function() {
	$('span.pull-quote').each(function(index) {
	var $parentParagraph = $(this).parent('p');
	$parentParagraph.css('position', 'relative');
	var $clonedCopy = $(this).clone();
	$clonedCopy
		.addClass('pulled')
		.find('span.drop')  //.find() to search inside the pull quote for any <spanclass="drop"> elements,
		.html('&hellip;')   //operate on them, specify the new HTML that is to replace the old
		.end()              //return to the pull quote itself by calling .end().
		.text($clonedCopy.text())   //stripped of any <strong>, <em>, <a href> or other inline tags.
		.prependTo($parentParagraph);
	});
});
/*
When called without arguments, .html() returns a string representation of the
HTML inside the matched element. With an argument, the contents of the element
are replaced by the supplied HTML.
*/



//5.15 Inverted Insertion Method
/* $(document).ready(function() {
var $notes = $('<ol id="notes"></ol>')
.insertBefore('#footer');
$('span.footnote').each(function(index) {
$(this)
.before([
'<a href="#footnote-',
index + 1,
'" id="context-',
index + 1,
'" class="context">',
'<sup>',
index + 1,
'</sup></a>'
].join(''))
.appendTo($notes)
.append([
'&nbsp;(<a href="#context-',
index + 1,
'">context</a>)'
].join(''))
.wrap('<li id="footnote-' + (index + 1) + '"></li>');
});
}); */




/* 
$(document).ready(function() {
$('span.pull-quote').each(function(index) {
	var $parentParagraph = $(this).parent('p');
	$parentParagraph.css('position', 'relative');
	var $clonedCopy = $(this).clone();
	$clonedCopy
		.addClass('pulled')
		.find('span.drop')
		.html('&hellip;')
			.end()
		.text($clonedCopy.text())
		.prependTo($parentParagraph);
		alert($clonedCopy.text());

});
}); */