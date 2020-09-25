// IMPORT MODULES under test here:
import {
    addition,
    subtraction,
    multiplication,
    division,
} from "../mathUtils.js";

// import { example } from '../example.js';

const test = QUnit.test;

test("addition should return 8 if passed 4 and 4", (expect) => {
    const expected = 8;
    const addInput1 = 4;
    const addInput2 = 4;

    const actual = addition(addInput1, addInput2);

    expect.equal(actual, expected);
});

test("addition should return 12 if passed 8 and 4", (expect) => {
    const expected = 12;
    const addInput1 = 8;
    const addInput2 = 4;

    const actual = addition(addInput1, addInput2);

    expect.equal(actual, expected);
});

// test subtractTwoNumbers

test("subtraction should return 2 if passed 6 and 4", (expect) => {
    const expected = 2;
    const subtractInput1 = 6;
    const subtractInput2 = 4;

    const actual = subtraction(subtractInput1, subtractInput2);

    expect.equal(actual, expected);
});

test("subtraction should return 4 if passed 8 and 4", (expect) => {
    const expected = 4;
    const subtractInput1 = 8;
    const subtractInput2 = 4;

    const actual = subtraction(subtractInput1, subtractInput2);

    expect.equal(actual, expected);
});

// test multiplyTwoNumbers

test("multiplication should return 8 if passed 2 and 4", (expect) => {
    const expected = 8;
    const multiplyInput1 = 2;
    const multiplyInput2 = 4;

    const actual = multiplication(multiplyInput1, multiplyInput2);

    expect.equal(actual, expected);
});

test("multiplication should return 16 if passed 2 and 8", (expect) => {
    const expected = 16;
    const multiplyInput1 = 2;
    const multiplyInput2 = 8;

    const actual = multiplication(multiplyInput1, multiplyInput2);

    expect.equal(actual, expected);
});

// test divideTwoNumbers

test("division should return 4 if passed 8 and 2", (expect) => {
    const expected = 4;
    const divideInput1 = 8;
    const divideInput2 = 2;

    const actual = division(divideInput1, divideInput2);

    expect.equal(actual, expected);
});

test("division should return 2 if passed 4 and 2", (expect) => {
    const expected = 2;
    const divideInput1 = 4;
    const divideInput2 = 2;

    const actual = division(divideInput1, divideInput2);

    expect.equal(actual, expected);
});