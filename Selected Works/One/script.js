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

    $(document).ready(function() {
    
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
  
  const toggle = document.getElementById("toggle");
  const refresh = document.getElementById("refresh");
  const theme = window.localStorage.getItem("theme");
  
  /* checks if the theme stored in localStorage is dark
  if yes apply the dark theme to the body */
  if (theme === "dark") document.body.classList.add("dark");
  
  // event listener stops when the change theme button is clicked
  toggle.addEventListener("click", () => {
     document.body.classList.toggle("dark");
     if (theme === "dark") {
       window.localStorage.setItem("theme", "light");
     } else window.localStorage.setItem("theme", "dark");
  });
  
  const themeSwitcher = document.querySelector('#theme');
  
  function switchTheme() {
    // toggle theme
    const toggleValue = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    
    // update localstorage value;
    localStorage.setItem('theme', toggleValue);
    
  
    // update theme
    setTheme();
  }
  
  function time() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }
    setInterval(time, 1000);
    
          });   
        }); 




