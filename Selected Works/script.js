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
//




