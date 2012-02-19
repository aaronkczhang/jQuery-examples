//3.1
/* $(document).ready(function() {
   $('#switcher-large').bind('click', function() {
    $('body').addClass('large');
  });
});  */

//3.2
/*  $(document).ready(function (){
  $('#switcher-default').bind('click', function() {
    $('body').removeClass('narrow');
	$('body').removeClass('large');
  });
  $('#switcher-narrow').bind('click', function() {
	$('body').addClass('narrow');
	$('body').removeClass('large');
  });
  $('#switcher-large').bind('click', function() {
	$('body').removeClass('narrow');
	$('body').addClass('large');
  });
}); */

//3.3
/*  $(document).ready(function (){
  $('#switcher-default').addClass('selected').bind('click', function() {
    $('body').removeClass('narrow');
	$('body').removeClass('large');
	$('#switcher button').removeClass('selected');
	$(this).addClass('selected');
  });
  $('#switcher-narrow').bind('click', function() {
	$('body').addClass('narrow');
	$('body').removeClass('large');
	$('#switcher button').removeClass('selected');
	$(this).addClass('selected');
  });
  $('#switcher-large').bind('click', function() {
	$('body').removeClass('narrow');
	$('body').addClass('large');
	$('#switcher button').removeClass('selected');
	$(this).addClass('selected');
  });
}); 
 */
 
/* $(document).ready(function() {
	$('#switcher-default').addClass('selected');
	$('#switcher button').bind('click', function() {
		$('body').removeClass();
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	$('#switcher-narrow').bind('click', function() {
		$('body').addClass('narrow');
	});
	$('#switcher-large').bind('click', function() {
		$('body').addClass('large');
	});
}); */
 
 //3.7
/*  $(document).ready(function() {
	$('#switcher-default').addClass('selected');
	$('#switcher button').bind('click', function() {
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
}); */


//3.8  Shorthand events  .click()
/* $(document).ready(function() {
	$('#switcher-default').addClass('selected');
	$('#switcher button').click(function() {
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
}); */


//3.9 Compound events  .toggle()  .hover()
/* $(document).ready(function() {
	$('#switcher h3').toggle(function() {
	$('#switcher button').addClass('hidden');
	}, function() {
		$('#switcher button').removeClass('hidden');
	});
}); */

//3.10  .toggleClass()automatically check for the presence of the class before applying or removing it
/* $(document).ready(function() {
	$('#switcher h3').click(function() {
		$('#switcher button').toggleClass('hidden');
	});
}); */


//3.11
/* $(document).ready(function() {
	$('#switcher h3').hover(function() {
		$(this).addClass('hover');
		}, function() {
		$(this).removeClass('hover');
	});
}); */



//3.12 side effects of event bubbling
/* $(document).ready(function() {
	$('#switcher').click(function() {
		$('#switcher button').toggleClass('hidden');
	});
}); */

//3.12 with event object
//side effects: clicking on the label, <h3>, now does nothing, because it too is a sub-element.
/* $(document).ready(function() {
	$('#switcher').click(function (event) {
		if( event.target == this) {
			$('#switcher button').toggleClass('hidden');
		}
	});
}); */


//3.14  .stopPropagation()
/* $(document).ready(function() {
	$('#switcher').click(function(event) {
		$('#switcher button').toggleClass('hidden');
	});
}); */

/* $(document).ready(function() {
	$('#switcher-default').addClass('selected');
	$('#switcher button').click(function(event) {
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		event.stopPropagation();
	});
}); */

//Default actions   .preventDefault()




//Event delegation  .is()
//side effect:The handler for the switcher visibility toggle is now bound to
//the same element as the handler for the buttons, so halting the event bubbling does
//not stop the toggle from being triggered.
/* $(document).ready(function() {
$('#switcher').click(function(event) {
if ($(event.target).is('button')) {
var bodyClass = event.target.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(event.target).addClass('selected');
event.stopPropagation();
}
});
}); */


//3.16
/*  $(document).ready(function() {
	$('#switcher h3').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
});
$(document).ready(function() {
	$('#switcher').click(function(event) {
		if (!$(event.target).is('button')) {
		$('#switcher button').toggleClass('hidden');
		}
	});
	//$('#switcher-narrow, #switcher-large').click(function() {
		//$('#switcher').unbind('click');
	//});
});
$(document).ready(function() {
$('#switcher-default').addClass('selected');
$('#switcher').click(function(event) {
if ($(event.target).is('button')) {
var bodyClass = event.target.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(event.target).addClass('selected');
}
});
});  */

//3.17 tuning, refactoring, avoid some of the code repetition
//by using if-else
/* $(document).ready(function() {
$('#switcher-default').addClass('selected');
$('#switcher').click(function(event) {
if ($(event.target).is('button')) {
var bodyClass = event.target.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(event.target).addClass('selected');
} else {
$('#switcher button').toggleClass('hidden');
}
});
}); */


//3.18 Removing an event handler
/* $(document).ready(function() {
	$('#switcher').click(function(event) {
		if (!$(event.target).is('button')) {
		$('#switcher button').toggleClass('hidden');
		}
	});
	$('#switcher-narrow, #switcher-large').click(function() {
		$('#switcher').unbind('click');
	});
}); 
$(document).ready(function() {
$('#switcher-default').addClass('selected');
$('#switcher').click(function(event) {
if ($(event.target).is('button')) {
var bodyClass = event.target.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(event.target).addClass('selected');
}
});
}); */

//3.19 Event namespacing
/* $(document).ready(function() {
	$('#switcher').bind('click.collapse', function(event) {
		if (!$(event.target).is('button')) {
		$('#switcher button').toggleClass('hidden');
		}
	});
	$('#switcher-narrow, #switcher-large').click(function() {
		$('#switcher').unbind('click.collapse');
	});
	$('#switcher-default').click(function() {
		$('#switcher').bind('click.collapse', function(event) {
		if (!$(event.target).is('button')) {
		$('#switcher button').toggleClass('hidden');
		}
	});
	});
});

$(document).ready(function() {
$('#switcher-default').addClass('selected');
$('#switcher').click(function(event) {
if ($(event.target).is('button')) {
var bodyClass = event.target.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(event.target).addClass('selected');
}
});
});  */


//3.22  Rebinding events   function reference

$(document).ready(function() {
	var toggleSwitcher = function(event) {
		if (!$(event.target).is('button')) {
		$('#switcher button').toggleClass('hidden');
		}
	};
	$('#switcher').bind('click', toggleSwitcher);
	$('#switcher button').click(function() {
		$('#switcher').unbind('click', toggleSwitcher);
		if (this.id == 'switcher-default') {
			$('#switcher').bind('click', toggleSwitcher);
		}
	});
});

$(document).ready(function() {
$('#switcher-default').addClass('selected');
$('#switcher').click(function(event) {
if ($(event.target).is('button')) {
var bodyClass = event.target.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(event.target).addClass('selected');
}
});
}); 


//3.23  Simulating user interaction  .trigger()
$(document).ready(function() {
$('#switcher').trigger('click');
});