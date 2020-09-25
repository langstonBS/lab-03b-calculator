import {
    addition,
    subtraction,
    multiplication,
    division
} from "./mathUtils.js";

// variable declarations

const addInput1 = document.getElementById("add-input-1");
const addInput2 = document.getElementById("add-input-2");
const addResult = document.getElementById("add-result");

const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subResult = document.getElementById("sub-result");

const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multResult = document.getElementById("mult-result");

const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divResult = document.getElementById("div-result");

// handler functions

export function addHandler() {
    const input1 = Number(addInput1.value);
    const input2 = Number(addInput2.value);
    const result = addition(input1, input2);

    addResult.textContent = result;
}

export function subHandler() {
    const input1 = Number(subInput1.value);
    const input2 = Number(subInput2.value);
    const result = subtraction(input1, input2);
    subResult.textContent = result;
}

export function multHandler() {
    const input1 = Number(multInput1.value);
    const input2 = Number(multInput2.value);
    const result = multiplication(input1, input2);
    multResult.textContent = result;
}

export function divHandler() {
    const input1 = Number(divInput1.value);
    const input2 = Number(divInput2.value);
    const result = division(input1, input2);
    divResult.textContent = result;
}
