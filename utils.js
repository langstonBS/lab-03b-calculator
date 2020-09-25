// grabIndex handles dropdown swapping

export function grabIndex() {
    console.log(this.selectedIndex);
    let operationDropdown = document.getElementById("operation-dropdown");
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