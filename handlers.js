import {
    addition,
    subtraction,
    multiplication,
    division
} from './mathUtils.js';

// variable declarations
const numb1 = document.getElementById('input-1');
const numb2 = document.getElementById('input-2');

// element results
const addResult = document.getElementById('add-result');
const subResult = document.getElementById('sub-result');
const multResult = document.getElementById('mult-result');
const divResult = document.getElementById('div-result');

// handler functions

export function addHandler() {
    const input1 = Number(numb1.value);
    const input2 = Number(numb2.value);
    const result = addition(input1, input2);

    addResult.textContent = result;
}

export function subHandler() {
    const input1 = Number(numb1.value);
    const input2 = Number(numb2.value);
    const result = subtraction(input1, input2);
    subResult.textContent = result;
}

export function multHandler() {
    const input1 = Number(numb1.value);
    const input2 = Number(numb2.value);
    const result = multiplication(input1, input2);
    multResult.textContent = result;
}

export function divHandler() {
    const input1 = Number(numb1.value);
    const input2 = Number(numb2.value);
    const result = division(input1, input2);
    divResult.textContent = result;
}
