
"use strict";

function main () {

  var diamond1 = document.getElementById("diamond1");
  var diamond2 = document.getElementById("diamond2");
  var diamond3 = document.getElementById("diamond3");
  var diamond4 = document.getElementById("diamond4");

  diamond1.addEventListener("click", clickDiamond1);
  diamond2.addEventListener("click", clickDiamond2);
  diamond3.addEventListener("click", clickDiamond3);
  diamond4.addEventListener("click", clickDiamond4);

}


function clickedDiamond1 () {
  var diamond1 = document.getElementById("diamond1");
  var diamond2 = document.getElementById("diamond2");
  var diamond3 = document.getElementById("diamond3");
  var diamond4 = document.getElementById("diamond4");

  diamond1.style.transform = "rotate(45deg)";
  diamond2.style.transform = "rotate(67.5deg)";
  diamond3.style.transform = "rotate(22.5deg)";
  diamond4.style.transform = "rotate(45deg)";
}


function clickedDiamond2 () {
  var diamond1 = document.getElementById("diamond1");
  var diamond2 = document.getElementById("diamond2");
  var diamond3 = document.getElementById("diamond3");
  var diamond4 = document.getElementById("diamond4");

  diamond1.style.transform = "rotate(22.5deg)";
  diamond2.style.transform = "rotate(45deg)";
  diamond3.style.transform = "rotate(45deg)";
  diamond4.style.transform = "rotate(67.5deg)";	
}


function clickedDiamond3 () {
  var diamond1 = document.getElementById("diamond1");
  var diamond2 = document.getElementById("diamond2");
  var diamond3 = document.getElementById("diamond3");
  var diamond4 = document.getElementById("diamond4");	

  diamond1.style.transform = "rotate(67.5deg)";
  diamond2.style.transform = "rotate(45deg)";
  diamond3.style.transform = "rotate(45deg)";
  diamond4.style.transform = "rotate(22.5deg)"
}


function clickDiamond4 () {
  var diamond1 = document.getElementById("diamond1");
  var diamond2 = document.getElementById("diamond2");
  var diamond3 = document.getElementById("diamond3");
  var diamond4 = document.getElementById("diamond4");

diamond1.style.transform = "rotate(45deg)";
diamond2.style.transform = "rotate(22.5deg)";
diamond3.style.transform = "rotate(67.5deg)";
diamond4.style.transform = "rotate(45deg)";
}


window.addEventListener("load", main)