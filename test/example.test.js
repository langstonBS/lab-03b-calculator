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
    const input1 = 4;
    const input2 = 4;

    const actual = addition(input1, input2);

    expect.equal(actual, expected);
});

test("addition should return 12 if passed 8 and 4", (expect) => {
    const expected = 12;
    const input1 = 8;
    const input2 = 4;

    const actual = addition(input1, input2);

    expect.equal(actual, expected);
});

// test subtractTwoNumbers

test("subtraction should return 2 if passed 6 and 4", (expect) => {
    const expected = 2;
    const input1 = 6;
    const input2 = 4;

    const actual = subtraction(input1, input2);

    expect.equal(actual, expected);
});

test("subtraction should return 4 if passed 8 and 4", (expect) => {
    const expected = 4;
    const input1 = 8;
    const input2 = 4;

    const actual = subtraction(input1, input2);

    expect.equal(actual, expected);
});

// test multiplyTwoNumbers

test("multiplication should return 8 if passed 2 and 4", (expect) => {
    const expected = 8;
    const input1 = 2;
    const input2 = 4;

    const actual = multiplication(input1, input2);

    expect.equal(actual, expected);
});

test("multiplication should return 16 if passed 2 and 8", (expect) => {
    const expected = 16;
    const input1 = 2;
    const input2 = 8;

    const actual = multiplication(input1, input2);

    expect.equal(actual, expected);
});

// test divideTwoNumbers

test("division should return 4 if passed 8 and 2", (expect) => {
    const expected = 4;
    const input1 = 8;
    const input2 = 2;

    const actual = division(input1, input2);

    expect.equal(actual, expected);
});

test("division should return 2 if passed 4 and 2", (expect) => {
    const expected = 2;
    const input1 = 4;
    const input2 = 2;

    const actual = division(input1, input2);

    expect.equal(actual, expected);
});