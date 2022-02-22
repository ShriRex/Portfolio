$(document).ready(function() {
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }  
    function startDrag(e) {
        // determine event object
        if (!e) {
            var e = window.event;
        }
        if(e.preventDefault) e.preventDefault();

        // IE uses srcElement, others use target
        var targ = e.target ? e.target : e.srcElement;

        if (targ.className != 'dragme') {return};
        // calculate event X, Y coordinates
            offsetX = e.clientX;
            offsetY = e.clientY;

        // assign default values for top and left properties
        if(!targ.style.left) { targ.style.left='0px'};
        if (!targ.style.top) { targ.style.top='0px'};

        // calculate integer values for top and left 
        // properties
        coordX = parseInt(targ.style.left);
        coordY = parseInt(targ.style.top);
        drag = true;

        // move div element
            document.onmousemove=dragDiv;
        return false;
        
    }

    
    
    const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', () => {
	// Change the theme of the website
	document.body.classList.toggle('dark');
	console.log('Fuck you asshole');
})

    function dragDiv(e) {
        if (!drag) {return};
        if (!e) { var e= window.event};
        var targ=e.target?e.target:e.srcElement;
        // move div element
        targ.style.left=coordX+e.clientX-offsetX+'px';
        targ.style.top=coordY+e.clientY-offsetY+'px';
        return false;
    }
    function stopDrag() {
        drag=false;
    }
    window.onload = function() {
        document.onmousedown = startDrag;
        document.onmouseup = stopDrag;
    }

        function showTime() {

            let date = new Date();
            let hours = date.getHours(); //0-23
            let minutes = date.getMinutes(); //0 - 59
            let seconds = date.getSeconds(); //0-59
          
            let formatHours = convertFormat(hours)
          
            hours = checkTime(hours)
          
            hours = addZero(hours)
            minutes = addZero(minutes)
            seconds = addZero(seconds)
          
            document.getElementById('time').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
          
          }
          
          function convertFormat(time) {
            let formmat = 'PM'
            if (time >= 12) {
              format = 'AM'
            }
            return formmat;
          }
          
          function checkTime(time) {
            if (time === 0) {
              time = 12;
            }
            return time
          }
          
          function addZero(time) {
            if (time < 10) {
              time = "0" + time;
            }
            return time
          }
          
          showTime()
          setInterval(showTime, 1000)
        }); 




