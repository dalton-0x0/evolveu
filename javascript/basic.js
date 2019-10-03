//let numberInput = Number(userInput.value);
console.log("Hello World from basic.js");

let button = document.getElementById("clickButton");
let mouseOver = document.getElementById("main");
let userInput = document.getElementById("input");

button.addEventListener("click", onButtonClicked);
mouseOver.addEventListener("mouseover", mouseChangeText);
mouseOver.addEventListener("mouseout", mouseReturnText);
userInput.addEventListener("keypress", onPressEnter);

function mouseChangeText() {
  document.getElementById("main").innerHTML = "Moused Over!";
}

function mouseReturnText() {
  document.getElementById("main").innerHTML = "Returned to Original Text!";
}

function onButtonClicked() {
  if (inputLength() > 0) {
    console.log("I am the button clicked event");
    collectUserInput();
  }
}

function onPressEnter(event) {
  if (event.keyCode === 13) {
    console.log("I am the keypress event");
    collectUserInput();
    // onButtonClicked();
  }
}

function collectUserInput() {
  let numInput = Number(userInput.value);
  console.log(numInput + 1);
  console.log(size(numInput + 1));
  let result = size(numInput + 1);
  document.getElementById("msg").innerHTML = result;
  userInput.value = "";
}

function size(n) {
  if (n < 10) {
    return n + " is small";
  } else if (n < 20) {
    return n + " is med";
  } else {
    return n + " is large";
  }
  // n < 10 ? "small" : n > 10 ? "med" : "large";
}

function inputLength() {
  return userInput.value.length;
}
