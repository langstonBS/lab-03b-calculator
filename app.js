// import functions and grab DOM elements

import {
  addition,
  subtraction,
  multiplication,
  division,
} from "./mathUtils.js";

const addButton = document.getElementById("add-button");
const addInput1 = document.getElementById("add-input-1");
const addInput2 = document.getElementById("add-input-2");
const addResult = document.getElementById("add-result");

const subButton = document.getElementById("sub-button");
const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subResult = document.getElementById("sub-result");

const multButton = document.getElementById("mult-button");
const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multResult = document.getElementById("mult-result");

const divButton = document.getElementById("div-button");
const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divResult = document.getElementById("div-result");


const operationDropdown = document.getElementById("operation-dropdown");

// event handlers 

addButton.addEventListener("click", (e) => {
  addResult.textContent = addition(addInput1, addInput2);
});

subButton.addEventListener("click", (e) => {
  subResult.textContent = subtraction(subInput1, subInput2);
});

multButton.addEventListener("click", (e) => {
  multResult.textContent = multiplication(multInput1, multInput2);
});

divButton.addEventListener("click", (e) => {
  divResult.textContent = division(divInput1, divInput2);
});

// i think this is the ugliest function that exists, imsosorry

operationDropdown.onchange = function grabIndex() {
  console.log(this.selectedIndex);
  let selectedOperation = operationDropdown.value;
  let additionBody = document.getElementById("addition-body");
  let subtractionBody = document.getElementById("subtraction-body");
  let multiplicationBody = document.getElementById("multiplication-body");
  let divisionBody = document.getElementById("division-body");


  if (selectedOperation === "addition") {
    additionBody.style.display = "inherit";
    subtractionBody.style.display = "none";
    multiplicationBody.style.display = "none";
    divisionBody.style.display = "none";

    console.log("Addition!");
  }

  if (selectedOperation === "subtraction") {
    additionBody.style.display = "none";
    subtractionBody.style.display = "inherit";
    multiplicationBody.style.display = "none";
    divisionBody.style.display = "none";
    console.log("Subtraction!");
  }

  if (selectedOperation === "multiplication") {
    additionBody.style.display = "none";
    subtractionBody.style.display = "none";
    multiplicationBody.style.display = "inherit";
    divisionBody.style.display = "none";
    console.log("Multiplication!");
  }

  if (selectedOperation === "division") {
    additionBody.style.display = "none";
    subtractionBody.style.display = "none";
    multiplicationBody.style.display = "none";
    divisionBody.style.display = "inherit";
    console.log("Division!");
  }
}