var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
$('document').ready(function() {
var lastScrollTop = 0;
$(window).scroll(function(event){
//scrolled downwards
var st = $(this).scrollTop();
if (st > lastScrollTop){
var element = document.getElementById("mainNavbar");
element.style.transition="all 1s ease-in-out";
element.classList.remove("navbar-light");
element.classList.add("navbar-dark");
element.classList.add("bg-dark");
var element = document.getElementsByClassName("line")
for(i=0; i<element.length; i++) {
element[i].style.border = "1px solid white";
}
}
else if(st == lastScrollTop)
{
//do nothing
//In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
}
else {
//scrolled upwards
var element = document.getElementById("mainNavbar");
element.style.transition="all 1s ease-in-out";
element.classList.add("navbar-light");
element.classList.remove("navbar-dark");
element.classList.remove("bg-dark");
var element = document.getElementsByClassName("line")
for(i=0; i<element.length; i++) {
  element[i].style.border = "1px solid black";
}
}
lastScrollTop = st;
});});

function openNav() {
  document.getElementById("mySideNav").style.width="250px";
}

function closeNav()
{
  
  document.getElementById("mySideNav").style.width="0px";
  $("#navlinks").fadeOut();
}
