//

function addition(input1, input2) {
  input1 = Number(input1.value);
  input2 = Number(input2.value);
  return input1 + input2;
}

function subtraction(input1, input2) {
  input1 = Number(input1.value);
  input2 = Number(input2.value);
  return input1 - input2;
}

function multiplication(input1, input2) {
  input1 = Number(input1.value);
  input2 = Number(input2.value);
  return input1 * input2;
}

function division(input1, input2) {
  input1 = Number(input1.value);
  input2 = Number(input2.value);
  return input1 / input2;
}

export { addition, subtraction, multiplication, division };
