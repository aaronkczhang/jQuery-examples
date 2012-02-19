/* $(document).ready(function() {
 
}); */

//4.5 access the id property of the DOM element referred to by this
 $(document).ready(function() {
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');
	$('#switcher button').click(function() {
		var num = parseFloat($speech.css('fontSize'));
		switch (this.id) {
			case 'switcher-large':
				num *= 1.4;
				break;
			case 'switcher-small':
				num /= 1.4;
				break;
			default:
				num = parseFloat(defaultSize);
		}
	$speech.css('fontSize', num + 'px');
	//$speech.animate({fontSize: num + 'px'}, 'slow');
	});
}); 

//4.7  
/* $(document).ready(function() {
	$('p').eq(1).hide();
	$('a.more').click(function() {
		//$('p').eq(1).fadeIn('slow');
		$('p').eq(1).slideDown('slow');
		$(this).hide();
		return false; //return false to keep the link from activating its default action
	});
}); */


//4.11 Compound effects
/* $(document).ready(function() {
	var $firstPara = $('p').eq(1);  //caching our selector
	$firstPara.hide();
	$('a.more').click(function() {
		if ($firstPara.is(':hidden')) {
			$firstPara.fadeIn('slow');
			$(this).text('read less');
		} else {
			$firstPara.fadeOut('slow');
			$(this).text('read more');
		}
	return false;
	});
}); */


//4.12
/* $(document).ready(function() {
var $firstPara = $('p').eq(1);
$firstPara.hide();
$('a.more').click(function() {
$firstPara.slideToggle('slow');
var $link = $(this);
if ($link.text() == 'read more') {
$link.text('read less');
} else {
$link.text('read more');
}
return false;
});
}); */

//4.14
/* $(document).ready(function() {
var $firstPara = $('p').eq(1);
$firstPara.hide();
$('a.more').click(function() {
$firstPara.animate({
opacity: 'toggle',
height: 'toggle'
}, 'slow');
var $link = $(this);
if ($link.text() == 'read more') {
$link.text('read less');
} else {
$link.text('read more');
}
return false;
});
}); */


//4.17

/* $(document).ready(function() {
$('div.label').click(function() {
var paraWidth = $('div.speech p').outerWidth();
var $switcher = $(this).parent();
var switcherWidth = $switcher.outerWidth();
$switcher.css({
position: 'relative'  //change from static to relative, or 'div' cannot be moved
}).animate({
borderWidth: '5px',
left: paraWidth - switcherWidth,
height: '+=20px'
}, 'slow');
});
}); */

//4.18
/* $(document).ready(function() {
$('div.label').click(function() {
var paraWidth = $('div.speech p').outerWidth();
var $switcher = $(this).parent();
var switcherWidth = $switcher.outerWidth();
$switcher
.css({position: 'relative'})
.animate({left: paraWidth - switcherWidth}, 'slow')
.animate({height: '+=20px'}, 'slow')
.animate({borderWidth: '5px'}, 'slow');
});
}); */



//4.19
/* $(document).ready(function() {
	$('div.label').click(function() {
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$switcher
			.css({position: 'relative'})
			.fadeTo('fast', 0.5)
			.animate({left: paraWidth - switcherWidth}, 'slow')
			.fadeTo('slow', 1.0)
			.slideUp('slow')
			.slideDown('slow');
	});
}); */



//4.20
/* $(document).ready(function() {
	$('div.label').click(function() {
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$switcher
			.css({position: 'relative'})
			.fadeTo('fast', 0.5)
			.animate({
				left: paraWidth - switcherWidth
			}, {
				duration: 'slow',
				queue: false //The second argument, an options map, provides the queue option, which when set
							//to false makes the animation start simultaneously with the previous one.
			})
		.fadeTo('slow', 1.0)
		.slideUp('slow')
		.slideDown('slow');
	});
}); */



//4.21
$(document).ready(function() {
$('div.label').click(function() {
var paraWidth = $('div.speech p').outerWidth();
var $switcher = $(this).parent();
var switcherWidth = $switcher.outerWidth();
$switcher
.css({position: 'relative'})
.fadeTo('fast', 0.5)
.animate({
left: paraWidth - switcherWidth
}, {
duration: 'slow',
queue: false
})
.fadeTo('slow', 1.0)
.slideUp('slow')
.css({backgroundColor: '#f00'})
.slideDown('slow');
});
});

//4.23
/* $(document).ready(function() {
	$('p').eq(2).css('border', '1px solid #333');
	$('p').eq(3).css('backgroundColor', '#ccc').hide();
}); */


//4/24
/* $(document).ready(function() {
	$('p').eq(2)
	.css('border', '1px solid #333')
	.click(function() {
		$(this).slideUp('slow').next().slideDown('slow');
	});
	$('p').eq(3).css('backgroundColor', '#ccc').hide();
}); */

//4.25
/* $(document).ready(function() {
	$('p').eq(2)
	.css('border', '1px solid #333')
	.click(function() {
		$(this).next().slideDown('slow', function() {
		$(this).slideUp('slow');
		});
	});
$('p').eq(3).css('backgroundColor', '#ccc').hide();
}); */

//4.16
$(document).ready(function() {
	$('p').eq(2)
	.css('border', '1px solid #333')
	.click(function() {
		var $clickedItem = $(this);
		$clickedItem.next().slideDown('slow', function() {
		$clickedItem.slideUp('slow');
		});
	});
$('p').eq(3).css('backgroundColor', '#ccc').hide();
});
