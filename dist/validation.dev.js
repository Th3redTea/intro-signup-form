"use strict";

var inputs = Object.entries(document.getElementsByTagName('input'));
var button = document.getElementById('form');

function validation() {
  inputs.map(function (item) {
    var input = item[1];
    var label = input.nextElementSibling;
    var errorSvg = label.nextElementSibling;

    if (input.value == "") {
      input.style.border = "hsl(0, 100%, 74%) 2px solid";
      label.style.visibility = "visible";
      errorSvg.style.visibility = "visible";
    }
  });
  return false;
} // function validation(){
//     if(firstName.innerText == ""){
//         let label = firstName.nextElementSibling; 
//         console.log(label)
//         firstName.
//         label.style.visibility = "visible"
//     }
// }