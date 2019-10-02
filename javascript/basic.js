let input = document.getElementById("input");
let button = document.getElementById("clickButton");

console.log("Hello World form basic.js");

function onButtonClicked() {
  console.log("I am the button clicked event");
  console.log(input.value);
}
button.addEventListener("click", onButtonClicked);
