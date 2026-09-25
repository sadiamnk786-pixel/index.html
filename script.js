function calculate() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let operator = document.getElementById("operator").value;

let result;

// Check empty fields
if (
    document.getElementById("num1").value === "" ||
    document.getElementById("num2").value === ""
) {
    document.getElementById("result").textContent =
        "Please enter both numbers";
    return;
}

// Perform calculation
if (operator === "+") {
    result = num1 + num2;
}

else if (operator === "-") {
    result = num1 - num2;
}

else if (operator === "*") {
    result = num1 * num2;
}

else if (operator === "/") {

    if (num2 === 0) {
        result = "Cannot divide by zero";
    } else {
        result = num1 / num2;
    }
}

// Show result
document.getElementById("result").textContent = result;


}
