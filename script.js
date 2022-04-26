 function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = " (X) " + x + ", (Y) " + y ;
    document.getElementById("demo").innerHTML = coords;
 }

 $(document).ready(function() {
	mouseX = function(event) {
		return event.clientX;
	};

	mouseY = function(event) {
		return event.clientY;
	};

	$cursor = $("#cursor");

	positionElement = function(event) {
		mouse = {
			h: $cursor.height(),
			w: $cursor.width(),
			x: mouseX(event),
			y: mouseY(event)
		};

		$("#cursor").css({
			top: mouse.y - mouse.h / 2 + "px",
			left: mouse.x - mouse.w / 2 + "px"
		});
	};

	$(window).on("mousemove", function(event) {
		$cursor.addClass("is-visible");
		positionElement(event);
	});

	$("a").hover(
		function() {
			$cursor.addClass("link-hover");
		},
		function() {
			$cursor.removeClass("link-hover");
		}
	);

	$(document).mouseleave(function() {
		$cursor.removeClass("is-visible");
	});
});

function doSomething(){
    clearTimeout(timeout);
    // do your "expensive" processing
    // ...
    // decide the job is done and return here or else
    // call doSomething again in sleepMS milliseconds
    timeout = setTimeout(doSomething,sleepMS);
 }
 var timeout;
 var sleepMS = 1000;
 
 
 doSomething();
 