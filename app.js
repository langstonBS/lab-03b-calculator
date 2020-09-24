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

// initialize state

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

// set event listeners to update state and DOM
